
exports.seed = function(knex) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex('step_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('step_ingredients').insert([
        {step_ingredients_id: 1, ingredient_id: 1, step_id:1, ingredient_amount:3},
        {step_ingredients_id: 2, ingredient_id: 2, step_id:2, ingredient_amount:0.5},
        {step_ingredients_id: 3, ingredient_id: 3, step_id:3, ingredient_amount:50}
      ]);
    });
};
