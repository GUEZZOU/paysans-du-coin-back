// on récupère la fonction express du package express
import express from 'express';
import dotenv from "dotenv";
dotenv.config();

// on choisit un port comme d'habitude
const port = process.env.PORT || 3000;

// on execute la fonction express pour récupérer un objet Application, notre serveur http
// une version enrichie du serveur http qu'on créait avec le module http
const app = express();

// on place le serveur en mode écoute pour entendre les requêtes arriver
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`);
});