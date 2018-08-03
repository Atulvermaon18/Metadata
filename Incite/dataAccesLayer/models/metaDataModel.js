'use strict';

const Sequelize = require('sequelize'),
    sequelize = require('../connectionPool/dbConnection'),
    metaData = sequelize['mssql'].define('__fl_MetaData',
     {
        "_fl_id": {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        "_fl_provider_id": {
            type: Sequelize.STRING(30),
            allowNull: false,
            defaultValue: true
        },
        "_fl_created_by": {
            type: Sequelize.STRING(30),
            allowNull: false,
            defaultValue: true
        },
        createdAt: { 
            type: Sequelize.DATE, 
            field: '_fl_created_date'
        },
        "_fl_modified_by": {
            type: Sequelize.STRING(30),
            allowNull: false,
            defaultValue: true
        },
        updatedAt: { 
            type: Sequelize.DATE, 
            field: '_fl_modified_date'
        },
        "_fl_status": {
            type: Sequelize.SMALLINT,
            allowNull: false,
            defaultValue: true
        },
        "_fl_curr_ver": {
            type: Sequelize.STRING(30),
            allowNull: false,
            defaultValue: true
        },
        "_fl_prev_ver": {
            type: Sequelize.STRING(30),
            allowNull: false,
            defaultValue: true
        },
        "_fl_meta_type": {
            type: Sequelize.STRING(30),
            allowNull: false,
            defaultValue: true
        },
        "_fl_doc_name": {
            type: Sequelize.STRING(30),
            allowNull: false,
            defaultValue: true
        },
        "_fl_doc_type": {
            type: Sequelize.STRING(30),
            allowNull: false,
            defaultValue: true
        },
        "_fl_attrib001":{
            type: Sequelize.STRING(30)
        },
        "_fl_attrib002":{
            type: Sequelize.STRING(30)
        },
        "_fl_attrib003":{
            type: Sequelize.STRING(30)
        },
        "_fl_attrib004":{
            type: Sequelize.STRING(30)
        },
        "_fl_attrib005":{
            type: Sequelize.STRING(30)
        },
        "_fl_attrib006":{
            type: Sequelize.STRING(30)
        },
        "_fl_attrib007":{
            type: Sequelize.STRING(30)
        },
         "_fl_attrib008":{
            type: Sequelize.STRING(30)
        },
        "_fl_attrib009":{
            type: Sequelize.STRING(30)
        },
        "_fl_attrib010":{
            type: Sequelize.STRING(30)
        },
        "_fl_attrib011":{
            type: Sequelize.STRING(30)
        },
        "_fl_attrib012":{
            type: Sequelize.STRING(30)
        },
        "_fl_attrib013":{
            type: Sequelize.STRING(30)
        },
        "_fl_attrib014":{
            type: Sequelize.STRING(30)
        },
        "_fl_attrib015":{
            type: Sequelize.STRING(30)
        },
         "_fl_attrib016":{
            type: Sequelize.STRING(30)
        },
        "_fl_attrib017":{
            type: Sequelize.STRING(30)
        },
        "_fl_attrib018":{
            type: Sequelize.STRING(30)
        },
        "_fl_attrib019":{
            type: Sequelize.STRING(30)
        },
        "_fl_attrib020":{
            type: Sequelize.STRING(30)
        },
        "_fl_attrib021":{
            type: Sequelize.STRING(30)
        },
        "_fl_attrib022":{
            type: Sequelize.STRING(30)
        },
        "_fl_attrib023":{
            type: Sequelize.STRING(30)
        },
         "_fl_attrib024":{
            type: Sequelize.STRING(30)
        },
        "_fl_attrib025":{
            type: Sequelize.STRING(30)
        },
        "_fl_attrib026":{
            type: Sequelize.STRING(30)
        },
        "_fl_attrib027":{
            type: Sequelize.STRING(30)
        },
        "_fl_attrib028":{
            type: Sequelize.STRING(30)
        },
        "_fl_attrib029":{
            type: Sequelize.STRING(30)
        },
        "_fl_attrib030":{
            type: Sequelize.STRING(30)
        },
         "_fl_attrib031":{
            type: Sequelize.STRING(30)
        },
        "_fl_attrib032":{
            type: Sequelize.STRING(30)
        },
        "_fl_attrib033":{
            type: Sequelize.STRING(30)
        },
        "_fl_attrib034":{
            type: Sequelize.STRING(30)
        },
        "_fl_attrib035":{
            type: Sequelize.STRING(30)
        },
        "_fl_attrib036":{
            type: Sequelize.STRING(30)
        },
        "_fl_attrib037":{
            type: Sequelize.STRING(30)
        },
        "_fl_attrib038":{
            type: Sequelize.STRING(30)
        },
         "_fl_attrib039":{
            type: Sequelize.STRING(30)
        },
        "_fl_attrib040":{
            type: Sequelize.STRING(30)
        }


    });


module.exports = metaData;