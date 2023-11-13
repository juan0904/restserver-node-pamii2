//const Remote = require('../models/remote');
const { response, request } = require('express');
//const { Plantilla } = require('../models/plantilla');
//const { bdmysql } = require('../db/connection');
//const { UsuarioPamii } = require('../models/usuario');
const {
    ParametrosPamii,
} = require('../models/parametros');
//const bcryptjs = require('bcryptjs');
//const { body } = require('express-validator');



const parametrosGet = async(req = request, res = response) => {

    //const anbrandProviderId = req.params.id;

    //const {anbrandProviderId} = req.body;

    //var condition = { where: { brandProviderId: anbrandProviderId } };

    const unosDatos = await ParametrosPamii.findAndCountAll();

    //console.log(unosDatos);

    res.json({
        ok: true,
        msg: 'get API parametroBrandProviderGet',
        datos: unosDatos['rows'],
    });

}

const parametroGet = async(req = request, res = response) => {

    const anParametroId = req.params.id;

    const unParametro = await ParametrosPamii.findByPk(anParametroId);

    res.json({
        ok: true,
        msg: 'get API parametroGet',
        datos: unParametro,
    });

}


const parametrosBrandProviderGet = async(req = request, res = response) => {

    const anbrandProviderId = req.params.id;

    //const {anbrandProviderId} = req.body;

    var condition = { where: { brandProviderId: anbrandProviderId } };

    const unosDatos = await ParametrosPamii.findAndCountAll(condition);

    //console.log(unosDatos);

    res.json({
        ok: true,
        msg: 'get API parametroBrandProviderGet',
        datos: unosDatos['rows'],
    });


}

const parametrosPost = async (req, res = response) => {

    //const { nombre, correo, password, rol , estado, brandProviderId } = req.body;

    const body = req.body;
 
    try {

        const existeParametro = await ParametrosPamii.findOne({ where: { idparametro: body.idparametro } });

        
        if (existeParametro) {
            return res.status(400).json({ok:false,
                msg: 'Ya existe un parametro ' + body.idparametro
            })
        }
        /*
        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        usuario.password = bcryptjs.hashSync(password, salt);
        */
        const parametro = new ParametrosPamii(body);


        // Guardar en BD
        await parametro.save();

        res.json({ok:true,
            data:parametro
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ok:false,
            msg: 'Hable con el Administrador',
            err: error
        })

    }

}


const parametrosPut = async (req, res = response) => {

    const { id } = req.params;
    const body = req.body;
   //const { _id, password, google, correo, ...resto } = req.body;

    console.log(id);
    console.log(body);

    //var condition = { where :{id: id} };

    try {

        const parametro = await ParametrosPamii.findByPk(id);

        if (!parametro) {
            return res.status(404).json({ok:false,
                msg: 'No existe un parametro con el id: ' + id
            })
        }

        //console.log("ID",id)
        //console.log("BODY",body)
               
        const parametroNew = await parametro.update(body,{
            new: true,
          });

        res.json({ok:true,data:parametroNew});
    

    } catch (error) {
        console.log(error);
        res.status(500).json({ok:false,
            msg: 'Hable con el Administrador',
            err: error
        })

    }


}


const parametrosDelete = async (req, res = response) => {
    const { id } = req.params;
   //const { _id, password, google, correo, ...resto } = req.body;

    //const uid = req.uid;

    //console.log(id);
 
    var condition = { where :{id: id} };

    try {

        const parametroBorrado = await ParametrosPamii.findByPk(id);
        //const usuarioAutenticado = req.usuario;

        if (!parametroBorrado) {
            return res.status(404).json({ok:false,
                msg: 'No existe un parametro con el id: ' + id
            })
        }

        //Borrado Logico.
        //await usuario.update({estado:false});

        //Borrado de la BD
        await parametroBorrado.destroy();

        res.json({ok:true,
            data:parametroBorrado, 
            //autenticado:usuarioAutenticado
        });
    

    } catch (error) {
        console.log(error);
        res.status(500).json({ok:false,
            msg: 'Hable con el Administrador',
            err: error
        })

    }

}


module.exports = {
    parametrosGet ,
    parametroGet,
    parametrosBrandProviderGet,
    parametrosPost,
    parametrosPut,
    parametrosDelete

}