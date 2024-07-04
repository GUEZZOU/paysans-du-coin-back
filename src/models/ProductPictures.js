import { DataTypes } from 'sequelize';
import sequelize from '../configs/sequelize.js';
import Product from './Product.js';

const ProductPictures = sequelize.define('ProductPictures', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  image_url: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
        model: Product,
        key: 'id'
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

export default ProductPictures;
