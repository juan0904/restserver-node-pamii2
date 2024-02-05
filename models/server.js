const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const { bdmysql } = require('../db/connection');


class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;

        this.paths = {
            uploads: '/api/uploads',
        }

        this.usuariosPath = '/api/usuarios';
        this.plantillaPath = '/api/plantilla';
        this.authPath = '/api/auth';
        this.brandProvidersPath = '/api/brand_providers';
        this.productsPath = '/api/bp';
        this.parametrosPath = '/api/par';
        this.heroesPath = '/api/heroes';


        // Middlewares
        this.middlewares();

        this.dbConnection();

        // Rutas de mi aplicación
        this.routes();
    }



    async dbConnection(){
        try {
            await bdmysql.authenticate();
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );
        
        // Note that this option available for versions 1.0.0 and newer. 
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/'
        }));

    }

    routes() {
        this.app.use( this.authPath, require('../routes/auth'));
        this.app.use( this.usuariosPath, require('../routes/usuarios'));
        this.app.use( this.plantillaPath, require('../routes/plantilla'));
        this.app.use( this.brandProvidersPath, require('../routes/brand_providers'));
        this.app.use( this.productsPath, require('../routes/products'));
        this.app.use( this.parametrosPath, require('../routes/parametros'));

        this.app.use( this.paths.uploads, require('../routes/uploads'));
        this.app.use( this.heroesPath, require('../routes/heroes'));

    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}
module.exports = Server;
