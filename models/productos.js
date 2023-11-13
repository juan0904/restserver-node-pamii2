const { DataTypes } = require('sequelize');
const { bdmysqlRDS,bdmysql } = require('../db/connection');

const ProductPamii = bdmysqlRDS.define('brand_provider_product',
    {
        // Model attributes are defined here
        'id': {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        'sku': {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        'product': {
            type: DataTypes.STRING,
            allowNull: false
            // allowNull defaults to true
        },
        'characteristics': {
            type: DataTypes.TEXT,
            allowNull: false
            // allowNull defaults to true
        },
        'linkVideo': {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        'conditions': {
            type: DataTypes.TEXT,
            allowNull: false
            // allowNull defaults to true
        },
        'featured': {
            type: DataTypes.INTEGER
            // allowNull defaults to true
        },
        'brandProviderId': {
            type: DataTypes.INTEGER
            // allowNull defaults to true
        },
        'subcategoryId': {
            type: DataTypes.INTEGER
            // allowNull defaults to true
        },
        'warrantyId': {
            type: DataTypes.INTEGER
            // allowNull defaults to true
        },
        'optionsStatus': {
            type: DataTypes.ENUM('Si', 'No')
            // allowNull defaults to true
        },
        'optionsCreatedat': {
            type: DataTypes.DATE
            // allowNull defaults to true
        },
        'optionsUpdatedat': {
            type: DataTypes.DATE
            // allowNull defaults to true
        },        
        'long': {
            type: DataTypes.DOUBLE
            // allowNull defaults to true
        },
        'high': {
            type: DataTypes.DOUBLE
            // allowNull defaults to true
        },
        'wide': {
            type: DataTypes.DOUBLE
            // allowNull defaults to true
        },
        'weight': {
            type: DataTypes.DOUBLE
            // allowNull defaults to true
        },
        'volume': {
            type: DataTypes.DOUBLE
            // allowNull defaults to true
        },
        'applyDevolution': {
            type: DataTypes.ENUM('Si', 'No')
            // allowNull defaults to true
        },
        'service': {
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


const ReferencePamii = bdmysqlRDS.define('brand_provider_product_reference',
    {
        // Model attributes are defined here
        'id': {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        'sku': {
            type: DataTypes.STRING,
            allowNull: false,
        },

        'reference': {
            type: DataTypes.STRING,
            allowNull: false
            // allowNull defaults to true
        },
        'price': {
            type: DataTypes.DOUBLE,
            allowNull: false
            // allowNull defaults to true
        },

        'iva': {
            type: DataTypes.DOUBLE
            // allowNull defaults to true
        },

        'qty': {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        'color': {
            type: DataTypes.STRING
            // allowNull defaults to true
        },

        'qualification': {
            type: DataTypes.DOUBLE
            // allowNull defaults to true
        },

        'brandProviderProductId': {
            type: DataTypes.INTEGER
            // allowNull defaults to true
        },
        'optionsStatus': {
            type: DataTypes.ENUM('Si', 'No')
            // allowNull defaults to true
        },

        'optionsCreatedat': {
            type: DataTypes.DATE
            // allowNull defaults to true
        },
        'optionsUpdatedat': {
            type: DataTypes.DATE
            // allowNull defaults to true
        },
        
        'size': {
            type: DataTypes.STRING
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

const MultimediaPamii = bdmysqlRDS.define('brand_provider_product_reference_multimedia',
    {
        // Model attributes are defined here
        'id': {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        'url': {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        'type': {
            type: DataTypes.ENUM('Foto', 'Video')
            // allowNull defaults to true
        },

        'brandProviderProductReferenceId': {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        'optionsStatus': {
            type: DataTypes.ENUM('Si', 'No')
            // allowNull defaults to true
        },

        'optionsCreatedat': {
            type: DataTypes.DATE
            // allowNull defaults to true
        },
        'optionsUpdatedat': {
            type: DataTypes.DATE
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


const logProductPamii = bdmysql.define('log_brand_provider_product',
    {
        // Model attributes are defined here
        /*
        'id': {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        */
        'brandProviderProductId': {
            type: DataTypes.INTEGER,
            allowNull: false
            // allowNull defaults to true
        },
        'sku': {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        'product': {
            type: DataTypes.STRING,
            allowNull: false
            // allowNull defaults to true
        },
        'characteristics': {
            type: DataTypes.TEXT,
            allowNull: false
            // allowNull defaults to true
        },
        'linkVideo': {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        'conditions': {
            type: DataTypes.TEXT,
            allowNull: false
            // allowNull defaults to true
        },
        'featured': {
            type: DataTypes.INTEGER
            // allowNull defaults to true
        },
        'brandProviderId': {
            type: DataTypes.INTEGER
            // allowNull defaults to true
        },
        'subcategoryId': {
            type: DataTypes.INTEGER
            // allowNull defaults to true
        },
        'warrantyId': {
            type: DataTypes.INTEGER
            // allowNull defaults to true
        },
        'optionsStatus': {
            type: DataTypes.ENUM('Si', 'No')
            // allowNull defaults to true
        },
        'optionsCreatedat': {
            type: DataTypes.DATE
            // allowNull defaults to true
        },
        'optionsUpdatedat': {
            type: DataTypes.DATE
            // allowNull defaults to true
        },        
        'long': {
            type: DataTypes.DOUBLE
            // allowNull defaults to true
        },
        'high': {
            type: DataTypes.DOUBLE
            // allowNull defaults to true
        },
        'wide': {
            type: DataTypes.DOUBLE
            // allowNull defaults to true
        },
        'weight': {
            type: DataTypes.DOUBLE
            // allowNull defaults to true
        },
        'volume': {
            type: DataTypes.DOUBLE
            // allowNull defaults to true
        },
        'applyDevolution': {
            type: DataTypes.ENUM('Si', 'No')
            // allowNull defaults to true
        },
        'service': {
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
    ProductPamii,
    ReferencePamii,
    MultimediaPamii,
    logProductPamii
}