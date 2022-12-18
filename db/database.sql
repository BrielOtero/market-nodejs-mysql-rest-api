CREATE DATABASE IF NOT EXISTS supermarketdb;

USE supermarketdb;

CREATE TABLE products(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    image VARCHAR(50) DEFAULT NULL,
    stock INT,
    quantity REAL,
    target_stock INT,
    measurement VARCHAR(5),
    ref_alcampo VARCHAR(30) DEFAULT NULL,
    quantity_alcampo REAL,
    ref_carrefour VARCHAR(30) DEFAULT NULL,
    quantity_carrefour REAL,
    PRIMARY KEY(id)
);

DESCRIBE products;
