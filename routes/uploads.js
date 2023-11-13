const { Router } = require('express');
const { check } = require('express-validator');
const { cargarArchivo } = require('../controllers/uploads');
const { validarCampos } = require('../middlewares/validar-campos');

//const { login } = require('../controllers/auth');

const router = Router();


router.post('/',
//[
//    check('correo','El correo es obligatorio').isEmail(),
//    check('password','La contraseña es obligatoria').not().isEmpty(),
//    validarCampos
//], 
cargarArchivo);


module.exports = router;