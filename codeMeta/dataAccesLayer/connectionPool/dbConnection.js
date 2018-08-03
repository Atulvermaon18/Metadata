'use strict';
/* This will configure all the databases and create an instance of 
 databases which will be exported */

const Sequelize = require('sequelize'),
    // mongoose = require('mongoose'),
    dotenv = require('dotenv').config(),
    config = require('../config/config.json'),
    db = {},
    mode = process.env.NODE_ENV, //mode = dev, qa, prod
    databases = Object.keys(config[mode].databases);
console.log("Running on " + mode + " mode !")

//Getting Instance of all database and storing it in db[dialect] and exporting
for (let i = 0; i < databases.length; ++i) {
    let database = databases[i];
    let dbPath = config[mode].databases[database];
    let dialect = config[mode].databases[database].dialect;
    if (dbPath.type === 'sql') {
        db[dialect] = new Sequelize(process.env.MSSQL_DATABASE,
            process.env.MSSQL_USERNAME,
            process.env.MSSQL_PASSWORD,
            dbPath)
    } else {
        /* db[dialect] = mongoose.createConnection(dbPath.url);
         db[dialect].on('error', console.error.bind(console, 'connection error:'));
         db[dialect].once('open', function () {
             console.log('Mongoose Connected !')
         });*/

    }
}
module.exports = db;