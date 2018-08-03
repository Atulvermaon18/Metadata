'use strict';

const Sequelize = require('sequelize'),
    sequelize = require('../connectionPool/dbConnection'),
    metadataCodes = sequelize['mssql'].define('__fl_MetaDataCodes', {
        /* Unique Key */
        "_fl_id": {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            defaultValue: true,
            autoIncrement: true
        },
        /* Provider ID (from ProviderMaster) */
        "_fl_provider_id": {
            type: Sequelize.STRING(30),
            allowNull: false,
            defaultValue: true
        },
        /* Created Date */
        "_fl_created_by": {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        /* Created Date */
        "_fl_created_date": {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        /* User ID of 'actor' who last modified the record */
        "_fl_modified_by": {
            type: Sequelize.STRING(30),
            defaultValue: true,
            allowNull: false
        },
        /* Last Modified Date */
        "_fl_modified_date": {
            type: Sequelize.DATE,
            allowNull: false
        },
        /* Status of record (0 - Active; 1 - InActive); When set to 1; ensure the MetaDataDetail records are also set to Inactive */
        "_fl_status": {
            type: Sequelize.INTEGER,
            defaultValue: true,
            allowNull: false
        },
        /* 0 - custom code | 1 - system code */
        "_fl_code": {
            type: Sequelize.INTEGER,
            defaultValue: true,
            allowNull: false
        },
        /* Code Entity */
        "_fl_code_name": {
            type: Sequelize.STRING(50),
            defaultValue: true,
            allowNull: false
        },
        /* Code Type ( forms primary key along with code_type) */
        "_fl_code_type": {
            type: Sequelize.STRING(50),
            defaultValue: true,
            allowNull: false
        },
        /* Value 1 */
        "_fl_code_value1": {
            type: Sequelize.STRING(50),
            defaultValue: true,
            allowNull: false
        },
        /* Value 2 */
        "_fl_code_value2": {
            type: Sequelize.STRING(50),
            defaultValue: true,
            allowNull: false
        },
        /* Value 3 */
        "_fl_code_value3": {
            type: Sequelize.STRING(50),
            defaultValue: true,
            allowNull: false
        },
        /* Value 4 */
        "_fl_code_value4": {
            type: Sequelize.STRING(50),
            defaultValue: true,
            allowNull: false
        },
        /* Desc 1 */
        "_fl_code_desc1": {
            type: Sequelize.STRING(50),
            defaultValue: true,
            allowNull: false
        },
        /* Desc 2 */
        "_fl_code_desc2": {
            type: Sequelize.STRING(50),
            defaultValue: true,
            allowNull: false
        },
        /* Desc 3 */
        "_fl_code_desc3": {
            type: Sequelize.STRING(50),
            defaultValue: true,
            allowNull: false
        },
        /* Desc 4 */
        "_fl_code_desc4": {
            type: Sequelize.STRING(50),
            defaultValue: true,
            allowNull: false
        }
    });

module.exports = metadataCodes;