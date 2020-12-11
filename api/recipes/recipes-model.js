const db = require('../../data/db-config');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}

function getRecipes() {
  return db('recipes');
}

function getShoppingList(recipe_id) {
  return db('step_ingredients as si')
  .join('ingredients as i', 'si.ingredient_id', 'i.ingredient_id')
  .join('steps as s', 'si.step_id', 's.step_id')
  .join('recipes r', 's.recipe_id', 'r.recipe_id')
  .select('si.ingredient_amount', 'i.ingredient_name')
  .where('r.recipe_id', recipe_id)

// select
//   si.ingredient_amount,
//   i.ingredient_name
// from step_ingredients si
// join ingredients i
//   on si.ingredient_id = i.ingredient_id
// join steps s
//   on si.step_id = s.step_id
// join recipes r 
//   on s.recipe_id = r.recipe_id
// where r.recipe_id = 1;
}

function getInstructions(recipe_id) {
  return db('steps as s').select('s.step_order', 's.step_text').where('s.recipe_id', recipe_id)

// select
//  s.step_order,
//  s.step_text
// from steps as s
// where s.recipe_id = 1;
}