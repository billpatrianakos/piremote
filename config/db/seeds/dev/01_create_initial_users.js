// User seeds
// ==========
const bcrypt = require('bcrypt');

exports.seed = (knex) => {
  // Delete all existing users before seeding
  return knex('users').del()
    .then(() => bcrypt.hash('password', 12))
    .then((hash) => {
      return knex('users').insert([
        {
          id: 1,
          username: 'remote',
          password: hash,
          created_at: Date.now(),
          updated_at: Date.now(),
          api_key_id: 1
        }
      ]);
    });
};
