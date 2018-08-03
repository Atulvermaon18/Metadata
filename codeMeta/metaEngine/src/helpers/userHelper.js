'use strict';

const express = require('express'),
    _ = require('lodash'),
    fs = require('fs'),
    dotenv = require('dotenv').config(),
    axios = require('axios');


class userHelper {

    async getBaseNameList(endpoint, query, methodType, dbModel, database) {
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

    async getDocuments(endpoint, query, methodType, dbModel, database) {
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

    async getUserRecord(endpoint, query, methodType, dbModel, database) {
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

    async searchUsesData(endpoint, query, methodType, dbModel, database) {
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

    async editUsesData(endpoint, query, methodType, dbModel, database) {
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

    async addUsesData(endpoint, query, methodType, dbModel, database) {
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

    async getUserSearchInformation(endpoint, query, methodType, dbModel, database) {
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
                res.status(400).json({
                    error: 'Could not execute user query',
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
}


module.exports = userHelper;