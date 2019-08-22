
exports.up = function(knex) {
  return knex.schema
    .createTable('api_keys', (table) => {
      table.increments('id');
      table.string('key').notNullable();
      table.boolean('active');
      table.timestamps();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('api_keys');
};
