

RemoteController.route('/?')
  // GET /remote
  // -----------
  // Show the remote web interface
  .get((req, res, next) => {
    //
  });

RemoteController.route('/command/?')
  // POST /command
  // -------------
  // Send a JSON request to command API
  .post((req, res, next) => {
    let command = req.body.command;

    // Handle single key and multi-key commands
    if (!command.length) {
      // handle single key commands here
    } else {
      // handle multi-key press commands here
    }
  });

module.exports = RemoteController;
