
exports.up = function(knex) {
  return knex.schema.table('users', (table) => {
    table.integer('api_key_id').references('id').inTable('api_keys');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
