const { DataTypes } = require('sequelize');
const { bdmysql, bdmysqlRDS } = require('../db/connection');

/*
id	1		NO	int
	2	0	NO	int
	3	NULL	YES	int
providerId	4	NULL	YES	int
optionsStatus	5	'active'	NO	enum
optionsCreatedat	6	current_timestamp(6)	NO	datetime
optionsUpdatedat	7	current_timestamp(6)	NO	datetime
	8	0	NO	tinyint
	9	0	NO	tinyint
	10	''	NO	text
	11	''	NO	text
	12	''	NO	varchar
	13	''	NO	varchar
	14	''	NO	varchar
	15	'other'	NO	enum
	16	''	NO	varchar
*/

const BrandProvider = bdmysql.define('brand_provider', {
    'id': {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
            // allowNull defaults to true
    },
    // Model attributes are defined here
    'name': {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    //Maintain table name don't plurilize
    freezeTableName: true,

    // I don't want createdAt
    createdAt: false,

    // I don't want updatedAt
    updatedAt: false
});


const BrandProviderRDS = bdmysqlRDS.define('brand_provider', {
    'id': {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
            // allowNull defaults to true
    },
    // Model attributes are defined here
    'commission': {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    'brandId': {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    'providerId': {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    'optionsStatus': {
        type: DataTypes.ENUM('active', 'inactive')
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
    'webSite': {
        type: DataTypes.INTEGER
            // allowNull defaults to true
    },
    'webSales': {
        type: DataTypes.INTEGER
            // allowNull defaults to true
    },
    'platformOnline': {
        type: DataTypes.TEXT
            // allowNull defaults to true
    },
    'percentSalesOnline': {
        type: DataTypes.TEXT
            // allowNull defaults to true
    },
    'minPriceRange': {
        type: DataTypes.STRING
            // allowNull defaults to true
    },
    'maxPriceRange': {
        type: DataTypes.STRING
            // allowNull defaults to true
    },
    'numberOfArticles': {
        type: DataTypes.INTEGER
            // allowNull defaults to true
    },
    'businessType': {
        type: DataTypes.ENUM('other', 'another')
            // allowNull defaults to true
    },
    'prerequisites': {
        type: DataTypes.STRING
            // allowNull defaults to true
    },

}, {
    //Maintain table name don't plurilize
    freezeTableName: true,

    // I don't want createdAt
    createdAt: false,

    // I don't want updatedAt
    updatedAt: false
});


const BrandRDS = bdmysqlRDS.define('brand', {
    'id': {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
            // allowNull defaults to true
    },
    // Model attributes are defined here
    'brand': {
        type: DataTypes.STRING,
        allowNull: false
    },
    'image': {
        type: DataTypes.STRING,
        allowNull: false
    },
    'optionsStatus': {
        type: DataTypes.ENUM('active', 'inactive')
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
    'status': {
        type: DataTypes.ENUM('created', 'modified'),
        allowNull: false
    },

}, {
    //Maintain table name don't plurilize
    freezeTableName: true,

    // I don't want createdAt
    createdAt: false,

    // I don't want updatedAt
    updatedAt: false
});


const BrandProviderJobOfferRDS = bdmysqlRDS.define('brand_provider_job_offer', {
    // Model attributes are defined here
    'job': {
        type: DataTypes.STRING,
        allowNull: false
    },
    'vacancies': {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    'description': {
        type: DataTypes.TEXT,
        allowNull: false
    },
    'activationDate': {
        type: DataTypes.DATE,
        allowNull: false
    },
    'finishDate': {
        type: DataTypes.DATE,
        allowNull: false
    },
    'zoneId': {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    'brandProviderId': {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    'optionsStatus': {
        type: DataTypes.ENUM('active', 'inactive'),
        allowNull: false
    },
    'optionsCreatedat': {
        type: DataTypes.DATE
            // allowNull defaults to true
    },
    'optionsUpdatedat': {
        type: DataTypes.DATE
            // allowNull defaults to true
    },
}, {
    //Maintain table name don't plurilize
    freezeTableName: true,

    // I don't want createdAt
    createdAt: false,

    // I don't want updatedAt
    updatedAt: false
});


const BrandProviderJobOfferRequirementRDS = bdmysqlRDS.define('brand_provider_job_offer_requirement', {
    // Model attributes are defined here
    'requirement': {
        type: DataTypes.STRING,
        allowNull: false
    },
    'brandProviderJobOfferId': {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    'optionsStatus': {
        type: DataTypes.ENUM('active', 'inactive'),
        allowNull: false
    },
    'optionsCreatedat': {
        type: DataTypes.DATE
            // allowNull defaults to true
    },
    'optionsUpdatedat': {
        type: DataTypes.DATE
            // allowNull defaults to true
    },
}, {
    //Maintain table name don't plurilize
    freezeTableName: true,

    // I don't want createdAt
    createdAt: false,

    // I don't want updatedAt
    updatedAt: false
});


const BrandProviderZoneRDS = bdmysqlRDS.define('brand_provider_zone', {
    // Model attributes are defined here
    'brandProviderId': {
        type: DataTypes.STRING,
        allowNull: false
    },
    'zoneId': {
        type: DataTypes.STRING,
        allowNull: false
    },
    'optionsStatus': {
        type: DataTypes.ENUM('active', 'inactive')
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

}, {
    //Maintain table name don't plurilize
    freezeTableName: true,

    // I don't want createdAt
    createdAt: false,

    // I don't want updatedAt
    updatedAt: false
});



module.exports = {
    BrandProvider,
    BrandProviderRDS,
    BrandRDS,
    BrandProviderJobOfferRDS,
    BrandProviderJobOfferRequirementRDS,
    BrandProviderZoneRDS
}