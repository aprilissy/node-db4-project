
exports.seed = function(knex) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_id: 1, step_text: 'Do the first thing', step_order: 1, recipe_id: 1},
        {step_id: 2, step_text: 'Do the next thing', step_order: 2, recipe_id: 1},
        {step_id: 3, step_text: 'open the cupboard', step_order: 1, recipe_id: 2}
      ]);
    });
};
