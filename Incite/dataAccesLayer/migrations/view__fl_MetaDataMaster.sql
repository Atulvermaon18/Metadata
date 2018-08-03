
CREATE VIEW __fl_MetaDataMaster
as
select 
 _fl_id, --Unique Key 
 _fl_provider_id, -- Provider ID (from ProviderMaster)
 _fl_created_by, -- User ID of 'actor' who created the record
 _fl_created_date, -- Created Date
 _fl_modified_by, -- User ID of 'actor' who last modified the record
 _fl_modified_date, -- Last Modified Date
 _fl_status, --Status of record (0 - Active; 1 - InActive); When set to 1; ensure the MetaDataDetail records are also set to Inactive
 _fl_curr_ver, -- Current Version of Document
 _fl_prev_ver, -- Previous Version of Document
 _fl_meta_type, --0 - Master
 _fl_doc_name, --Name of the Document
 _fl_doc_type, --Search, List, Edit, Portfolio, Report
 _fl_attrib001 as _fl_base_name, -- Prefix from the doc_name
 _fl_attrib002 as _fl_base_table, -- Table or View name used to generate the document
 _fl_attrib003 as _fl_app_tmpl,-- Application template
 _fl_attrib004 as _fl_ux_tmpl, --UX Template
 _fl_attrib018 as _fl_pre_select, -- Pre Select nodejs program
 _fl_attrib019 as _fl_post_select, -- Post Select nodejs program
 _fl_attrib020 as _fl_pre_insert, --Pre Insert nodejs program
 _fl_attrib021 as _fl_post_insert, --Post Insert nodejs program
 _fl_attrib022 as _fl_pre_update, --Pre Update nodejs program
 _fl_attrib023 as _fl_post_update, --Post Update nodejs program
 _fl_attrib024 as _fl_view_level, --Mimimum View Level for the form
 _fl_attrib025 as _fl_insert_level, --Minimum Insert Level for the form
 _fl_attrib026 as _fl_update_level, -- Minimum Update Level for the form
 _fl_attrib027 as _fl_show_grp, -- Group(s) to show the form to
 _fl_attrib032 as _fl_order_by, --Default order by fields for the base table / custom sql - used only in list / portfolio / reports
 _fl_attrib033 as _fl_order_direction, --Order by direction
 _fl_attrib036 as _fl_custom_sql,--Custom SQL Query used to pull data for the rendering; overrides base_table
  _fl_attrib005 as _fl_jscript --Custom Javascript to be used with the page 

from __fl_MetaData 
where _fl_meta_type = 0
;

select * from __fl_MetaDataMaster;