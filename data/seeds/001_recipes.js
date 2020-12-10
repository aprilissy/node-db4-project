
exports.seed = function(knex) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_id: 1, recipe_name: 'Candy Apples'},
        {recipe_id: 2, recipe_name: 'Brownies'},
        {recipe_id: 3, recipe_name: 'Pork Chops'}
      ]);
    });
};
