const Remote = require('../models/remote');
const { response, request } = require('express');
const { Plantilla, PlantillaRDS } = require('../models/plantilla');
const { logPlantilla } = require('../models/log_plantilla');
const { bdmysqlRDS,bdmysql } = require('../db/connection');

const plantillaGet = async (req = request, res = response) => {

    const anbrandProviderId = req.params.id;

    //const { anbrandProviderId } = req.body;
    var condition = { where: { brandProviderId: anbrandProviderId } };

    const unaPlantilla = await PlantillaRDS.findAndCountAll(condition);

    res.json({
        ok: false,
        msg: 'get API - PlantillaRDS',
        datos: unaPlantilla['rows']
    });
}

const plantillaBrandsGet = async (req = request, res = response) => {

    const anbrandProviderId = req.params.id;

    //const { anbrandProviderId } = req.body;

    var condition = { where: { brandProviderId: anbrandProviderId } };

    const unaPlantilla = await Plantilla.findAndCountAll(condition);

    res.json({
        ok: true,
        msg: 'get API - PlantillaBrands',
        datos: unaPlantilla['rows']
    });
}


const logplantillaGet = async (req = request, res = response) => {

    const anbrandProviderId = req.params.id;

    //const { anbrandProviderId = 2 } = req.body;

    var condition = { where: { brandProviderId: anbrandProviderId } };

    const unlogPlantilla = await logPlantilla.findAndCountAll(condition);

    res.json({
        ok: true,
        msg: 'get API - PlantillaLog',
        datos: unlogPlantilla
    });
}


const plantillaPost = async (req, res = response) => {

    //const { nombre, edad } = req.body;

    const { body } = req;

    try {
        const plantilla = new Plantilla(body);
        await plantilla.save();

        res.json(plantilla);

    } catch (error) {
        res.json({
            msg: 'post API - usuariosPost',
            err: error
            //            nombre,
            //            edad
        });
    }
}


