CREATE DATABASE IF NOT EXISTS company;

USE company;

CREATE TABLE employees (
	id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(11) DEFAULT NULL,
    PRIMARY KEY(id)
);

DESCRIBE employees;

INSERT INTO employees values
(1, 'Ryan Ray', 20000),
(2, 'Juan Hernandez', 50000),
(3, 'Javiera Hernandez', 30000),
(4, 'Yanira Hernandez', 40000),
(5, 'Juan Carlos Hernandez', 60000),
(6, 'Lorena Bahamondes', 70000);

SELECT * FROM employees;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'admin';