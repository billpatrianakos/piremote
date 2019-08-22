// Get current user
// ================
// Loads the current user object and adds it to the request object

let User = require('../models/user');

module.exports = (req, res, next) => {
  if (req.session && req.session.loggedIn) {
    new User({ id: req.session.userId })
      .fetch({ require: true, withRelated: ['apiKey'] })
      .then((user) => {
        req.user = user.toJSON();
        next();
      })
      .catch((err) => {
        next(err);
      });
  } else {
    req.flash('info', 'You must be logged in to see this page');
    res.redirect('/');
  }
};
