exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del().then(function() {
    const now = new Date().toISOString();

    return Promise.all([
      // Inserts seed entries
      knex('users').insert({
        user_id: 1,
        email: 'user1@email.com',
        created_at: now,
        updated_at: now
      }),
      knex('users').insert({
        user_id: 2,
        email: 'user2@email.com',
        created_at: now,
        updated_at: now
      }),
      knex('users').insert({
        user_id: 3,
        email: 'user3@email.com',
        created_at: now,
        updated_at: now
      })
    ]);
  });
};

