//const Remote = require('../models/remote');
const { response, request } = require('express');
//const { Plantilla } = require('../models/plantilla');
//const { bdmysql } = require('../db/connection');
//const { UsuarioPamii } = require('../models/usuario');
const {
    ProductPamii,
    ReferencePamii,
    MultimediaPamii,
    logProductPamii
} = require('../models/productos');
//const bcryptjs = require('bcryptjs');
//const { body } = require('express-validator');



const productsGet = async(req = request, res = response) => {

    const anbrandProviderId = req.params.id;

    //const {anbrandProviderId} = req.body;

    var condition = { where: { brandProviderId: anbrandProviderId } };

    const unosDatos = await ProductPamii.findAndCountAll(condition);

    //console.log(unosDatos);

    res.json(
        unosDatos['rows']
    );
}


const productGet = async(req = request, res = response) => {

    const anbrandProviderProductId = req.params.id;

    const unProducto = await ProductPamii.findByPk(anbrandProviderProductId);

    res.json({
        ok: true,
        msg: 'get API productGet',
        datos: unProducto,
    });

}


const productSkuGet = async(req = request, res = response) => {

    const anSku = req.params.id;

    var condition = { where: { sku: anSku } };

    const unosDatos = await ProductPamii.findAndCountAll(condition);

    //console.log(unosDatos);

    res.json({
        ok: true,
        msg: 'get API productSkuGet',
        datos: unosDatos['rows'],
    });

}



const referencesGet = async(req = request, res = response) => {

    const anbrandProviderProductId = req.params.id;

    //const {anbrandProviderId} = req.body;

    var condition = { where: { brandProviderProductId: anbrandProviderProductId } };

    const unosDatos = await ReferencePamii.findAndCountAll(condition);

    res.json(
        unosDatos['rows']
    );
}


const multimediasGet = async(req = request, res = response) => {

    const anbrandProviderProductReferenceId = req.params.id;

    //const {anbrandProviderId} = req.body;

    var condition = { where: { brandProviderProductReferenceId: anbrandProviderProductReferenceId } };

    const unosDatos = await MultimediaPamii.findAndCountAll(condition);

    res.json(
        unosDatos['rows']
    );
}


const ajustaproductsGet = async(req = request, res = response) => {

try {
            
    const anbrandProviderId = req.params.id;

    var condition = { where: { brandProviderId: anbrandProviderId } };

    const unosProductos = await ProductPamii.findAndCountAll(condition);

    let ajustes = 0

    let i = 0
    while (i <  unosProductos.rows.length) {
        let miProducto = unosProductos.rows[i];

        const anbrandProviderProductId = miProducto.id;

        const unProducto = await ProductPamii.findByPk(anbrandProviderProductId);


        /*** AJUSTE DE ARISTAS PARa UN PROVEEDOR MARCA */
        let cambio = false

        let largo = unProducto.long;
        let alto = unProducto.high;
        let ancho = unProducto.wide;
    
        if (unProducto.long > 450){
           unProducto.long = 450;
           cambio = true;
        }
    
        if (unProducto.high > 170){
            unProducto.high = 170;
            cambio = true;
        }
    
        if (unProducto.wide > 180){
           unProducto.wide = 180;
           cambio = true;
        }
          
        // Guardar en BD de RDS
        if (cambio){
           console.log("Cambios en: ",unProducto.long,unProducto.high,unProducto.wide);
           try {
                await unProducto.save();
                //console.log(unProducto);
                    
            } catch (error) {
                console.log(error);
            }

           const logProductPamiiNew = logProductPamii.build(
            {
                'brandProviderProductId': unProducto.id,
                'sku': unProducto.sku,
                'product':  unProducto.product,
                'characteristics': unProducto.characteristics,
                'linkVideo': unProducto.linkVideo,
                'conditions': unProducto.conditions,
                'featured': unProducto.featured,
                'brandProviderId': unProducto.brandProviderId,
                'subcategoryId': unProducto.subcategoryId,
                'warrantyId': unProducto.warrantyId,
                'optionsStatus': unProducto.optionsStatus,
                //'optionsCreatedat': unProducto.optionsCreatedat,
                //'optionsUpdatedat': unProducto.optionsUpdatedat,        
                'long': largo,
                'high': alto,
                'wide': ancho,
                'weight': unProducto.weight,
                'volume': unProducto.volume,
                'applyDevolution': unProducto.applyDevolution,
                'service': unProducto.service        
            });

            //console.log(logProductPamiiNew);

            try {
                await logProductPamiiNew.save();
                //console.log(logProductPamii1);
            } catch (error) {
                console.log(error);

            }

            ajustes = ajustes + 1

        }   

        i = i + 1;
    }

    res.json({
        ok: true,
        msg: 'get API ajustaproductsGet - Quest',
        nro_ajustes: ajustes,
    });

} catch (error) {
    console.log(error);
    res.json({
        ok: false,
        msg: 'get API - Quest',
        error: error,
    });

}


}


const productsLogGet = async(req = request, res = response) => {

    const anbrandProviderId = req.params.id;

    //const {anbrandProviderId} = req.body;

    var condition = { where: { brandProviderId: anbrandProviderId } };

    const unosDatos = await logProductPamii.findAndCountAll(condition);

    //console.log(unosDatos);

    res.json({
        msg: 'get API - Log Products',
        datos: unosDatos
    });
    
}


module.exports = {
    productsGet,
    productGet,
    productSkuGet,
    referencesGet,
    multimediasGet,
    ajustaproductsGet,
    productsLogGet
}