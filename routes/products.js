const { Router } = require('express');

//const { validarJWT } = require('../middlewares/validar-jwt');
//const { esAdminRole } = require('../middlewares/validar-roles');

const {
    validarJWT,
    esAdminRole,
} = require('../middlewares');


const {
    productsGet,
    productGet,
    productSkuGet,
    referencesGet,
    multimediasGet,
    ajustaproductsGet,
    productsLogGet
} = require('../controllers/products');

const router = Router();

router.get('/products/:id',
    validarJWT, //Midlleware para el Tokens
    //esAdminRole, //Midlewara para validar el Role
    productsGet);

router.get('/product/:id',
    validarJWT, //Midlleware para el Tokens
    //esAdminRole, //Midlewara para validar el Role
    productGet);

router.get('/productsku/:id',
    validarJWT, //Midlleware para el Tokens
    //esAdminRole, //Midlewara para validar el Role
    productSkuGet);

router.get('/references/:id',
    validarJWT, //Midlleware para el Tokens
    //esAdminRole, //Midlewara para validar el Role
    referencesGet);

router.get('/multimedias/:id',
    validarJWT, //Midlleware para el Tokens
    //esAdminRole, //Midlewara para validar el Role
    multimediasGet);

router.get('/ajustaproducts/:id',
    validarJWT, //Midlleware para el Tokens
    //esAdminRole, //Midlewara para validar el Role
    ajustaproductsGet);

router.get('/logproducts/:id',
    validarJWT, //Midlleware para el Tokens
    //esAdminRole, //Midlewara para validar el Role
    productsLogGet);
    
    
module.exports = router;