//const Remote = require('../models/remote');
const { response, request } = require("express");
const { Sequelize } = require("sequelize");
//const { Plantilla } = require('../models/plantilla');
//const { bdmysql } = require('../db/connection');
//const { UsuarioPamii } = require('../models/usuario');
const { BrandProviderRDS } = require("../models/brand_provider");
const { BrandRDS } = require("../models/brand_provider");
const { BrandProviderJobOfferRDS } = require("../models/brand_provider");
const {
    BrandProviderJobOfferRequirementRDS,
} = require("../models/brand_provider");
const { BrandProviderZoneRDS } = require("../models/brand_provider");

//const bcryptjs = require('bcryptjs');
//const { body } = require('express-validator');

const { bdmysqlRDS } = require("../db/connection");

const { bdmysql } = require("../db/connection");


const brandProvidersGet = async(req = request, res = response) => {
    const { q, nombre = "No name", apikey, page = 1, limit } = req.query;

    try {
        const unosDatos = await BrandProviderRDS.findAll();

        res.json({
            data: unosDatos,
        });
    } catch (error) {
        res.json({
            msg: "get API - BrandProviderRDS Get",
            err: error,
            //            nombre,
            //            edad
        });
    }
};

const brandGet = async(req = request, res = response) => {
    const { q, nombre = "No name", apikey, page = 1, limit } = req.query;

    try {
        const unosDatos = await BrandRDS.findAll();

        res.json({
            data: unosDatos,
        });
    } catch (error) {
        res.json({
            msg: "get API - BrandProviderRDS Get",
            err: error,
            //            nombre,
            //            edad
        });
    }
};

const brandProvider1Get = async(req = request, res = response) => {
    try {
        const [results, metadata] = await bdmysqlRDS.query(
            "SELECT bp.id as brandProviderId, bp.providerId,p.businessName,bp.brandId,b.brand,concat(bp.id,' - ',p.businessName,' / ',b.brand) as total_name" +
            " FROM brand_provider bp INNER JOIN brand b ON b.id = bp.brandId" +
            " INNER JOIN provider p ON p.id = bp.providerId " +
            " ORDER BY bp.providerId,bp.brandId"
        );

        res.json({
            data: results,
        });
    } catch (error) {
        res.json({
            msg: "post API - usuariosPost",
            err: error,
            //            nombre,
            //            edad
        });
    }
};

const brandProvider2Get = async(req = request, res = response) => {

    const { providerid } = req.params;

    try {
        const [results, metadata] = await bdmysqlRDS.query(
            "SELECT bp.id as brandProviderId, bp.providerId,p.businessName,bp.brandId,b.brand,concat(bp.id,' - ',p.businessName,' / ',b.brand) as total_name" +
            " FROM brand_provider bp INNER JOIN brand b ON b.id = bp.brandId" +
            " INNER JOIN provider p ON p.id = bp.providerId " +
            " WHERE bp.providerId = " + providerid +
            " ORDER BY bp.providerId,bp.brandId"
        );

        res.json({
            data: results,
        });
    } catch (error) {
        res.json({
            msg: "post API - usuariosPost",
            err: error,
            //            nombre,
            //            edad
        });
    }
};



const zonesGet = async(req = request, res = response) => {
    try {
        const [results, metadata] = await bdmysqlRDS.query(
            "SELECT z.id as zonaid,z.zone," +
            "c.id as cityId,c.name as ciudad, c.dane," +
            "t.id as stateId,t.name as departamento," +
            "y.id as countryId,y.country as country," +
            "concat(z.id, ' - ', z.zone) as total_zona" +
            " FROM system_zone z" +
            " INNER JOIN system_city c ON z.cityId = c.id" +
            " INNER JOIN system_state t ON c.stateId = t.id" +
            " INNER JOIN system_country y" +
            " ON t.countryId = y.id " +
            " WHERE z.optionsStatus = 'active' " +
            " ORDER BY z.zone"
        );

        res.json({
            data: results,
        });
    } catch (error) {
        res.json({
            msg: "post API - usuariosPost",
            err: error,
            //            nombre,
            //            edad
        });
    }
};

