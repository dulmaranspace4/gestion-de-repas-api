const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Routes de base
app.get('/', (req, res) => {
    res.send('Bienvenue sur l\'API Gestion des Repas');
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});