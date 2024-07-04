import sequelize from './sequelize.js';
import User from '../models/User.js';
import Product from '../models/Product.js';
import ProductPictures from '../models/ProductPictures.js';
import News from '../models/News.js';
import Agenda from '../models/Agenda.js';
import Market from '../models/Market.js';

// Définir les associations

// Association entre User et News     
User.hasMany(News, { foreignKey: 'user_id' });
News.belongsTo(User, { foreignKey: 'user_id' });

// Association entre User et Agenda
User.hasMany(Agenda, { foreignKey: 'user_id' });
Agenda.belongsTo(User, { foreignKey: 'user_id' });

// Association entre User et Market
User.hasMany(Market, { foreignKey: 'user_id' });
Market.belongsTo(User, { foreignKey: 'user_id' });

// Association entre Product et ProductPictures
Product.hasMany(ProductPictures, { foreignKey: 'product_id' });
ProductPictures.belongsTo(Product, { foreignKey: 'product_id' });

// Association entre User et Product
User.hasMany(Product, { foreignKey: 'user_id', scope: { role: ['admin', 'Producer'] } });
Product.belongsTo(User, { foreignKey: 'user_id' });

// Association entre Product et Market
Product.belongsTo(Market, { foreignKey: 'market_id' });
Market.hasMany(Product, { foreignKey: 'market_id' });

// Synchroniser les modèles
const syncDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('La connexion a été établie avec succès.');

        // Synchroniser les modèles dans l'ordre approprié
        await User.sync({ force: true });
        await Market.sync({ force: true });
        await Product.sync({ force: true });
        await ProductPictures.sync({ force: true });
        await News.sync({ force: true });
        await Agenda.sync({ force: true });

        console.log('Tous les modèles ont été synchronisés avec succès.');
    } catch (error) {
        console.error('Impossible de se connecter à la base de données:', error);
    } finally {
        await sequelize.close();
    }
};

syncDatabase();

export { User, Product, ProductPictures, News, Agenda, Market};