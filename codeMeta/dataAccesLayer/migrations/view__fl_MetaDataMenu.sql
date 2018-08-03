CREATE VIEW __fl_MetaDataMenu
as
select 
 _fl_id, --Unique Key 
 _fl_provider_id, -- Provider ID (from ProviderMaster)
 _fl_created_by, -- User ID of 'actor' who created the record
 _fl_created_date, -- Created Date
 _fl_modified_by, -- User ID of 'actor' who last modified the record
 _fl_modified_date, -- Last Modified Date
 _fl_status, -- Status of record (0 - Active; 1 - InActive)
 _fl_curr_ver, --Current Version of Document
 _fl_prev_ver, --Previous Version of Document
 _fl_meta_type, --2 - Menu
 _fl_doc_name,--Menu Name
 _fl_doc_type,
 _fl_attrib001 as _fl_menu_level, --Level of menu start from 0
 _fl_attrib002 as _fl_menu_sub_level, --Sub Level of menu start from 0; changes with change in _fl_menu_level
 _fl_attrib003 as _fl_elem_label,  --Label of menu
 _fl_attrib004 as _fl_menu_desc, --Description of Menu
 _fl_attrib005 as _fl_menu_ref_doc_name,  --Parent doc_name (if _fl_menu_level > 0)
 _fl_attrib006 as _fl_menu_link,   --Link / javascript operation for menu
 _fl_attrib020 as _fl_show_for,   --which login level to show this element for
 _fl_attrib022 as _fl_show_in,    --show in which action type | 0 - All | 1 - SELECT | 2 - NEW | 3 - UPDATE
 _fl_attrib024 as _fl_view_level,-- Mimimum View Level for the menu
 _fl_attrib025 as _fl_insert_level, --Minimum Insert Level for the menu
 _fl_attrib026 as _fl_update_level, -- Minimum Update Level for the menu
 _fl_attrib027 as _fl_show_grp -- Group(s) to show the menu to

from __fl_MetaData 
where _fl_meta_type = 2
;

select * from __fl_MetaDataMenu;