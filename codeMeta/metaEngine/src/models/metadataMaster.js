'use strict';

const Sequelize = require('sequelize'),
    sequelize = require('../connectionPool/dbConnection'),
    metadataMaster = sequelize['mssql'].define('__fl__MetaDataMaster', {
        /* Unique Key  */
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
        /* Created By */
        "_fl_created_by": {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        /* Created Date */
        "_fl_created_date": {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        "_fl_modified_by": { //User ID of 'actor' who last modified the record
            type: Sequelize.STRING(30),
            defaultValue: true,
            allowNull: false
        },
        "_fl_modified_date": { //Last Modified Date
            type: Sequelize.DATE
        },
        "_fl_status": { //Status of record (0 - Active; 1 - InActive); When set to 1; ensure the MetaDataDetail records are also set to Inactive
            type: Sequelize.INTEGER,
            defaultValue: true,
            allowNull: false
        },
        "_fl_curr_ver": { //Current Version of Document
            type: Sequelize.STRING(30)
        },
        "_fl_prev_ver": { //Previous Version of Document
            type: Sequelize.STRING(30)
        },
        "_fl_meta_type": { //0 - Master
            type: Sequelize.SMALLINT,
            allowNull: false
        },
        "_fl_doc_name": { //Name of the Document
            type: Sequelize.STRING(30),
            allowNull: false
        },
        "_fl_doc_type": { //Search, List, Edit, Portfolio, Report
            type: Sequelize.STRING(30),
            allowNull: false,
            defaultValue: true
        },
        "_fl_base_name": { //Prefix from the doc_name
            type: Sequelize.STRING(50),
            defaultValue: true,
            allowNull: false
        },
        "_fl_base_table": { //Table or View name used to generate the document
            type: Sequelize.STRING(50),
            defaultValue: true,
            allowNull: false
        },
        "_fl_app_tmpl": { //Application template
            type: Sequelize.STRING(50),
            defaultValue: true,
            allowNull: false
        },
        "_fl_ux_tmpl": { //UX Template
            type: Sequelize.STRING(50),
            defaultValue: true,
            allowNull: false
        },
        "_fl_jscript": { //Custom Javascript to be used with the page 
            type: Sequelize.STRING(50),
            defaultValue: true,
            allowNull: false
        },
        "_fl_pre_select": { //Pre Select nodejs program
            type: Sequelize.STRING(50),
            defaultValue: false,
            allowNull: false
        },
        "_fl_post_select": { //Post Select nodejs program
            type: Sequelize.STRING(30),
            defaultValue: true,
            allowNull: false
        },
        "_fl_pre_insert": { //Pre Insert nodejs program
            type: Sequelize.STRING(30),
            defaultValue: true,
            allowNull: false
        },
        "_fl_post_insert": { //Post Insert nodejs program
            type: Sequelize.STRING(30),
            defaultValue: true,
            allowNull: false
        },
        "_fl_pre_update": { //Pre Update nodejs program
            type: Sequelize.STRING(30),
            defaultValue: true,
            allowNull: false
        },
        "_fl_post_update": { //Post Update nodejs program
            type: Sequelize.STRING(30),
            defaultValue: true,
            allowNull: false
        },
        "_fl_view_level": { //Mimimum View Level for the form
            type: Sequelize.STRING(30),
            allowNull: false,
            defaultValue: true
        },
        "_fl_insert_level": { //Minimum Insert Level for the form
            type: Sequelize.STRING(30),
            defaultValue: true,
            allowNull: false
        },
        "_fl_update_level": { //Minimum Update Level for the form
            type: Sequelize.STRING(30),
            defaultValue: false,
            allowNull: true
        },
        "_fl_show_grp": { //Group(s) to show the form to
            type: Sequelize.STRING(30),
            defaultValue: false,
            allowNull: true
        },
        "_fl_order_by": { //Default order by fields for the base table / custom sql - used only in list / portfolio / reports
            type: Sequelize.STRING(30),
            defaultValue: false,
            allowNull: false
        },
        "_fl_order_direction": { //Order by direction
            type: Sequelize.STRING(30),
            defaultValue: true,
            allowNull: false
        },
        "_fl_custom_sql": { //Custom SQL Query used to pull data for the rendering; overrides base_table
            type: Sequelize.STRING(30),
            allowNull: false,
            defaultValue: true
        }
    });


module.exports = metadataMaster;