const questSoap = async (req = request, res = response) => {

try {


    let nowInicio = new Date();
    console.log(nowInicio)

    const { q, nombre = 'No name', apikey, page = 1, limit, bpid } = req.body;

    let anBrandProviderId = bpid;

    //Borra los Datos del la Plantilla en Pamii Brands
    var query = "DELETE FROM brand_provider_plantilla WHERE brandProviderId = :anBrandProviderId";

    try {
       await bdmysql.query(query, { replacements: { anBrandProviderId: anBrandProviderId} });
   
       //Descomentariar despues de la revision
       //await bdmysql.query(query, { replacements: { anBrandProviderId: anBrandProviderId}, type: bdmysql.QueryTypes.SELECT });
    } catch (error) {
        console.log(error);
    }


    let datos = await Remote.loadQuest(
        'Unoee_Quest_real',
        '1',
        'PAMII',
        //'RPS_CONSULTA_CATALOGO_VEO_V2',
        'RPS_CONSULTA_CATALOGO_VEO_PAMII_V1',
        'integracion.pamii',
        'R.W]@1IXf0'
    );


    const resultado = datos['soap:Body']['EjecutarConsultaXMLResponse']['EjecutarConsultaXMLResult']['diffgr:diffgram']['NewDataSet']['Resultado'];


    let i = 0
    while (i < resultado.length) {
        //console.log(resultado[i]);
        let miDato = resultado[i];
        let j = miDato['$']['msdata:rowOrder']
        //console.log(j);
        //console.log(miDato['MARCA']);

        //const plantilla = new Plantilla();


        /****************************************************************************/
        //Nueva Funcionalidad para ajustar los pesos en los productos de QUEST
        let newWeigth = parseFloat(miDato['_Weight']);

        if (newWeigth > 0) {

           //Los pesos siempre vienen en gramos se pasa a Kilogramos
           newWeigth = newWeigth/1000;

           if (newWeigth < 3) {
               newWeigth = 3;
           }
           else {
               newWeigth = Math.round(newWeigth);
           }
        }
        //Nueva Funcionalidad para ajustar los pesos en los productos de QUEST
        /****************************************************************************/


        //Graba la plantilla en Pamii RDS
        const plantillaRDS = PlantillaRDS.build(
            {
                'sku del producto': miDato['REFERENCIA_COLOR'],
                'nombre del producto': miDato['NOMBRE'],
                'caracteristicas': miDato['DESCRIPCION'],
                'condiciones': 'Acepta devoluciones',
                'id de la garantia': 2,
                'aplica devolucion': 'Si',
                'peso': newWeigth,
                'volumen': parseFloat(miDato['_CubicWeigh']),
                'largo': parseFloat(miDato['_Length']),
                'alto': parseFloat(miDato['_Height']),
                'ancho': parseFloat(miDato['_Width']),
                'id de la categoria': 3,
                'sku de la referencia': miDato['CODBARRAS'],
                'referencia': miDato['DESC_ECOMMERCE'] + ' Color: ' + miDato['COLOR_DESC'] + ' Talla: ' + miDato['TALLA'],
                'price': parseFloat(miDato['PVP_002']),
                'iva': 0.19,
                'qty': parseInt(miDato['STK_DISPONIBLE']),
                'color': miDato['COLOR_HEXADECIMAL'],
                'size': miDato['TALLA'],
                'referencia_color': miDato['REFERENCIA_COLOR'],
                'nro_fotos': 10,
                'brandProviderId': anBrandProviderId
            });

        //console.log(plantillaRDS);

        try {
            await plantillaRDS.save();
            //console.log(plantilla);
        } catch (error) {
            console.log(error);

            /*
            res.json({
                ok: false,
                msg: 'get API - Quest',
                nro_registros_cargados: (i - 1),
                //data: resultado
            });
            */
        }

        //Graba la Plantilla en Pamii Brands
        const plantillaPamii = Plantilla.build(
            {
                'sku del producto': miDato['REFERENCIA_COLOR'],
                'nombre del producto': miDato['NOMBRE'],
                'caracteristicas': miDato['DESCRIPCION'],
                'condiciones': 'Acepta devoluciones',
                'id de la garantia': 2,
                'aplica devolucion': 'Si',
                'peso': parseFloat(miDato['_Weight']),
                'volumen': parseFloat(miDato['_CubicWeigh']),
                'largo': parseFloat(miDato['_Length']),
                'alto': parseFloat(miDato['_Height']),
                'ancho': parseFloat(miDato['_Width']),
                'id de la categoria': 3,
                'sku de la referencia': miDato['CODBARRAS'],
                'referencia': miDato['DESC_ECOMMERCE'] + ' Color: ' + miDato['COLOR_DESC'] + ' Talla: ' + miDato['TALLA'],
                'price': parseFloat(miDato['PVP_002']),
                'iva': 0.19,
                'qty': parseInt(miDato['STK_DISPONIBLE']),
                'color': miDato['COLOR_HEXADECIMAL'],
                'size': miDato['TALLA'],
                'referencia_color': miDato['REFERENCIA_COLOR'],
                'nro_fotos': 10,
                'brandProviderId': anBrandProviderId
            });
    
        //console.log(plantillaPamii);
    
        try {
            await plantillaPamii.save();
                //console.log(plantilla);
        } catch (error) {
            console.log(error);
    
            /*
            res.json({
                ok: false,
                msg: 'get API - Quest',
                nro_registros_cargados: (i - 1),
                    //data: resultado
            });
            */
        }


        i = i + 1;

    }

    try {
        //var anBrandProviderId = 2;
        var anImageURL = 'https://ftp.quest.com.co/imagenes/';
        var query = "CALL brand_provider_procedure(:anBrandProviderId,:anImageURL)";

        //await bdmysqlRDS.query(query, { replacements: { anBrandProviderId: anBrandProviderId, anImageURL: anImageURL } });

        //Descomentariar despues de la revision
        await bdmysqlRDS.query(query, { replacements: { anBrandProviderId: anBrandProviderId, anImageURL: anImageURL }, type: bdmysqlRDS.QueryTypes.SELECT });

        console.log('PROCEDIMIENTO TERMINADO...')

        let nowFin = new Date();
        console.log(nowFin);

        //Define el registro a guardar en el Log de la Plantilla
        const logplantilla = logPlantilla.build(
            {
                'brandproviderid': anBrandProviderId,
                'fecha_horainicio': nowInicio,
                'fecha_horafin': nowFin,
                'status': 'Registros cargados: ' + i,
            });


        //console.log(logplantilla);
        //Salva la informacion de los registros cargados a Pamii    
        await logplantilla.save();


        res.json({
            ok: true,
            msg: 'get API - QuestSOAP',
            nro_registros_cargados: i,
            //data: resultado
        });


    } catch (error) {
        console.log(error);
        res.json({
            ok: false,
            msg: 'get API - QuestSOAP',
            error: error,
        });

    }

} catch (error) {
    console.log(error);
    res.json({
        ok: false,
        msg: 'get API - QuestSOAP',
        error: error,
    });

}

}


module.exports = {
    plantillaGet,
    plantillaBrandsGet,    
    logplantillaGet,
    plantillaPost,
    questSoap
}
