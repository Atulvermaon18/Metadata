'use strict';


const Sequelize = require('sequelize'),
    sequelize = require('../connectionPool/dbConnection'),
    metadataSequence = Sequelize.define('__fl_MetaDataSequence', {
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
        /* Table Name  */
        "_fl_seq_table": {
            type: Sequelize.STRING(50),
            defaultValue: true,
            allowNull: false
        },
        /* Field in Table that will have the sequence generated for */
        "_fl_seq_col": {
            type: Sequelize.STRING(50),
            defaultValue: true,
            allowNull: false
        },
        /* Prefix of Sequence */
        "_fl_seq_pfx": {
            type: Sequelize.STRING(50),
            defaultValue: true,
            allowNull: false
        },
        /* Suffix of Sequence */
        "_fl_seq_sfx": {
            type: Sequelize.STRING(50),
            defaultValue: true,
            allowNull: false
        },
        /* RegEx pattern used to generate Sequence code */
        "_fl_seq_pattern": {
            type: Sequelize.STRING(50),
            defaultValue: true,
            allowNull: false
        },
        /* Counter; resets everyday if pattern is date; monthly if yyyyMM; yearly if yyyy */
        "_fl_seq_counter": {
            type: Sequelize.STRING(50),
            defaultValue: true,
            allowNull: false
        }
    });

module.exports = metadataSequence;