const { DataTypes } = require('sequelize');
const { bdmysqlRDS,bdmysql } = require('../db/connection');

const Heroes = bdmysql.define('heroes',
    {
        // Model attributes are defined here
        'nombre': {
            type: DataTypes.STRING,
            allowNull: false
            // allowNull defaults to true
        },
        'bio': {
            type: DataTypes.STRING,
            allowNull: false
            // allowNull defaults to true
        },
        'img': {
            type: DataTypes.TEXT,
            allowNull: false
            // allowNull defaults to true
        },
        'aparicion': {
            type: DataTypes.DATE
            // allowNull defaults to true
        },
        'casa': {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        'id': {
            type: DataTypes.INTEGER,
            //allowNull: false,
            primaryKey: true
        },

    },

    {
        //Maintain table name don't plurilize
        freezeTableName: true,

        // I don't want createdAt
        createdAt: false,

        // I don't want updatedAt
        updatedAt: false
    }
);


module.exports = {
    Heroes,
}