'use strict';

const Sequelize = require('sequelize'),
    sequelize = require('../connectionPool/dbConnection'),
    metadataDetail = Sequelize.define('__fl_MetaDataDetail', {
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
        /* Name of Element - should match field name from table, view or SQL; other types Navigation, Hdr (Header), Ftr (Footer); When Portfilio, name of the form */
        "_fl_elem_name": {
            type: Sequelize.STRING(50),
            defaultValue: true,
            allowNull: false
        },
        /* Type of element - SELECT, TEXT, TEXTAREA, LABEL, LINEBREAK */
        "_fl_elem_type": {
            type: Sequelize.STRING(50),
            defaultValue: true,
            allowNull: false
        },
        /* Label for element */
        "_fl_elem_label": {
            type: Sequelize.STRING(50),
            allowNull: false,
            defaultValue: true
        },
        /**
         * visibility / operation of element - A(uto) | P(rotected) | R(equired) | O(ptional) | 
         C(reatedBy)U(ser) | C(reated)D(ate) | M(odifiedBy)U(ser) | M(odified)D(ate)
         */
        "_fl_elem_view": {
            type: Sequelize.STRING(50),
            allowNull: false,
            defaultValue: true
        },
        /* type of element data TEXT, SMALLINT, DATE, HIDDEN, DATETIME, PASSWORD, WEBEDITOR (html editor), JSON (JSON Editor) */
        "_fl_elem_data": {
            type: Sequelize.STRING(50),
            allowNull: false,
            defaultValue: true
        },
        /* Length of element to be displayed on the screen; in a list, use this to size the column */
        "_fl_elem_len": {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: true
        },
        /* Max length of data on the screen */
        "_fl_data_size": {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: true
        },
        /* Display order of elements on screen (only for Elements of type Body) - location of element on screen */
        "_fl_show_order": {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: true
        },
        /* lookup reference */
        "_fl_elem_ref": {
            type: Sequelize.STRING(50),
            allowNull: false,
            defaultValue: true
        },
        /* default value if null or blank; inject static value or request param; use template engine; use JSON data, javascript, etc */
        "_fl_element_def": {
            type: Sequelize.STRING(50),
            allowNull: false,
            defaultValue: true
        },
        /* Default value that overrides the data from the DB or request param; use template engine; use JSON data, javascript, etc; if set for SELECT, select appropriate value */
        "_fl_default_value": {
            type: Sequelize.STRING(50),
            allowNull: false,
            defaultValue: true
        },
        /* If _fl_elem_view is A, use this field to specify the number of the auto gen key */
        "_fl_table_key": {
            type: Sequelize.STRING(50),
            allowNull: false,
            defaultValue: true
        },
        /* type of object - 0 - Header | 1 - Footer | 2 - Nav | 3 - Body */
        "_fl_obj_type": {
            type: Sequelize.STRING(50),
            allowNull: false,
            defaultValue: true
        },
        /* Object Module */
        "_fl_obj_module": {
            type: Sequelize.STRING(50),
            allowNull: false,
            defaultValue: true
        },
        /* custom js function or url */
        "_fl_obj_oper": {
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
        /* Mimimum View Level for the form */
        "_fl_view_level": {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: true
        },
        /* Minimum Insert Level for the form */
        "_fl_insert_level": {
            type: Sequelize.INTEGER,
            defaultValue: true,
            allowNull: false
        },
        /* Minimum Update Level for the form */
        "_fl_update_level": {
            type: Sequelize.INTEGER,
            defaultValue: true,
            allowNull: false
        },
        /* Group(s) to show the form to */
        "_fl_show_grp": {
            type: Sequelize.STRING(50),
            defaultValue: true,
            allowNull: false
        },
        /* lookup reference sql (takes precedence over lookup_reference) */
        "_fl_elem_ref_sql": {
            type: Sequelize.STRING(50),
            defaultValue: true,
            allowNull: false
        }
    });


module.exports = metadataDetail;