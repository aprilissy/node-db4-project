
exports.seed = function(knex) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_id: 1, ingredient_name: 'apple'},
        {ingredient_id: 2, ingredient_name: 'pork'},
        {ingredient_id: 3, ingredient_name: 'cocoa powder'}
      ]);
    });
};
