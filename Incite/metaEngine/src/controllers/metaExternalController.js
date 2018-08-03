'use strict';

const express = require('express'),
    axios = require('axios'),
    dotenv = require('dotenv').config();


/**
 * Require Helpers
 */

const metaHelper = require('../helpers/metaHelper'),
    helper = new metaHelper();


class metaExternal {

    async getAllMetaDBInfo(req, res, next) {
        try {
            let database = req.body.database,
                table = req.body.table;
            let executeQuery = await axios.get(`http://${process.env.DATALAYER_HOST}:${process.env.DATALAYER_PORT}/dal/getMetaDataDBInfo`, {
                database: database
            });

            if (executeQuery) {
                res.status(200).json({
                    resultSet: executeQuery,
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

    async getMetaTablesInfo(req, res, next) {
        try {
            let endpoint = 'dal/metaDataOperation',
                methodType = 'selectSQLMetaDataInfo',
                dbModel = req.body.dbModel,
                database = req.body.database;

            let metaDataRelatedTables = await helper.executeMetaRelatedTableCall(endpoint, methodType, dbModel, database);

            if (metaDataRelatedTables) {
                res.status(200).json({
                    metaDataRelatedTables,
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

    async getFormsMetaData(req, res, next) {
        try {
            let d_type = req.body.documenttype; //document type (S,L,P,R,E)
            let d_name = req.body.documentname;
            let searchedResult = await helper.searchMetaRAM(d_type, d_name);
            // console.log(data);
            if (searchedResult) {
                res.status(200).json({
                    searchedResult,
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

    async addNewDocument(req, res, next) {
        try {
            let createDocument = await helper.createNewDocument();

            if (createDocument) {
                res.status(200).json({
                    createDocument,
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

    async showExistingDocument(req, res, next) {

        let endpoint = 'dal/metaDataOperation',
            methodType = 'selectSQLMetaDataInfo',
            dbModel = req.body.dbModel,
            database = req.body.database,
            query = `SELECT * FROM __fl_MetaDataDetails WHERE _fl_doc_name ='${req.body.doc_name}' AND _fl_doc_type='${req.body.doc_type}'`;
        try {
            let showSelectedData = await helper.showExistingDocument(endpoint, query, methodType, dbModel, database);

            if (showSelectedData) {
                res.status(200).json({
                    showSelectedData,
                    details: {
                        "_fl_provider_id": "ATUL",
                        "_fl_created_by": "system1",
                        "_fl_created_date": "2018-06-21T09:30:55.675Z",
                        "_fl_modified_by": "system",
                        "_fl_modified_date": "2018-06-21T13:56:35.570Z",
                        "_fl_status": 0,
                        "_fl_curr_ver": "",
                        "_fl_prev_ver": "",
                        "_fl_meta_type": "1",
                        "_fl_doc_name": "",
                        "_fl_doc_type": "",
                        "_fl_elem_name": "",
                        "_fl_elem_type": "",
                        "_fl_elem_label": "",
                        "_fl_elem_view": null,
                        "_fl_elem_data": null,
                        "_fl_elem_len": null,
                        "_fl_data_size": null,
                        "_fl_show_order": "1",
                        "_fl_elem_ref": null,
                        "_fl_element_def": null,
                        "_fl_default_value": null,
                        "_fl_table_key": null,
                        "_fl_obj_type": null,
                        "_fl_obj_module": null,
                        "_fl_obj_oper": null,
                        "_fl_show_for": null,
                        "_fl_show_in": null,
                        "_fl_view_level": null,
                        "_fl_insert_level": null,
                        "_fl_update_level": null,
                        "_fl_show_grp": null,
                        "_fl_elem_ref_sql": null
                    },
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
    /* New changes */


    /** List Metadata Documents */
    async listMetaDataDocuments(req, res, next) {
        try {
            let endpoint = 'dal/metaDataOperation',
                methodType = 'selectSQLMetaDataInfo',
                dbModel = req.body.dbModel,
                database = req.body.database;

            let metaDataRelatedTables = await helper.listMetaDataMaster(endpoint, methodType, dbModel, database);
            if (metaDataRelatedTables) {
                console.log('Listing all documents from master table ')
                res.status(200).json({
                    metaDataRelatedTables,
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

    /** Insert into metadata master */
    async insertIntoMetadata(req, res, next) {
        try {
            let endpoint = 'dal/metaDataOperation',
                methodType = 'insertBulkSQLMetaDataInfo',
                dbModel = req.body.dbModel,
                database = req.body.database,
                query = req.body.metaJson;
            console.log("Insertion Initiated Meta Engine")
            let insertIntoMetadata = await helper.insertIntoMetadata(endpoint, query, methodType, dbModel, database);
            if (insertIntoMetadata) {
                console.log('Successfully Inserted !!! ')
                res.status(200).json({
                    insertIntoMetadata,
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

    /** update into metadata master */
    async updateMetadata(req, res, next) {
        try {
            let endpoint = 'dal/metaDataOperation',
                methodType = 'updateSQLMetaDataInfo',
                dbModel = req.body.dbModel,
                database = req.body.database,
                params = req.body.metaJson;
            console.log("Update Initiated Meta Engine")
            let updateIntoMetadata = await helper.updateMetadata(endpoint, params, methodType, dbModel, database);
            if (updateIntoMetadata) {
                console.log('Successfully updated !!! ')
                res.status(200).json({
                    updateIntoMetadata,
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

    /** Look UP */
    async doLookup(req, res, next) {
        try {
            let endpoint = 'dal/metaDataOperation',
                methodType = 'selectSQLMetaDataInfo',
                dbModel = req.body.dbModel,
                database = req.body.database,
                query = 'select distinct _fl_code_name from dbo.__fl_MetaDataCodes';
            let metaDataRelatedTables = await helper.lookupMetaDataCode(endpoint, query, methodType, dbModel, database);
            if (metaDataRelatedTables) {
                console.log('Listing all documents from master table ')
                res.status(200).json({
                    metaDataRelatedTables,
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


const metaexternal = new metaExternal();

module.exports = metaexternal;