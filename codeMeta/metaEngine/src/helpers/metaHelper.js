'use strict';

const express = require('express'),
    _ = require('lodash'),
    fs = require('fs'),
    dotenv = require('dotenv').config(),
    axios = require('axios');


class metaHelper {

    /* Constructor Function to initiate doc_type, master, detail, menu, provider */
    constructor() {
        this.doc_type = ['S', 'L', 'P', 'E', 'R'];
        this.master = [];
        this.detail = [];
        this.menu = [];
        this.provider = [];
    }

    /* Common Function to execute REST Calls */
    async executeRestCalls(endpoint, query, methodType, dbModel, database) {
        try {
            let executeQuery = await axios.post(`http://${process.env.DATALAYER_HOST}:${process.env.DATALAYER_PORT}/${endpoint}/`, {
                methodType: methodType,
                dbModel: dbModel,
                query: query,
                database: database
            });

            if (executeQuery) {
                return executeQuery.data;
            } else {
                console.log('False');
            }
        } catch (err) {
            console.log(err);
            res.status(500).json({
                error: err,
                status: 500
            });
        }
    }

    /* Common Function to execute to execute CRUD Calls */
    async executeCRUDCalls(database, tablename) {
        try {
            if (database === 'mssql') {
                let query = `SELECT c.*, k.CONSTRAINT_NAME FROM INFORMATION_SCHEMA.COLUMNS c
                LEFT JOIN
                INFORMATION_SCHEMA.KEY_COLUMN_USAGE k  on k.TABLE_NAME =  c.TABLE_NAME 
                and k.COLUMN_NAME = c.COLUMN_NAME 
                and k.TABLE_CATALOG = c.TABLE_CATALOG
                WHERE c.TABLE_NAME = '${tablename}'`
                //let query = `SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = N'${tablename}'`
                return query;
            } else {
                return 'Hello';
            }
        } catch (err) {
            console.log(err);
            res.status(500).json({
                error: err,
                status: 500
            });
        }
    }

    /* Intial Call to get the Document Manager Data */
    async createLib(data) {
        try {
            console.log('------Creating Dictionary---------');

            //On Demand from front end (from query params)
            /* 0 - > MASTER
            1 - > DETAILS
            2 - > MENU
            ALL 3 ARE ALREADY FILTERD BY QUERY BUT STILL TO MAKE DOUBLE SURE ABOUT THE DATA
            */

            // this.master = data.master.filter(m => m._fl_meta_type === "0");
            // this.detail = data.detail.filter(m => m._fl_meta_type === "1");
            this.menu = data.menu.filter(m => m._fl_meta_type === "2");
            this.menu.sort(function (a, b) {
                return a._fl_menu_level - b._fl_menu_level;
            });
            // console.log(this.menu)
            let result = this.menu.map((item) => {
                return {
                    menu_level: item._fl_menu_level,
                    menu_sub_level: item._fl_menu_sub_level,
                    elem_label: item._fl_elem_label,
                    menu_desc: item._fl_menu_desc,
                    menu_ref_doc_name: item._fl_menu_ref_doc_name,
                    menu_link: item._fl_menu_link
                }
            });
            return result; // this is the initial call which will create library and send first batch of data as a menu  
        } catch (err) {
            console.log(err);
        }
    }


    async initializeRam() {
        try {

            let endpoint = 'dal/metaDataOperation',
                methodType = 'selectSQLMetaDataInfo',
                dbModel = 'sqlModel',
                database = 'mssql';
            this.executeMetaRelatedTableCall(endpoint, methodType, dbModel, database)
        } catch (err) {
            console.log(err);
            res.status(500).json({
                error: err,
                status: 500
            });
        }
    }

