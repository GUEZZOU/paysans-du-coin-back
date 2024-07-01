# Les Paysans du Coin

## Description
Les Paysans du Coin est une association de producteurs locaux de la région Velay Pilat, dédiée à la mise en valeur des produits fermiers locaux. Nous organisons des marchés mensuels à Saint-Victor-Malescours pour promouvoir nos produits et rencontrer notre communauté.

# Les Paysans du Coin API
API REST pour l'association "Les Paysans du Coin", permettant de gérer les producteurs, les actualités, les événements, et les contacts.

## Table des matières
1. [Description de la structure](#description-de-la-structure)
2. [Technologies utilisées](#technologies-utilisées)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Fonctionnalités](#fonctionnalités)
6. [Endpoints](#endpoints)

## Description de la structure
Nous sommes une équipe de producteurs de la région Velay Pilat, entre la Loire et la Haute-Loire. Notre association, Les Paysans du Coin, vise à promouvoir nos produits fermiers à travers des marchés mensuels et divers événements.

## Description de l'API
Cette API permet de gérer les producteurs locaux, les actualités de l'association, les événements futurs, et les informations de contact. Elle fournit des endpoints pour effectuer des opérations CRUD (Créer, Lire, Mettre à jour, Supprimer).

## Technologies utilisées
- **Node.js**
- **Express.js**
- **PostgreSQL**
- **Sequelize (ORM)**
- **Dotenv**

## Installation
### Prérequis
- Node.js
- PostgreSQL

### Étapes d'installation
1. Clonez le dépôt :
   ```sh
   git clone https://github.com/votre-repo/les-paysans-du-coin.git
   cd les-paysans-du-coin

## Endpoints
### Authentification
POST /auth/login : Authentifie un utilisateur.
Producteurs
GET /producers : Récupère la liste des producteurs.
POST /producers : Crée un nouveau producteur.
GET /producers/:id : Récupère les détails d'un producteur.
PUT /producers/:id : Met à jour un producteur.
DELETE /producers/:id : Supprime un producteur.
### Actualités
GET /news : Récupère les actualités.
POST /news : Crée une nouvelle actualité.
GET /news/:id : Récupère les détails d'une actualité.
PUT /news/:id : Met à jour une actualité.
DELETE /news/:id : Supprime une actualité.
### Événements (Agenda)
GET /events : Récupère les événements à venir.
POST /events : Crée un nouvel événement.
GET /events/:id : Récupère les détails d'un événement.
PUT /events/:id : Met à jour un événement.
DELETE /events/:id : Supprime un événement.
### Contacts
GET /contacts : Récupère les informations de contact.
POST /contacts : Crée une nouvelle entrée de contact.
GET /contacts/:id : Récupère les détails d'un contact.
PUT /contacts/:id : Met à jour un contact.
DELETE /contacts/:id : Supprime un contact

## Authentification JWT

Le token JWT est généré par le serveur lorsqu'un utilisateur se connecte avec succès.  
Ce token est ensuite renvoyé au client et stocké côté client, généralement dans les cookies ou dans le stockage local.  
Pour chaque requête ultérieure que le client envoie au serveur, il inclut ce token JWT dans l'en-tête de la requête.  
Le serveur utilise ce token pour authentifier l'utilisateur et vérifier ses autorisations.  
Exemple d'en-tête : `Authorization: Bearer <token>`

On peut voir le contenu de ce token quand on le récupère, sur https://jwt.io/ en le collant simplement.

En l'occurence, sur ce projet, le token est programmé pour durer 24H, au delà de cette durée, il sera re-généré au moment de la première connexion pour 24h.

## Hash du password avec BCRYPT
Sert à stocker le password des utilisateurs en version hashée (cryptée),  
pour éviter que lors d'un piratage, les mots de passe des utilisateurs soient récupérés.

C'est une obligation légale de sécuriser le stockage des données sensibles.
