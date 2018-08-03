'use strict';

const express = require('express'),
    axios = require('axios'),
    dotenv = require('dotenv').config();


/**
 * Load User Helper
 */

const helper = require('../helpers/userHelper'),
    userHelper = new helper();

class User {

    async getBaseNameList(req, res, next) {
        try {
            let endpoint = 'dal/metaDataOperation',
                methodType = 'selectSQLMetaDataInfo',
                dbModel = req.body.dbModel,
                database = req.body.database,
                query = 'select distinct _fl_base_name from __fl_MetaDataMasters';

            let baseName = await userHelper.getBaseNameList(endpoint, query, methodType, dbModel, database);
            if (baseName) {
                res.status(200).json({
                    baseName,
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

    async getDocuments(req, res, next) {
        try {
            let endpoint = 'dal/metaDataOperation',
                methodType = 'selectSQLMetaDataInfo',
                dbModel = req.body.dbModel,
                database = req.body.database,
                basename = req.body.basename,
                query = [`SELECT * FROM __fl_MetaDataMasters where _fl_base_name ='${basename}'`, `SELECT * FROM __fl_MetaDataDetails where _fl_doc_name LIKE '${basename}%'`];
            let documents = await userHelper.getDocuments(endpoint, query, methodType, dbModel, database);
            if (documents) {
                res.status(200).json({
                    documents,
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

    async getUserRecord(req, res, next) {
        try {
            let endpoint = 'dal/metaDataOperation',
                methodType = 'selectSQLMetaDataInfo',
                dbModel = req.body.dbModel,
                database = req.body.database,
                tablename = req.body.tablename,
                query = `SELECT * FROM ${tablename}`;
            let documents = await userHelper.getUserRecord(endpoint, query, methodType, dbModel, database);
            if (documents) {
                res.status(200).json({
                    documents,
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

    async searchUsesData(req, res, next) {
        try {

            let endpoint = 'dal/metaDataOperation',
                methodType = 'selectSQLMetaDataInfo',
                dbModel = req.body.dbModel,
                database = req.body.database,
                tablename = req.body.tablename,
                params = req.body.params,
                tempq = `select * from ${tablename} where`
            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                    tempq = tempq + " " + key + " LIKE '%" + params[key] + "%' AND"
                    console.log(params[key])
                }
            }
            let query = tempq.substring(0, tempq.length - 3);
            console.log(query);
            let items = await userHelper.searchUsesData(endpoint, query, methodType, dbModel, database);
            if (items) {
                res.status(200).json({
                    items,
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

    async userSearch(req, res, next) {
        try {
            let endpoint = 'dal/metaDataOperation',
                methodType = 'selectSQLMetaDataInfo',
                dbModel = req.body.dbModel,
                database = req.body.database;

            let getUserListInformation = await userHelper.getUserSearchInformation(endpoint, methodType, dbModel, database);

            if (getUserListInformation) {
                res.status(200).json({
                    getUserListInformation,
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

    async editUsesData(req, res, next) {
        try {

            let endpoint = 'dal/metaDataOperation',
                methodType = 'selectSQLMetaDataInfo',
                dbModel = req.body.dbModel,
                database = req.body.database,
                tablename = req.body.tablename,
                params = req.body.params,
                condition = req.body.condition,
                tempq = `UPDATE ${tablename} SET`;
            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                    tempq = tempq + " " + key + " = '" + params[key] + "', "
                }
            }
            let query = tempq.substring(0, tempq.length - 2) + ' WHERE ';
            // console.log(query)
            for (var key in condition) {
                if (condition.hasOwnProperty(key)) {
                    query = query + " " + key + "= '" + condition[key] + "' AND "
                }
            }
            query = query.substring(0, query.length - 4)
            console.log(query);
            let items = await userHelper.editUsesData(endpoint, query, methodType, dbModel, database);
            if (items) {
                res.status(200).json({
                    items,
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

    async addUsesData(req, res, next) {
        try {

            let endpoint = 'dal/metaDataOperation',
                methodType = 'selectSQLMetaDataInfo',
                dbModel = req.body.dbModel,
                database = req.body.database,
                tablename = req.body.tablename,
                params = req.body.params,
                tempq = `INSERT INTO  ${tablename} (`;
            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                    tempq = tempq + key + ', '
                }
            }
            let query = tempq.substring(0, tempq.length - 2) + ') VALUES (';
            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                    query = query + "'" + params[key] + "', "
                }
            }
            query = query.substring(0, query.length - 2) + ')';
            console.log(query);
            let items = await userHelper.editUsesData(endpoint, query, methodType, dbModel, database);
            if (items) {
                res.status(200).json({
                    items,
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

}


const userexternal = new User();

module.exports = userexternal;