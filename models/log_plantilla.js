const { DataTypes } = require('sequelize');
const { bdmysql } = require('../db/connection');

/*
sku del producto	2	NULL	YES	varchar		
nombre del producto	3	NULL	YES	varchar		
caracteristicas	4	NULL	YES	text		
condiciones	5		NO	text		
id de la garantia	6		NO	int	10	0
aplica devolucion	7		NO	enum		
peso	8	NULL	YES	double	22	
volumen	9		NO	double	22	
largo	10	NULL	YES	double	22	
alto	11	NULL	YES	double	22	
ancho	12	NULL	YES	double	22	
id de la categoria	13		NO	int	10	0
sku de la referencia	14	NULL	YES	varchar		
referencia	15	NULL	YES	varchar		
price	16	NULL	YES	decimal	12	2
iva	17		NO	decimal	5	2
qty	18	NULL	YES	int	10	0
color	19	NULL	YES	varchar		
size	20	NULL	YES	varchar		
referencia_color	21	NULL	YES	varchar		
nro_fotos	22		NO	int	10	0
brandProviderId	23		NO	int	10	0
*/

const logPlantilla = bdmysql.define('log_plantilla_pamii',
    {
        'brandproviderid': {
            type: DataTypes.INTEGER,
            allowNull: false
            // allowNull defaults to true
        },
        'fecha_horainicio': {
            type: DataTypes.TIME,
            allowNull: false
            // allowNull defaults to true
        },
        'fecha_horafin': {
            type: DataTypes.TIME,
            allowNull: false
            // allowNull defaults to true
        },
        'status': {
            type: DataTypes.TEXT
            // allowNull defaults to true
        },
    }, 
    {
        //Maintain table name don't plurilize
        freezeTableName: true,

        // I don't want createdAt
        createdAt: false,

        // I don't want updatedAt
        updatedAt: false
    }
);


module.exports = {
    logPlantilla
}