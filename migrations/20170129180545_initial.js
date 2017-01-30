const usersTable = table => {
  table.increments('user_id').primary();
  table.string('email').notNullable();
  table.timestamps(true, true);
};

exports.up = function(knex, Promise) {
  return Promise.all([ knex.schema.createTable('users', usersTable) ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([ knex.schema.dropTableIfExists('users') ]);
};

