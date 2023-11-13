const { Sequelize } = require('sequelize');

// Option de DESARROLLO
/*
const bdmysql = new Sequelize('pamii_db', 'pamii_user', 'toor$987', {
    host: '192.168.10.21',
    port: '3306',
    dialect: 'mariadb'
});
*/

const bdmysqlRDS = new Sequelize('pamii', 'admin', 'p4m112022qpo', {
    host: 'prepamii.cfksgy3hpjid.us-east-2.rds.amazonaws.com',
    dialect: 'mariadb'
});


// Option de PRODUCCION y Maquina Local
const bdmysql = new Sequelize('pamii_db', 'pamii_user', 'toor$987', {
    host: 'localhost',
    port: '3306',
    dialect: 'mariadb'
});


module.exports = {
    bdmysql,
    bdmysqlRDS
}