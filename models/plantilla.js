const { DataTypes } = require('sequelize');
const { bdmysql, bdmysqlRDS } = require('../db/connection');


const Plantilla = bdmysql.define('brand_provider_plantilla',
    {
        // Model attributes are defined here
        'sku del producto': {
            type: DataTypes.STRING,
            allowNull: false
        },
        'nombre del producto': {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        'caracteristicas': {
            type: DataTypes.TEXT
            // allowNull defaults to true
        },
        'condiciones': {
            type: DataTypes.TEXT
            // allowNull defaults to true
        },
        'id de la garantia': {
            type: DataTypes.INTEGER
            // allowNull defaults to true
        },
        'aplica devolucion': {
            type: DataTypes.ENUM('Si', 'No')
            // allowNull defaults to true
        },
        'peso': {
            type: DataTypes.DOUBLE
            // allowNull defaults to true
        },
        'volumen': {
            type: DataTypes.DOUBLE
            // allowNull defaults to true
        },
        'largo': {
            type: DataTypes.DOUBLE
            // allowNull defaults to true
        },
        'alto': {
            type: DataTypes.DOUBLE
            // allowNull defaults to true
        },
        'ancho': {
            type: DataTypes.DOUBLE
            // allowNull defaults to true
        },
        'id de la categoria': {
            type: DataTypes.INTEGER
            // allowNull defaults to true
        },
        'sku de la referencia': {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        'referencia': {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        'price': {
            type: DataTypes.DOUBLE
            // allowNull defaults to true
        },
        'iva': {
            type: DataTypes.DOUBLE
            // allowNull defaults to true
        },
        'qty': {
            type: DataTypes.DOUBLE
            // allowNull defaults to true
        },
        'color': {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        'size': {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        'referencia_color': {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        'nro_fotos': {
            type: DataTypes.INTEGER
            // allowNull defaults to true
        },
        'brandProviderId': {
            type: DataTypes.INTEGER
            // allowNull defaults to true
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


const PlantillaRDS = bdmysqlRDS.define('brand_provider_plantilla',
    {
        // Model attributes are defined here
        'sku del producto': {
            type: DataTypes.STRING,
            allowNull: false
        },
        'nombre del producto': {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        'caracteristicas': {
            type: DataTypes.TEXT
            // allowNull defaults to true
        },
        'condiciones': {
            type: DataTypes.TEXT
            // allowNull defaults to true
        },
        'id de la garantia': {
            type: DataTypes.INTEGER
            // allowNull defaults to true
        },
        'aplica devolucion': {
            type: DataTypes.ENUM('Si', 'No')
            // allowNull defaults to true
        },
        'peso': {
            type: DataTypes.DOUBLE
            // allowNull defaults to true
        },
        'volumen': {
            type: DataTypes.DOUBLE
            // allowNull defaults to true
        },
        'largo': {
            type: DataTypes.DOUBLE
            // allowNull defaults to true
        },
        'alto': {
            type: DataTypes.DOUBLE
            // allowNull defaults to true
        },
        'ancho': {
            type: DataTypes.DOUBLE
            // allowNull defaults to true
        },
        'id de la categoria': {
            type: DataTypes.INTEGER
            // allowNull defaults to true
        },
        'sku de la referencia': {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        'referencia': {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        'price': {
            type: DataTypes.DOUBLE
            // allowNull defaults to true
        },
        'iva': {
            type: DataTypes.DOUBLE
            // allowNull defaults to true
        },
        'qty': {
            type: DataTypes.DOUBLE
            // allowNull defaults to true
        },
        'color': {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        'size': {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        'referencia_color': {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        'nro_fotos': {
            type: DataTypes.INTEGER
            // allowNull defaults to true
        },
        'brandProviderId': {
            type: DataTypes.INTEGER
            // allowNull defaults to true
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
    Plantilla,
    PlantillaRDS
}