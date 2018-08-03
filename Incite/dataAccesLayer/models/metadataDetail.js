'use strict';

const Sequelize = require('sequelize'),
    sequelize = require('../connectionPool/dbConnection'),
    metadataDetail = sequelize['mssql'].define('__fl_MetaDataDetail', {
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
            type: Sequelize.STRING(30),
            defaultValue: true
        },
        "_fl_curr_ver": {
            type: Sequelize.STRING(30),
            defaultValue: true
        },
        "_fl_prev_ver": {
            type: Sequelize.STRING(30),
            defaultValue: true
        },
        "_fl_meta_type": {
            type: Sequelize.STRING(30),
            defaultValue: true
        },
        "_fl_doc_name": {
            type: Sequelize.STRING(30),
            defaultValue: true
        },
        "_fl_doc_type": {
            type: Sequelize.STRING(30),
            defaultValue: true
        },
        "_fl_elem_name": {
            type: Sequelize.STRING(30),
            defaultValue: true
        },
        "_fl_elem_type": {
            type: Sequelize.STRING(30),
            defaultValue: true
        },
        "_fl_elem_label": {
            type: Sequelize.STRING(30),
            defaultValue: true
        },
        "_fl_elem_view": {
            type: Sequelize.STRING(30),
            defaultValue: true
        },
        "_fl_elem_data": {
            type: Sequelize.STRING(30),
            defaultValue: true
        },
        "_fl_elem_len": {
            type: Sequelize.STRING(30),
            defaultValue: true
        },
        "_fl_data_size": {
            type: Sequelize.STRING(30),
            defaultValue: true
        },
        "_fl_show_order": {
            type: Sequelize.STRING(30),
            defaultValue: true
        },
        "_fl_elem_ref": {
            type: Sequelize.STRING(30),
            defaultValue: true
        },
        "_fl_element_def": {
            type: Sequelize.STRING(30),
            defaultValue: true
        },
        "_fl_default_value": {
            type: Sequelize.STRING(30),
            defaultValue: true
        },
        "_fl_table_key": {
            type: Sequelize.STRING(30),
            defaultValue: true
        },
        "_fl_obj_type": {
            type: Sequelize.STRING(30),
            defaultValue: true
        },
        "_fl_obj_module": {
            type: Sequelize.STRING(30),
            defaultValue: true
        },
        "_fl_obj_oper": {
            type: Sequelize.STRING(30),
            defaultValue: true
        },
        "_fl_show_for": {
            type: Sequelize.STRING(30),
            defaultValue: true
        },
        "_fl_show_in": {
            type: Sequelize.STRING(30),
            defaultValue: true
        },
        "_fl_view_level": {
            type: Sequelize.STRING(30),
            defaultValue: true
        },
        "_fl_insert_level": {
            type: Sequelize.STRING(30),
            defaultValue: true
        },
        "_fl_update_level": {
            type: Sequelize.STRING(30),
            defaultValue: true
        },
        "_fl_show_grp": {
            type: Sequelize.STRING(30),
            defaultValue: true
        },
        "_fl_elem_ref_sql": {
            type: Sequelize.STRING(30),
            defaultValue: true
        }
    });


module.exports = metadataDetail;