const { exec }         = require('child_process'),
      commands         = require('../../config/commands'),
      _                = require('lodash'),
      config           = _.merge(require('../../config/application').defaults, require('../../config/application')[process.env.NODE_ENV || 'development']),
      express          = require('express')
      RemoteController = express.Router(),
      authorize        = require('../lib/authorize');

RemoteController.route('/?')
  // GET /remote
  // -----------
  // Show the remote web interface
  .get(authorize, (req, res, next) => {
    res.render('remote', { api_key: config.api_key, commands: commands })
  });

RemoteController.route('/command/?')
  // POST /command
  // -------------
  // Send a JSON request to command API
  .post((req, res, next) => {
    let command  = req.body.command;
    let response = '...';

    if (commands[command]) {
      // Handle single key and multi-key commands
      if (!command.length) {
        // handle single key commands
        exec(`../../system/remote ${command.keyName} ${command.holdTime}`, (error, stdout, stderr) => {
          if (error) {
            return next(error);
          }
          response += stdout;
          response += stderr;
        });

        res.status(200).json({ status: 'ok', response: response });
      } else {
        // handle multi-key press commands
        response = '...';
        command.forEach((cmd) => {
          exec(`../../system/remote ${command.keyName} ${command.holdTime}`, (error, stdout, stderr) => {
            if (error) {
              return next(error);
            }
            response += stdout;
            response += stderr;
          });
        });
        res.status(200).json({ status: 'ok', response: response });
      }
    } else {
      next('Unrecognized remote command. Make sure to send a remote command that matches the name of a command object key.')
    }
  });

module.exports = RemoteController;
