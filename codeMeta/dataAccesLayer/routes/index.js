const express = require('express');
const router = express.Router();


const sqlmetaDatamodels = require('../lib/sqlQueryExecution');
const nosqlDatamodels = require('../lib/nosqlQueryExecution');

const dataModels = {
    noSQLModel: nosqlDatamodels,
    sqlModel: sqlmetaDatamodels
};


router.post('/metaDataOperation', (req, res) => {
    // console.log(req.body)
    let methodType = req.body.methodType;
    let dbModel = req.body.dbModel;
    console.log(dataModels[dbModel])
    dataModels[dbModel][methodType](req, res)
});

router.post('/listDataBases', (req, res) => {
    console.log('Database list')
    sqlmetaDatamodels.selectSQLMetaDataInfo(req, res)
});



module.exports = router;