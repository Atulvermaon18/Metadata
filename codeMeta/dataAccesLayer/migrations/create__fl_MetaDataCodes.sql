CREATE TABLE __fl_MetaDataCodes
(_fl_id int,
 _fl_provider_id nvarchar(30) not null default '__fl_',
 _fl_created_by nvarchar(30) not null default '__fl_',
 _fl_created_date datetime default CURRENT_TIMESTAMP,
 _fl_modified_by nvarchar(30) not null default '__fl_',
 _fl_modified_date datetime default CURRENT_TIMESTAMP,
 _fl_status smallint default 0, 
 _fl_code smallint default 0,
 _fl_code_name nvarchar(30),
 _fl_code_type nvarchar(30),
 _fl_code_value1 nvarchar(200),
 _fl_code_value2 nvarchar(200),
 _fl_code_value3 nvarchar(200),
 _fl_code_value4 nvarchar(200),
 _fl_code_desc1 nvarchar(4000),
 _fl_code_desc2 nvarchar(4000),
 _fl_code_desc3 nvarchar(4000),
 _fl_code_desc4 nvarchar(4000)
 )
 ;
 select * from __fl_MetaDataCodes;