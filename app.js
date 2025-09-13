const express = require('express');
const recipeRoutes = require('./routes/recipeRoutes');
const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/recipes', recipeRoutes);

app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}`);
});