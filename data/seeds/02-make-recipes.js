const recipes = [
    {recipe_name: 'omelet'},
    {recipe_name: 'baked bacon'},
    {recipe_name: 'salad'},
]

const ingredients = [
    {ingredient_name: 'egg', ingredient_unit: 'lbs'},
    {ingredient_name: 'cheese', ingredient_unit: 'kilos'},
    {ingredient_name: 'spinach', ingredient_unit: 'kilos'},
    {ingredient_name: 'arugula', ingredient_unit: 'grams'},
    {ingredient_name: 'bacon', ingredient_unit: 'lbs'},
]

const steps = [
    {step_text: 'crack eggs', step_number: 1, recipe_id: 1},
    {step_text: 'sprinkle cheese', step_number: 2, recipe_id: 1},
    {step_text: 'raise pig', step_number: 1, recipe_id: 2},
    {step_text: 'butcher humanely', step_number: 2, recipe_id: 2},
    {step_text: 'bake', step_number: 3, recipe_id: 2},
    {step_text: 'destem spinach', step_number: 1, recipe_id: 3},
    {step_text: 'toss with arugula', step_number: 2, recipe_id: 3},
]

const step_ingredients = [
    {step_id: 1, ingredient_id: 1, quantity: 2},
    {step_id: 2, ingredient_id: 2, quantity: 1},
    {step_id: 3, ingredient_id: 5, quantity: 5},
    {step_id: 6, ingredient_id: 3, quantity: 1},
    {step_id: 7, ingredient_id: 4, quantity: 500},
]

exports.seed = async function(knex){
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)
}