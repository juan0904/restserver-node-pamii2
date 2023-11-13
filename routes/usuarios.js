const { Router } = require('express');

//const { validarJWT } = require('../middlewares/validar-jwt');
//const { esAdminRole } = require('../middlewares/validar-roles');


const {
    validarCampos,
    validarJWT,
    esAdminRole,
    tieneRole
} = require('../middlewares');


const { usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch,
    usuariosAnGet
} = require('../controllers/usuarios');

const router = Router();


router.get('/', 
validarJWT, //Midlleware para el Tokens
esAdminRole, //Midlewara para validar el Role
 usuariosGet);

router.get('/:id', 
validarJWT, //Midlleware para el Tokens
esAdminRole, //Midlewara para validar el Role
 usuariosAnGet);

router.post('/', 
validarJWT, //Midlleware para el Tokens
esAdminRole, //Midlewara para validar el Role
 usuariosPost);

router.put('/:id', 
validarJWT, //Midlleware para el Tokens
esAdminRole, //Midlewara para validar el Role
usuariosPut);

router.delete('/:id',
validarJWT, //Midlleware para el Tokens
esAdminRole, //Midlewara para validar el Role
usuariosDelete);

router.patch('/', usuariosPatch);


module.exports = router;