const recipes = [];

exports.getAllRecipes = (req, res) => {
    res.json(recipes);
};

exports.createRecipe = (req, res) => {
    const recipe = req.body;
    recipes.push(recipe);
    res.status(201).json(recipe);
};