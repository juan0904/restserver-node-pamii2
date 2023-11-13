const { Router } = require('express');

//const { validarJWT } = require('../middlewares/validar-jwt');
//const { esAdminRole } = require('../middlewares/validar-roles');

const {
    validarJWT,
    esAdminRole,
} = require('../middlewares');


const {
    brandProvidersGet,
    brandProvider1Get,
    brandGet,
    zonesGet,
    brandProviderJobOfferPost,
    brandProviderJobOfferRequirementPost,
    brandProviderZonePost,
    providerGet,
    provider1Get,
    brandProvider2Get,
    optionGet
} = require('../controllers/brand_providers');

const router = Router();

router.get('/',
    validarJWT, //Midlleware para el Tokens
    //esAdminRole, //Midlewara para validar el Role
    brandProvidersGet);

router.get('/brand',
    validarJWT, //Midlleware para el Tokens
    //esAdminRole, //Midlewara para validar el Role
    brandGet);

router.get('/brandProvider',
    validarJWT, //Midlleware para el Tokens
    //esAdminRole, //Midlewara para validar el Role
    brandProvider1Get);

router.get('/zones',
    validarJWT, //Midlleware para el Tokens
    //esAdminRole, //Midlewara para validar el Role
    zonesGet);

router.post('/joboffer',
    validarJWT, //Midlleware para el Tokens
    //esAdminRole, //Midlewara para validar el Role
    brandProviderJobOfferPost);

router.post('/jobofferrequirement',
    validarJWT, //Midlleware para el Tokens
    //esAdminRole, //Midlewara para validar el Role
    brandProviderJobOfferRequirementPost);

router.post('/brandproviderZone',
    validarJWT, //Midlleware para el Tokens
    //esAdminRole, //Midlewara para validar el Role
    brandProviderZonePost);

router.get('/providers',
    validarJWT, //Midlleware para el Tokens
    //esAdminRole, //Midlewara para validar el Role
    providerGet);

router.get('/providers/:providerid',
    validarJWT, //Midlleware para el Tokens
    //esAdminRole, //Midlewara para validar el Role
    provider1Get);


router.get('/brandProvider/:providerid',
    validarJWT, //Midlleware para el Tokens
    //esAdminRole, //Midlewara para validar el Role
    brandProvider2Get);

router.get('/option/:optionid',
    validarJWT, //Midlleware para el Tokens
    //esAdminRole, //Midlewara para validar el Role
    optionGet);


module.exports = router;