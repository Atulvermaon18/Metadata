'use strict';

const express = require('express'),
    _ = require('lodash'),
    fs = require('fs'),
    sequelize = require('../connectionPool/dbConnection'),
    createMetaData = require('../models/metaDataModel'),
    master = require('../models/metadataMaster'),
    details = require('../models/metadataDetail'),
    menu = require('../models/metadataMenu'),
    config = require('../config/config.json'),
    document = require('../config/document.json'),
    form = require('../config/form.json'),
    mode = process.env.NODE_ENV;

class metaData {


    // Will take care of all select query in SQL
    async selectSQLMetaDataInfo(req, res, next) {

        let query = req.body.query;
        let db = req.body.database;
        try {
            let metaDataResult = {}
            if (Array.isArray(query)) {

                metaDataResult = await Promise.all(query.map(async (q, index) => {
                    const contents = await sequelize[db].query(q, {
                        type: sequelize[db].QueryTypes.SELECT
                    })

                    return contents;
                }))
                if (metaDataResult === null) {
                    res.status(400).json({
                        error: 'Could not find Metadata Information',
                        status: 400
                    });
                } else {
                    let details = await this.checkingLookups(metaDataResult[1], db);
                    var data = {};
                    metaDataResult[0].map(obj => {
                        console.log(obj._fl_doc_type);
                        if (obj._fl_doc_type === 'S') {
                            data.search = obj;
                        }
                        if (obj._fl_doc_type === 'L') {
                            data.list = obj;
                        }
                        if (obj._fl_doc_type === 'E') {
                            data.edit = obj;
                        }

                    })

                    res.status(200).json({
                        "master": data,
                        "details": details
                    });
                }

            } else {
                console.log('SINGLE QUERY ');
                metaDataResult = await sequelize[db].query(query, {
                    type: sequelize[db].QueryTypes.SELECT
                });
                if (metaDataResult === null) {
                    res.status(400).json({
                        error: 'Could not find Metadata Information',
                        status: 400
                    });
                } else {
                    res.status(200).json({
                        metaDataResult
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

    async checkingLookups(data, db) {
        try {
            console.log('------Checking for Lookups---------');
            let detailsData = await Promise.all(data.map(async (q, index) => {

                let query = `select _fl_code_type, _fl_code_desc1 from __fl_MetaDataCodes where _fl_code_name ='${q._fl_elem_ref}'`;
                const contents = await sequelize[db].query(query, {
                    type: sequelize[db].QueryTypes.SELECT
                })
                q.code = contents;
                console.log(q);
                return q;
            }))

            return detailsData; // this is the initial call which will create library and send first batch of data as a menu  
        } catch (err) {
            console.log(err);
        }
    }

    /* Insert Raw SQL Metadata Information */
    async insertRawSQLMetaDataInfo(req, res, next) {
        let db = req.body.database;
        let query = JSON.parse(req.body.params);
        try {
            let metaDataResult = await createMetaData.query(query, {
                type: sequelize.QueryTypes.INSERT
            }).then(function (clientInsertId) {
                console.log(clientInsertId);
            });

            if (metaDataResult === null) {
                res.status(400).json({
                    error: 'Could not find Metadata Information',
                    status: 400
                });
            } else {
                console.log("Total record " + metaDataResult.length);
                res.status(200).json({
                    metaResult: metaDataResult
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

    /* Bulk Insert SQL Metadata information */
    async insertBulkSQLMetaDataInfo(req, res, next) {

        // let viewType = Object.keys(req.body.params);
        // console.log(req.body.params['master']);

        console.log("Insertion Initiated DAL");
        let metaDataResult = {};
        try {
            if (req.body.params['master'].length) {
                console.log("Inserted into master")
                metaDataResult = await master.bulkCreate(req.body.params['master']);
            }
            if (req.body.params['details'].length) {
                console.log("Inserted into details")
                metaDataResult = await details.bulkCreate(req.body.params['details']);
            }
            if (req.body.params['menu'].length) {
                console.log("Inserted into menu")
                metaDataResult = await menu.bulkCreate(req.body.params['menu']);

            }

            if (metaDataResult === null) {
                res.status(400).json({
                    error: 'Could not find Metadata Information',
                    status: 400
                });
            } else {
                console.log("Total record " + metaDataResult.length);
                res.status(200).json({
                    metaResult: metaDataResult
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

    /* Insert SQL Metadata Information */
    async insertSQLMetaDataInfo(req, res, next) {
        let db = req.body.database;
        let params = JSON.parse(req.body.params);
        try {
            let metaDataResult = await createMetaData.sync().then(() => {
                // Table created
                return createMetaData.create(params);
            });

            if (metaDataResult === null) {
                res.status(400).json({
                    error: 'Could not find Metadata Information',
                    status: 400
                });
            } else {
                console.log("Total record " + metaDataResult.length);
                res.status(200).json({
                    metaResult: metaDataResult
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

    /* Update and Delete SQL Metadata Information */
    async updateSQLMetaDataInfo(req, res, next) {

        try {
            let metaDataResult = {};
            if (req.body.params['doc_name'].length) {
                console.log("YOU HAVE DELETED DOCUMENT " + req.body.params['doc_name'])
                await createMetaData.destroy({
                    where: {
                        _fl_doc_name: req.body.params['doc_name']
                    }
                })
            }

            if (req.body.params['master'].length) {
                console.log("Inserted into master")
                metaDataResult = await master.bulkCreate(req.body.params['master']);
            }
            if (req.body.params['details'].length) {
                console.log("Inserted into details")
                metaDataResult = await details.bulkCreate(req.body.params['details']);
            }
            if (req.body.params['menu'].length) {
                console.log("Inserted into menu")
                metaDataResult = await menu.bulkCreate(req.body.params['menu']);
            }

            if (metaDataResult === null) {
                res.status(400).json({
                    error: 'Could not find Metadata Information',
                    status: 400
                });
            } else {
                console.log("Total record " + metaDataResult.length);
                res.status(200).json({
                    metaResult: metaDataResult
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

    // shows the list of tables
    async sqlDBInfo(req, res, next) {
        let db = req.body.database;
        let query = req.body.query;
        console.log(db)
        try {
            let columns = await Promise.all(query.map(async (q, index) => {
                const contents = await sequelize[db].query(q, {
                    type: sequelize[db].QueryTypes.SELECT
                })

                return contents;
            }))
            if (columns === null) {
                res.status(400).json({
                    error: 'Could not find Metadata Information',
                    status: 400
                });
            } else {

                let table = columns[0].concat(columns[1])
                res.status(200).json({
                    table
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

    // shows the list of columns in the table
    async sqlTableInfo(req, res, next) {
        let db = req.body.database;
        let query = req.body.query;
        console.log(query)
        try {
            let metaDataResult = await sequelize[db].query(query, {
                type: sequelize[db].QueryTypes.SELECT
            });

            if (metaDataResult === null) {
                res.status(400).json({
                    error: 'Could not find Tables Information',
                    status: 400
                });
            } else {
                console.log("Total record " + metaDataResult.length);
                res.status(200).json({
                    columns: metaDataResult
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

const meta = new metaData();

module.exports = meta;