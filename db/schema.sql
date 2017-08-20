CREATE DATABASE burgers_db;

use burgers_db;

CREATE TABLE burgers (
	id INTEGER auto_increment,
    burger_name VARCHAR (255) NOT NULL, 
    devoured BOOLEAN NOT NULL,
    date TIMESTAMP NOT NULL,
    PRIMARY KEY (ID)

);