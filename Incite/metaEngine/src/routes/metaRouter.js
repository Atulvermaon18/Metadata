'use strict';

const express = require('express'),
    uuid = require('node-uuid'),
    path = require('path'),
    metaRouter = express.Router(),
    metaInternalController = require('../controllers/metaInternalController'),
    metaExternalController = require('../controllers/metaExternalController');


metaRouter.post('/getMetaDataInfo', (req, res, next) => {
    metaInternalController.getMetaDataInfo(req, res, next)
});

metaRouter.post('/listTablesInDatabase', (req, res, next) => {
    metaInternalController.listTablesInDatabase(req, res, next);
});

metaRouter.post('/listAllColumnsInATable', (req, res, next) => {
    metaInternalController.listAllColumnsInATable(req, res, next);
});

metaRouter.post('/documentmanager', (req, res, next) => {
    metaExternalController.getFormsMetaData(req, res, next);
});

metaRouter.post('/addNewDocument', (req, res, next) => {
    metaExternalController.addNewDocument(req, res, next);
});

metaRouter.post('/showExistingDocument', (req, res, next) => {
    console.log('showExistingDocument')
    metaExternalController.showExistingDocument(req, res, next);
});

metaRouter.post('/listDocuments', (req, res, next) => {
    metaExternalController.listMetaDataDocuments(req, res, next);
});

metaRouter.post('/updateExistingDocument', (req, res, next) => {
    console.log("Update Initiated")
    metaExternalController.updateMetadata(req, res, next);
});

metaRouter.post('/addNewMetaDataDocument', (req, res, next) => {
    console.log("Insertion Initiated")
    metaExternalController.insertIntoMetadata(req, res, next);
});
metaRouter.post('/lookup', (req, res, next) => {
    console.log("Lookup Initiated")
    metaExternalController.doLookup(req, res, next);
});




module.exports = metaRouter;