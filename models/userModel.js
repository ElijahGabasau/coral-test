//in order to avoid possible errors, user's been described as a model object
module.exports = {
  id: 'int primary key auto_increment',
  salutation: 'varchar(255) not null',
  first_name: 'varchar(255) not null',
  middle_name: 'varchar(255) default null',
  last_name: 'varchar(255) not null',
  company: 'varchar(255) not null',
  title: 'varchar(255) not null',
  email: 'varchar(255) not null',
  phone: 'varchar(255) not null',
  fax: 'varchar(255) default null',
  mobile: 'varchar(255) default null',
  business_areas: 'varchar(255) not null',
  comments: 'varchar(2000) not null',
  country: 'varchar(255) not null',
  office_name: 'varchar(255) not null',
  address: 'varchar(2000) not null',
  postal_code: 'varchar(255) not null',
  city:'varchar(255) not null',
  state: 'varchar(255) not null',
  password: 'varchar(255) not null'
}