    /* List MetaMaster Documents */
    async listMetaDataMaster(endpoint, methodType, dbModel, database) {
        try {
            let query = "SELECT * FROM __fl_MetaDataMasters ORDER BY _fl_modified_date DESC";
            let executeQuery = await axios.post(`http://${process.env.DATALAYER_HOST}:${process.env.DATALAYER_PORT}/${endpoint}/`, {
                methodType: methodType,
                dbModel: dbModel,
                query: query,
                database: database
            });

            if (executeQuery) {
                return executeQuery.data;
            } else {
                res.status(400).json({
                    error: 'Could not execute Meta Query',
                    status: 400
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

    /* Insert Metadata Information */
    async insertMetaData(endpoint, methodType, dbModel, database) {
        try {

            let executeQuery = await axios.post(`http://${process.env.DATALAYER_HOST}:${process.env.DATALAYER_PORT}/${endpoint}/`, {
                methodType: methodType,
                dbModel: dbModel,
                query: query,
                database: database
            });

            if (executeQuery) {
                return this.createLib(executeQuery.data.metaResult);
            } else {
                res.status(400).json({
                    error: 'Could not execute Meta Query',
                    status: 400
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

    /* Execute MetaRelated Table Call */
    async executeMetaRelatedTableCall(endpoint, methodType, dbModel, database) {
        try {
            if (database === 'mssql') {
                let metaArray = [`SELECT * FROM __fl_MetaDataMaster`, `SELECT * FROM __fl_MetaDataDetail`, `SELECT * FROM __fl_MetaDataMenu`];

                let executeQuery = await axios.post(`http://${process.env.DATALAYER_HOST}:${process.env.DATALAYER_PORT}/${endpoint}/`, {
                    methodType: methodType,
                    dbModel: dbModel,
                    query: metaArray,
                    database: database
                });

                if (executeQuery) {
                    console.log("Calling this")
                    return this.createLib(executeQuery.data.metaResult);
                } else {
                    res.status(400).json({
                        error: 'Could not execute Meta Query',
                        status: 400
                    });
                }
            }
        } catch (err) {
            console.log(err);
            res.status(500).json({
                error: err,
                status: 500
            });
        }
    }

    /* Store Metadata Information in RAM */
    async searchMetaRAM(d_type, d_name) {
        try {
            if (!this.detail.length) {
                this.initializeRam();
            }
            console.log(d_type, d_name);
            // searching doc_name and doc_type
            this.doc_type[d_type] = this.detail.filter(x => (x._fl_doc_type === d_type) && (x._fl_doc_name === d_name))
            this.provider = this.master;

            // this.provider = this.master.filter(m => (m._fl_doc_type === d_type) && (m._fl_doc_name === d_name));
            // searching doc_name and doc_type

            // return await this.constructForm(this.doc_type[d_type], this.provider);
        } catch (err) {
            console.log(err);
        }
    }


    async createNewDocument() {

        try {

            let emptyForm = {
                detail: {
                    "_fl_provider_id": "ATUL",
                    "_fl_created_by": "system1",
                    "_fl_created_date": "2018-06-21T09:30:55.675Z",
                    "_fl_modified_by": "system",
                    "_fl_modified_date": "2018-06-21T13:56:35.570Z",
                    "_fl_status": 0,
                    "_fl_curr_ver": "00001",
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
                master: {
                    "_fl_provider_id": "",
                    "_fl_created_by": "Atul",
                    "_fl_created_date": "2018-06-27T18:54:24.263Z",
                    "_fl_modified_by": "Atul",
                    "_fl_modified_date": "2018-06-27T18:54:24.263Z",
                    "_fl_status": 0,
                    "_fl_curr_ver": "00005",
                    "_fl_prev_ver": "",
                    "_fl_meta_type": "0",
                    "_fl_doc_name": "",
                    "_fl_doc_type": "",
                    "_fl_base_name": "",
                    "_fl_base_table": "",
                    "_fl_app_tmpl": "",
                    "_fl_ux_tmpl": "",
                    "_fl_pre_select": "",
                    "_fl_post_select": "",
                    "_fl_pre_insert": "",
                    "_fl_post_insert": "",
                    "_fl_pre_update": "",
                    "_fl_post_update": "",
                    "_fl_view_level": "",
                    "_fl_insert_level": "",
                    "_fl_update_level": "",
                    "_fl_show_grp": "",
                    "_fl_order_by": "",
                    "_fl_order_direction": "",
                    "_fl_custom_sql": "",
                    "_fl_jscript": ""
                }
            }
            let createForm = {
                dbname: ['incite'],
                form: emptyForm
            }

            if (emptyForm) {
                return createForm;
            } else {
                res.status(400).json({
                    error: 'Could not execute Meta Query',
                    status: 400
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

    async showExistingDocument(endpoint, query, methodType, dbModel, database) {
        try {
            // console.log(endpoint, query, methodType, dbModel, database)
            let executeQuery = await axios.post(`http://${process.env.DATALAYER_HOST}:${process.env.DATALAYER_PORT}/${endpoint}/`, {
                methodType: methodType,
                dbModel: dbModel,
                query: query,
                database: database
            });

            if (executeQuery) {
                return executeQuery.data;
            } else {
                res.status(400).json({
                    error: 'Could not execute Meta Query',
                    status: 400
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

    async lookupMetaDataCode(endpoint, query, methodType, dbModel, database) {
        try {
            console.log("Doing lookup")
            let executeQuery = await axios.post(`http://${process.env.DATALAYER_HOST}:${process.env.DATALAYER_PORT}/${endpoint}/`, {
                methodType: methodType,
                dbModel: dbModel,
                query: query,
                database: database
            });

            if (executeQuery) {
                return executeQuery.data;
            } else {
                res.status(400).json({
                    error: 'Could not execute Meta Query',
                    status: 400
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

    /** Insert Data into */
    async insertIntoMetadata(endpoint, query, methodType, dbModel, database) {
        try {
            console.log("Sending out params to DataAccess Layer")
            let executeQuery = await axios.post(`http://${process.env.DATALAYER_HOST}:${process.env.DATALAYER_PORT}/${endpoint}/`, {
                methodType: methodType,
                dbModel: dbModel,
                params: query,
                database: database
            });

            if (executeQuery) {
                return executeQuery.data;
            } else {
                res.status(400).json({
                    error: 'Could not execute Meta Query',
                    status: 400
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

    /** update Data into */
    async updateMetadata(endpoint, params, methodType, dbModel, database) {
        try {
            console.log("Sending out params to DataAccess Layer")
            let executeQuery = await axios.post(`http://${process.env.DATALAYER_HOST}:${process.env.DATALAYER_PORT}/${endpoint}/`, {
                methodType: methodType,
                dbModel: dbModel,
                params: params,
                database: database
            });

            if (executeQuery) {
                return executeQuery.data;
            } else {
                res.status(400).json({
                    error: 'Could not execute Meta Query',
                    status: 400
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

    /*This initialization will occure when server goes down, 
    then any call will recollect the MASTER, DETAILS AND MENU into the ram*/

}




module.exports = metaHelper;