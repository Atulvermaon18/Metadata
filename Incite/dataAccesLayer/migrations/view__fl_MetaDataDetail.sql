CREATE VIEW __fl_MetaDataDetail
as
select 
 _fl_provider_id, --Provider ID (from ProviderMaster)
 _fl_created_by, --User ID of 'actor' who created the record
 _fl_created_date, --Created Date
 _fl_modified_by, --User ID of 'actor' who last modified the record
 _fl_modified_date, --Last Modified Date
 _fl_status, --Status of record (0 - Active; 1 - InActive)
 _fl_curr_ver, --Current Version of Document
 _fl_prev_ver, --Previous Version of Document
 _fl_meta_type, --1 - Detail
 _fl_doc_name, --Name of the Document
 _fl_doc_type, --Search, List, Edit, Portfolio, Report
 _fl_attrib001 as _fl_elem_name,--Name of Element - should match field name from table, view or SQL; other types Navigation, Hdr (Header), Ftr (Footer); When Portfilio, name of the form 
 _fl_attrib002 as _fl_elem_type,--Type of element - SELECT, TEXT, TEXTAREA, LABEL, LINEBREAK
 _fl_attrib003 as _fl_elem_label, --Label for element
 _fl_attrib004 as _fl_elem_view, --visibility / operation of element - A(uto) | P(rotected) | R(equired) | O(ptional) | C(reatedBy)U(ser) | C(reated)D(ate) | M(odifiedBy)U(ser) | M(odified)D(ate)
 _fl_attrib005 as _fl_elem_data, --type of element data TEXT, SMALLINT, DATE, HIDDEN, DATETIME, PASSWORD, WEBEDITOR (html editor), JSON (JSON Editor)
 _fl_attrib006 as _fl_elem_len, --type of element data TEXT, SMALLINT, DATE, HIDDEN, DATETIME, PASSWORD, WEBEDITOR (html editor), JSON (JSON Editor)
 _fl_attrib007 as _fl_data_size,--Max length of data on the screen
 _fl_attrib008 as _fl_show_order,--Display order of elements on screen (only for Elements of type Body) - location of element on screen
 _fl_attrib009 as _fl_elem_ref,   --lookup reference
 _fl_attrib010 as _fl_element_def,-- default value if null or blank; inject static value or request param; use template engine; use JSON data, javascript, etc
 _fl_attrib011 as _fl_default_value,--Default value that overrides the data from the DB or request param; use template engine; use JSON data, javascript, etc; if set for SELECT, select appropriate value
 _fl_attrib012 as _fl_table_key,--If _fl_elem_view is A, use this field to specify the number of the auto gen key
 _fl_attrib017 as _fl_obj_type, --type of object - 0 - Header | 1 - Footer | 2 - Nav | 3 - Body
 _fl_attrib018 as _fl_obj_module, 
 _fl_attrib019 as _fl_obj_oper,   --custom js function or url
 _fl_attrib020 as _fl_show_for,   --which login level to show this element for
 _fl_attrib022 as _fl_show_in,    --show in which action type | 0 - All | 1 - SELECT | 2 - NEW | 3 - UPDATE
 _fl_attrib024 as _fl_view_level, --Mimimum View Level for the form
 _fl_attrib025 as _fl_insert_level, --Minimum Insert Level for the form
 _fl_attrib026 as _fl_update_level, --Minimum Update Level for the form
 _fl_attrib027 as _fl_show_grp,    --Group(s) to show the form to
 _fl_attrib036 as _fl_elem_ref_sql  --lookup reference sql (takes precedence over lookup_reference)
 from __fl_MetaData 
where _fl_meta_type = 1
;


select * from __fl_MetaDataDetail;