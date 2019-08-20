// Create users table
exports.up = function(knex) {
  return knex.schema
    .createTable('users', (table) => {
      table.increments('id');
      table.string('username', 255).notNullable();
      table.string('password').notNullable();
      table.timestamps();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('users');
};
