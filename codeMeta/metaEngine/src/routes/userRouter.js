'use strict';

const express = require('express'),
    uuid = require('node-uuid'),
    path = require('path'),
    userRouter = express.Router(),
    userController = require('../controllers/userController');


/**
 * User Communication
 */

userRouter.post('/listBaseName', (req, res, next) => {
    console.log("Listing base name")
    userController.getBaseNameList(req, res, next);
});

userRouter.post('/listDocuments', (req, res, next) => {
    userController.getDocuments(req, res, next);
});

userRouter.post('/listRecords', (req, res, next) => {
    userController.getUserRecord(req, res, next);
});

userRouter.post('/searchUsesData', (req, res, next) => {
    console.log('search Uses Data')
    userController.searchUsesData(req, res, next);
});

userRouter.post('/editUsesData', (req, res, next) => {
    console.log('edit Uses Data')
    userController.editUsesData(req, res, next);
});

userRouter.post('/addUsesData', (req, res, next) => {
    console.log('add Uses Data')
    userController.addUsesData(req, res, next);
});



module.exports = userRouter;