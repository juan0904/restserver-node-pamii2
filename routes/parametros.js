const { Router } = require('express');

//const { validarJWT } = require('../middlewares/validar-jwt');
//const { esAdminRole } = require('../middlewares/validar-roles');

const {
    validarJWT,
    //esAdminRole,
} = require('../middlewares');

const {
    parametrosGet,
    parametroGet,
    parametrosBrandProviderGet,
    parametrosPost,
    parametrosPut,
    parametrosDelete
} = require('../controllers/parametros');

const router = Router();

router.get('/parametros',
    validarJWT, //Midlleware para el Tokens
    //esAdminRole, //Midlewara para validar el Role
    parametrosGet);

router.get('/parametros/:id',
    validarJWT, //Midlleware para el Tokens
    //esAdminRole, //Midlewara para validar el Role
    parametroGet);

router.get('/parametrosbp/:id',
    validarJWT, //Midlleware para el Tokens
    //esAdminRole, //Midlewara para validar el Role
    parametrosBrandProviderGet);

router.post('/parametros', 
    validarJWT, //Midlleware para el Tokens
    //esAdminRole, //Midlewara para validar el Role
     parametrosPost);
    
router.put('/parametros/:id', 
    validarJWT, //Midlleware para el Tokens
    //esAdminRole, //Midlewara para validar el Role
    parametrosPut);
    
router.delete('/parametros/:id',
    validarJWT, //Midlleware para el Tokens
    //esAdminRole, //Midlewara para validar el Role
    parametrosDelete);
        
module.exports = router;