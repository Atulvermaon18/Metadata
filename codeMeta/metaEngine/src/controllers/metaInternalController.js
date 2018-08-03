'use strict';

const express = require('express'),
    dotenv = require('dotenv').config();


/**
 * Require Helpers
 */

const metaHelper = require('../helpers/metaHelper'),
    helper = new metaHelper();



class metaInternal {

    /* Get Metdata table records */
    async getMetaDataInfo(req, res, next) {
        try {
            let endpoint = 'dal/metaDataOperation',
                query = 'SELECT * FROM __fl_MetaData',
                methodType = 'selectSQLMetaDataInfo',
                dbModel = req.body.dbModel,
                database = req.body.database;

            let metaDataResult = await helper.executeRestCalls(endpoint, query, methodType, dbModel, database);
            if (metaDataResult) {
                res.status(200).json({
                    metaDataResult,
                    status: 200
                });
            }
        } catch (err) {
            console.log(err);
            res.status(500).json({
                error: err,
                status: 500
            });
        }
    }


    async listDatabases(req, res, next) {
        try {
            let endpoint = 'dal/listDataBases',
                query = 'SHOW DATABASES',
                methodType = 'selectSQLMetaDataInfo',
                dbModel = 'sqlModel',
                database = req.body.database;
            console.log("Getting list of db-MetaEninge")
            let metaDataResult = await helper.executeRestCalls(endpoint, query, methodType, dbModel, database);
            if (metaDataResult) {
                res.status(200).json({
                    metaDataResult,
                    status: 200
                });
            }
        } catch (err) {
            console.log(err);
            res.status(500).json({
                error: err,
                status: 500
            });
        }
    }

    /**List all tables in a database */
    async listTablesInDatabase(req, res, next) {
        try {
            let endpoint = 'dal/metaDataOperation',
                dbModel = req.body.dbModel,
                database = req.body.database,
                dbname = req.body.dbname,
                query = [`SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES  WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_CATALOG='${dbname}'`,
                    `SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES  WHERE TABLE_TYPE = 'VIEW' AND TABLE_CATALOG='${dbname}'`
                ],
                methodType = 'sqlDBInfo';
            console.log("Listing Table")
            let metaDataResult = await helper.executeRestCalls(endpoint, query, methodType, dbModel, database);
            if (metaDataResult) {
                res.status(200).json({
                    metaDataResult,
                    status: 200
                });
            }
        } catch (err) {
            console.log(err);
            res.status(500).json({
                error: err,
                status: 500
            });
        }
    }

    /** List all columns in a database */
    async listAllColumnsInATable(req, res, next) {
        try {
            let endpoint = 'dal/metaDataOperation',
                tablename = req.body.tablename,
                methodType = 'sqlTableInfo',
                dbModel = req.body.dbModel,
                database = req.body.database;

            let query = await helper.executeCRUDCalls(database, tablename);


            let metaDataResult = await helper.executeRestCalls(endpoint, query, methodType, dbModel, database);

            if (metaDataResult) {
                res.status(200).json({
                    metaDataResult,
                    status: 200
                });
            }
        } catch (err) {
            console.log(err);
            res.status(500).json({
                error: err,
                status: 500
            });
        }
    }

    /** Insert into Metadata Table */
    async insertIntoMetaDataTable(req, res, next) {
        try {
            let endpoint = 'dal/metaDataOperation',
                query = `INSERT INTO ${req.body.tablename}`,
                methodType = 'listSQLDBInfo',
                dbModel = req.body.dbModel,
                database = req.body.database;

        } catch (err) {
            console.log(err);
            res.status(500).json({
                error: err,
                status: 500
            });
        }
    }


    async checkingInternalConnection(req, res, next) {
        try {
            res.status(200).json({
                message: 'Internal Communication is working',
                status: 200
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                error: err,
                status: 500
            });
        }
    }
}


const metainternal = new metaInternal();

module.exports = metainternal;