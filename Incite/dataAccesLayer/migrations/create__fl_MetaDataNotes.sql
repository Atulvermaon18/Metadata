CREATE TABLE __fl_MetaDataNotes
(_fl_id binary(16),
 _fl_provider_id nvarchar(30) not null default '__fl_',
 _fl_created_by nvarchar(30) not null default '__fl_',
 _fl_created_date datetime default CURRENT_TIMESTAMP,
 _fl_modified_by nvarchar(30) not null default '__fl_',
 _fl_modified_date datetime default CURRENT_TIMESTAMP,
 _fl_status smallint default 0, 
 _fl_flow_status smallint default 0,
 _fl_notes_for nvarchar(30),
 _fl_notes_key1 nvarchar(30),
 _fl_notes_value1 nvarchar(200),
 _fl_notes_key2 nvarchar(30),
 _fl_notes_value2 nvarchar(200),
 _fl_notes_start_date datetime,
 _fl_notes_end_date datetime, 
 _fl_notes_name nvarchar(30),
 _fl_notes_desc nvarchar(400),
 _fl_notes_data ntext,
_fl_notes_attach1 nvarchar(30),
_fl_notes_attach2 nvarchar(30)
 )
 ;