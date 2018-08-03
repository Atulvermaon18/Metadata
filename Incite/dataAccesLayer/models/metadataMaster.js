'use strict';

const Sequelize = require('sequelize'),
    sequelize = require('../connectionPool/dbConnection'),
    metadataMaster = sequelize['mssql'].define('__fl_MetaDataMaster', {
        /* Unique Key  */

        // "_fl_id": {
        //     type: Sequelize.INTEGER,
        //     autoIncrement: true,
        //     primaryKey: true
        // },
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
            type: Sequelize.STRING(30),
            allowNull: false
        },
        "_fl_base_table": { //Table or View name used to generate the document
            type: Sequelize.STRING(30),
            allowNull: false
        },
        "_fl_app_tmpl": { //Application template
            type: Sequelize.STRING(30)
        },
        "_fl_ux_tmpl": { //UX Template
            type: Sequelize.STRING(30)
        },
        "_fl_jscript": { //Custom Javascript to be used with the page 
            type: Sequelize.STRING(30)
        },
        "_fl_pre_select": { //Pre Select nodejs program
            type: Sequelize.STRING(30)
        },
        "_fl_post_select": { //Post Select nodejs program
            type: Sequelize.STRING(30)
        },
        "_fl_pre_insert": { //Pre Insert nodejs program
            type: Sequelize.STRING(30)
        },
        "_fl_post_insert": { //Post Insert nodejs program
            type: Sequelize.STRING(30)
        },
        "_fl_pre_update": { //Pre Update nodejs program
            type: Sequelize.STRING(30)
        },
        "_fl_post_update": { //Post Update nodejs program
            type: Sequelize.STRING(30)
        },
        "_fl_view_level": { //Mimimum View Level for the form
            type: Sequelize.STRING(30)
        },
        "_fl_insert_level": { //Minimum Insert Level for the form
            type: Sequelize.STRING(30)
        },
        "_fl_update_level": { //Minimum Update Level for the form
            type: Sequelize.STRING(30)
        },
        "_fl_show_grp": { //Group(s) to show the form to
            type: Sequelize.STRING(30)
        },
        "_fl_order_by": { //Default order by fields for the base table / custom sql - used only in list / portfolio / reports
            type: Sequelize.STRING(30)
        },
        "_fl_order_direction": { //Order by direction
            type: Sequelize.STRING(30)
        },
        "_fl_custom_sql": { //Custom SQL Query used to pull data for the rendering; overrides base_table
            type: Sequelize.STRING(30)
        }
    });


module.exports = metadataMaster;