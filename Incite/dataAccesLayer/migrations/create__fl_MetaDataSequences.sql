CREATE TABLE __fl_MetaDataSequences
(_fl_id binary(16),
 _fl_provider_id nvarchar(30) not null default '__fl_',
 _fl_created_by nvarchar(30) not null default '__fl_',
 _fl_created_date datetime default CURRENT_TIMESTAMP,
 _fl_modified_by nvarchar(30) not null default '__fl_',
 _fl_modified_date datetime default CURRENT_TIMESTAMP,
 _fl_status smallint default 0, 
 _fl_seq_table smallint default 0,
 _fl_seq_col nvarchar(30),
 _fl_seq_pfx nvarchar(30),
 _fl_seq_sfx nvarchar(200),
 _fl_seq_pattern nvarchar(200),
 _fl_seq_counter nvarchar(200)
 )
 ;