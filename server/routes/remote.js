const { exec }         = require('child_process'),
      commands         = require('../../config/commands'),
      _                = require('lodash'),
      // config           = _.merge(require('../../config/application').defaults, require('../../config/application')[process.env.NODE_ENV || 'development']),
      express          = require('express')
      RemoteController = express.Router(),
      authorize        = require('../lib/authorize'),
      keyCheck         = require('../lib/keyCheck'),
      getCurrentUser   = require('../lib/getCurrentUser');

RemoteController.route('/?')
  // GET /remote
  // -----------
  // Show the remote web interface
  .get(authorize, getCurrentUser, (req, res, next) => {
    let apiKey = req.user.apiKey;
    res.render('remote', { api_key: apiKey, commands: commands, helpers: require('../lib/helpers') })
  });

RemoteController.route('/command/?')
  // POST /command
  // -------------
  // Send a JSON request to command API
  .post(keyCheck, (req, res, next) => {
    let command  = req.body.command;
    let response = '...';
    let errors   = [];

    if (commands[command]) {
      // Handle single key and multi-key commands
      if (!commands[command].length) {
        // handle single key commands
        exec(`${__dirname}/../../system/remote press ${commands[command].keyName} ${commands[command].holdTime}`, (error, stdout, stderr) => {
          if (error) errors.push(error);

          response += stdout;
          response += stderr;

          res.status(200).json({ status: 'ok', response: response, errors: errors });
        });
      } else {
        // handle multi-key press commands
        let timesRun = 0
        commands[command].forEach((cmd) => {
          exec(`${__dirname}/../../system/remote hold ${cmd.keyName} ${cmd.holdTime}`, (error, stdout, stderr) => {
            if (error) errors.push(error);

            response += stdout;
            response += stderr;

            timesRun += 1;
            if (timesRun === commands[command].length) {
              res.status(200).json({ status: 'ok', response: response, errors: errors });
            }
          });
        });
      }
    } else {
      next('Unrecognized remote command. Make sure to send a remote command that matches the name of a command object key.')
    }
  });

module.exports = RemoteController;
