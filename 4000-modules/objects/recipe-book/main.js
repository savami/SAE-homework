function Recipe(title, servings, ingredients) {
    this.title = title;
    this.servings = servings;
    this.ingredients = ingredients;
}

const newRecipe = new Recipe('Mole Recipe', 2, ['Cinnamon', 'Cumin', 'Cocoa']);

console.log(newRecipe.title)
console.log("Serves: " + newRecipe.servings)
console.log("Ingredients: \n\t\t - " + newRecipe.ingredients.join('\n\t\t - '));