const { Router } = require('express');


//const { validarJWT } = require('../middlewares/validar-jwt');
//const { esAdminRole } = require('../middlewares/validar-roles');

const {
    validarCampos,
    validarJWT,
    esAdminRole,
    tieneRole
} = require('../middlewares');


const {
    plantillaGet,
    plantillaBrandsGet,
    logplantillaGet,
    plantillaPost,
    questSoap,
} = require('../controllers/plantilla');


const router = Router();



router.get('/:id',
    validarJWT, //Midlleware para el Tokens
    //esAdminRole, //Midlewara para validar el Role
    plantillaGet);

router.get('/brands/:id',
    validarJWT, //Midlleware para el Tokens
    //esAdminRole, //Midlewara para validar el Role
    plantillaBrandsGet);


router.get('/logplantilla/:id',
    validarJWT, //Midlleware para el Tokens
    //esAdminRole, //Midlewara para validar el Role
    logplantillaGet);

router.post('/',
    validarJWT, //Midlleware para el Tokens
    //esAdminRole, //Midlewara para validar el Role
    plantillaPost);

//Procesa el SOAP de QUEST
router.post('/quest',
    validarJWT, //Midlleware para el Tokens
    //esAdminRole, //Midlewara para validar el Role
    questSoap);

module.exports = router;