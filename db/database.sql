create database companydb;

use companydb;

create table employee(

id INT(11) NOT NULL auto_increment,
name VARCHAR(45) DEFAULT NULL,
salary INT(5) DEFAULT NULL,
primary key(id)

)