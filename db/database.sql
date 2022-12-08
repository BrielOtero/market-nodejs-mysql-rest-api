CREATE DATABASE IF NOT EXISTS supermarketdb;

USE supermarketdb;

CREATE TABLE products(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    image VARCHAR(50) DEFAULT NULL,
    stock INT,
    target_stock INT,
    ref_alcampo VARCHAR(30) DEFAULT NULL,
    ref_carrefour VARCHAR(30) DEFAULT NULL,
    PRIMARY KEY(id)
);

DESCRIBE products;

INSERT INTO
    products
VALUES
    (1, 'Macarrones', null, 0, 3, 111, 111),
    (2, 'Patatas', null, 0, 3, 111, 111),
    (3, 'Tomates', null, 0, 3, 111, 111),
    (4, 'Pimientos', null, 0, 3, 111, 111),
    (5, 'Huevos', null, 0, 3, 111, 111),
    (6, 'Lechuga', null, 0, 3, 111, 111);