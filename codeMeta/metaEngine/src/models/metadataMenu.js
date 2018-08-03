'use strict';

const Sequelize = require('sequelize'),
    sequelize = require('../connectionPool/dbConnection'),
    metadataMenu = Sequelize.define('__fl_MetaDataMenu', {
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
            type: Sequelize.DATE
        },
        /* Status of record (0 - Active; 1 - InActive); When set to 1; ensure the MetaDataDetail records are also set to Inactive */
        "_fl_status": {
            type: Sequelize.INTEGER,
            defaultValue: true,
            allowNull: false
        },
        /* Current Version of Document */
        "_fl_curr_ver": {
            type: Sequelize.INTEGER,
            defaultValue: true,
            allowNull: false
        },
        /* Previous Version of Document */
        "_fl_prev_ver": {
            type: Sequelize.INTEGER,
            defaultValue: true,
            allowNull: false
        },
        /* 1 - Detail */
        "_fl_meta_type": {
            type: Sequelize.SMALLINT,
            allowNull: false
        },
        /* Name of the Document */
        "_fl_doc_name": {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        /* Search, List, Edit, Portfolio, Report */
        "_fl_doc_type": {
            type: Sequelize.STRING(30),
            allowNull: false,
            defaultValue: true
        },
        /* Level of menu start from 0 */
        "_fl_menu_level": {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: true
        },
        /* Sub Level of menu start from 0; changes with change in _fl_menu_level */
        "_fl_menu_sub_level": {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: true
        },
        /* Label of menu */
        "_fl_menu_label": {
            type: Sequelize.STRING(50),
            allowNull: false,
            defaultValue: true
        },
        /* Description of Menu */
        "_fl_menu_desc": {
            type: Sequelize.STRING(50),
            allowNull: false,
            defaultValue: true
        },
        /* Parent doc_name (if _fl_menu_level > 0) */
        "_fl_menu_ref_doc_name": {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: true
        },
        /* Link / javascript operation for menu */
        "_fl_menu_link": {
            type: Sequelize.STRING(50),
            allowNull: false,
            defaultValue: true
        },
        /* which login level to show this element for */
        "_fl_show_for": {
            type: Sequelize.STRING(50),
            allowNull: false,
            defaultValue: true
        },
        /* show in which action type | 0 - All | 1 - SELECT | 2 - NEW | 3 - UPDATE */
        "_fl_show_in": {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: true
        },
        /* Mimimum View Level for the menu */
        "_fl_view_level": {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: true
        },
        /* Minimum Insert Level for the menu */
        "_fl_insert_level": {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: true
        },
        /* Minimum Update Level for the menu */
        "_fl_update_level": {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: true
        },
        /* Group(s) to show the menu to */
        "_fl_show_grp": {
            type: Sequelize.STRING(50),
            allowNull: false,
            defaultValue: true
        }
    });


module.exports = metadataMenu;