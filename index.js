// on récupère la fonction express du package express
import express from 'express';
import dotenv from "dotenv";
dotenv.config();
//importe la connexion à la base de données
import sequelize from './src/configs/sequelize.js';

// on choisit un port comme d'habitude
const port = process.env.SERVER_PORT || 3000;

// on execute la fonction express pour récupérer un objet Application, notre serveur http
// une version enrichie du serveur http qu'on créait avec le module http
const app = express();

app.get('/', (req, res) => {
  res.send('Hello les-paysans-du-coin!');
});

// Start server avec database
sequelize.authenticate()
.then(() => console.log('Connexion à la base de données réussie'))
.then(() => app.listen(port, () => {
    console.log(`Server en route sur http://localhost:${port}/`)
    // console.log(`Back-office admin sur http://localhost:${port}/admin`)

}))
.catch((error) => console.error('Impossible de se connecter à la base de données:', error));