const providerGet = async(req = request, res = response) => {
    try {
        const [results, metadata] = await bdmysqlRDS.query(
            "SELECT *" +
            " FROM provider" +
            " WHERE optionsStatus = 'active'" +
            " ORDER BY id"
        );

        res.json({
            data: results,
        });
    } catch (error) {
        res.json({
            msg: "post API - providerGet",
            err: error,
            //            nombre,
            //            edad
        });
    }
};


const provider1Get = async(req = request, res = response) => {

    const { providerid } = req.params;

    try {
        const [results, metadata] = await bdmysqlRDS.query(
            "SELECT *" +
            " FROM provider" +
            " WHERE optionsStatus = 'active' AND id = " + providerid +
            " ORDER BY id"
        );

        res.json({
            data: results,
        });
    } catch (error) {
        res.json({
            msg: "post API - providerGet",
            err: error,
            //            nombre,
            //            edad
        });
    }
};


const optionGet = async(req = request, res = response) => {

    const { optionid } = req.params;

    try {
        const [results, metadata] = await bdmysql.query(
            "SELECT *" +
            " FROM auth_options" +
            " WHERE id = '" + optionid + "'" +
            " ORDER BY id"
        );

        res.json({
            data: results,
        });
    } catch (error) {
        res.json({
            msg: "post API - providerGet",
            err: error,
            //            nombre,
            //            edad
        });
    }
};






const brandProviderJobOfferPost = async(req, res = response) => {
    const {
        job,
        vacancies,
        description,
        activationDate,
        finishDate,
        zoneId,
        brandProviderId,
        optionsStatus,
    } = req.body;

    const jobOffer = new BrandProviderJobOfferRDS({
        job,
        vacancies,
        description,
        activationDate,
        finishDate,
        zoneId,
        brandProviderId,
        optionsStatus,
    });

    try {
        // Guardar en BD
        await jobOffer.save();

        res.json({
            ok: true,
            data: jobOffer,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Hable con el Administrador",
            err: error,
        });
    }
};

const brandProviderJobOfferRequirementPost = async(req, res = response) => {
    const { requirement, brandProviderJobOfferId, optionsStatus } = req.body;

    const jobOfferRequirement = new BrandProviderJobOfferRequirementRDS({
        requirement,
        brandProviderJobOfferId,
        optionsStatus,
    });

    try {
        // Guardar en BD
        await jobOfferRequirement.save();

        res.json({
            ok: true,
            data: jobOfferRequirement,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Hable con el Administrador",
            err: error,
        });
    }
};

const brandProviderZonePost = async(req, res = response) => {
    const { brandProviderId, zoneId, optionsStatus } = req.body;

    const brandProviderZone = new BrandProviderZoneRDS({
        brandProviderId,
        zoneId,
        optionsStatus,
    });

    try {
        const [results, metadata] = await bdmysqlRDS.query(
            "SELECT *" +
            " FROM brand_provider_zone" +
            " WHERE brandProviderId = " +
            brandProviderId +
            " AND zoneId = " +
            zoneId
        );

        //console.log(results);

        if (results.length == 0) {
            // Guardar en BD
            await brandProviderZone.save();

            res.json({
                ok: true,
                data: brandProviderZone,
            });
        } else {
            res.json({
                ok: true,
                data: results,
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Hable con el Administrador",
            err: error,
        });
    }
};

module.exports = {
    brandProvidersGet,
    brandProvider1Get,
    brandGet,
    zonesGet,
    brandProviderJobOfferPost,
    brandProviderJobOfferRequirementPost,
    brandProviderZonePost,
    providerGet,
    brandProvider2Get,
    provider1Get,
    optionGet
};