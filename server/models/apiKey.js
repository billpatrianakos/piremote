// API Key model
// =============

'use strict';

let Bookshelf = require('./index'),
    User      = require('./user');

let ApiKey = Bookshelf.Model.extend({
  tableName: 'api_keys',
  hasTimestamps: true,
  user: function() {
    return this.hasOne('User');
  }
});

module.exports = Bookshelf.model('ApiKey', ApiKey);
