// User model
// ==========

'use strict';

let Bookshelf = require('./index'),
    ApiKey    = require('./apiKey');

let User = Bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  apiKey: function() {
    return this.belongsTo('ApiKey');
  }
});

module.exports = Bookshelf.model('User', User);
