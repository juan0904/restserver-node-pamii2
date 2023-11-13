const { DataTypes } = require('sequelize');
const { bdmysqlRDS } = require('../db/connection');

/*
idparametro varchar(50) not null,
 nombre varchar(150) not null,
 descripcion varchar(500) not null,
 valor_entero int null,
 valor_decimal numeric(15,3) null,
 fecha datetime null,
 texto varchar(250) null,
 optionsCreatedat datetime(6) NOT NULL DEFAULT current_timestamp(6),
 optionsUpdatedat datetime(6) NULL DEFAULT current_timestamp(6),
 brandProviderId int(10) null
*/

const ParametrosPamii = bdmysqlRDS.define('brands_control_parametros',
    {
        // Model attributes are defined here
        'idparametro': {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        'nombre': {
            type: DataTypes.STRING,
            allowNull: false
            // allowNull defaults to true
        },
        'descripcion': {
            type: DataTypes.STRING,
            allowNull: false
            // allowNull defaults to true
        },
        'valor_entero': {
            type: DataTypes.INTEGER
            // allowNull defaults to true
        },
        'valor_decimal': {
            type: DataTypes.DOUBLE
            // allowNull defaults to true
        },
        'fecha': {
            type: DataTypes.DATE
            // allowNull defaults to true
        },
        'texto': {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        'optionsCreatedat': {
            type: DataTypes.DATE,
            //allowNull: false
        },
        'optionsUpdatedat': {
            type: DataTypes.DATE
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
    ParametrosPamii
}