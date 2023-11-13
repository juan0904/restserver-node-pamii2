const { UsuarioPamii } = require("../models/usuario");

const emailExiste = async( correo = '' ) => {

    // Verificar si el correo existe
    const existeEmail = await UsuarioPamii.findOne({ correo });
    if ( existeEmail ) {
        throw new Error(`El correo: ${ correo }, ya está registrado`);
    }
}

const existeUsuarioPorId = async( id ) => {

    // Verificar si el correo existe
    const existeUsuario = await UsuarioPamii.findById(id);
    if ( !existeUsuario ) {
        throw new Error(`El id no existe ${ id }`);
    }
}

module.exports = {
    //esRoleValido,
    emailExiste,
    existeUsuarioPorId
}