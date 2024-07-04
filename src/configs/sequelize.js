// import des modules nécessaires
import { Sequelize } from "sequelize"; // import de la classe Sequelize du package sequelize pour créer une instance de connexion à la base de données
import dotenv from "dotenv"; // import du package dotenv pour récupérer les variables d'environnement
dotenv.config(); // chargement des variables d'environnement

// création d'une instance de connexion à la base de données
const sequelize = new Sequelize({// création d'une instance de connexion à la base de données
    dialect: "postgres",
    database: process.env.DB_NAME,// récupération du nom de la base de données dans les variables d'environnement
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    logging: false // désactivation des logs
});

// Synchroniser les modèles avec la base de données

export default sequelize;