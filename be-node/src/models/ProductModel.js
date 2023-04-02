const sequelize = require('../../db');
const { DataTypes } = require('sequelize');

const Product = sequelize.define('product', {
    id: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    artist: {
        type: DataTypes.STRING,
        allowNull: false
    },
    listeners: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    percent: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    upc: {
        type: DataTypes.STRING,
        allowNull: false
    },
    releaseDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    label: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imprint: {
        type: DataTypes.STRING,
        allowNull: false
    },
    starred: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
});

module.exports = Product;