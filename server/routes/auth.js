// Home Controller
// ===============

'use strict';

const express         = require('express'),
      AuthController  = express.Router(),
      User            = require(__dirname + '/../models/user'),
      bcrypt          = require('bcrypt');

AuthController.route('/?')
  // GET /
  // -----
  // Render login page
  .get((req, res, next) => {
    if (req.session && req.session.loggedIn) {
      res.redirect('/remote');
    } else res.render('login', { messages: req.flash('info') });
  })
  // POST /
  // ------
  // Log user in
  .post((req, res, next) => {
    const { username, password } = req.body;
    new User({ username: username })
      .fetch({ require: true })
      .then((user) => {
        bcrypt.compare(password, user.get('password'))
          .then((response) => {
            if (response) {
              req.session.userId = user.get('id');
              req.session.loggedIn = true;
              res.redirect('/');
            } else {
              res.status(401).render('login', { messages: ['Username or password was incorrect'] });
            }
          });
      })
      .catch((err) => {
        // User not found
        res.status(401).render('login', { messages: ['Username or password was incorrect'] });
      });
  });

module.exports = AuthController;
