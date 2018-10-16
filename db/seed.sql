-- drop table properties

create table properties (
property_id serial primary key,
propName varchar(50),
propDesc varchar(150),
addressInput varchar(50),
cityInput varchar(50),
stateInput varchar(50),
zipInput int,
urlInput text,
loanInput int,
mortgageInput int,
rentInput int
users_id int references users(id)
);

create table users (
id serial primary key,
username varchar(50),
password varchar(50)    
);