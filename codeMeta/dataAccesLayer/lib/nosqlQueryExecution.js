'use strict';

const express = require('express'),
    _ = require('lodash'),
    fs = require('fs'),
    sequelize = require('../connectionPool/dbConnection'),
    path = require('path'),
    mongoose = require('mongoose');

class metaData {


    async selectNOSQLMetaDataInfo(req, res, next) {

    }

    async insterNOSQLMetaDataInfo(req, res, next) {

    }
    async noSQLDBInfo(req, res, next) {

    }
    async noSQLTableInfo(req, res, next) {

    }

    async sqlDBInfo(req, res, next) {
        let db = req.body.database;
        let query = req.body.query;
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
                    tableList: metaDataResult
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