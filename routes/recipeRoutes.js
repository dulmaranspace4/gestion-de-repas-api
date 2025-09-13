const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

// Routes pour les recettes
router.get('/', recipeController.getAllRecipes);
router.post('/', recipeController.createRecipe);

module.exports = router;