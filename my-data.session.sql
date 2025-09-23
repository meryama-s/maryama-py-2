CREATE DATABASE public;

DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS customers;


CREATE TABLE items (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    price INT
);

CREATE TABLE customers (
    id INT PRIMARY KEY,
    firstname VARCHAR(50),
    lastname VARCHAR(50)
);

INSERT INTO items (id, name, price) VALUES
(1, 'Small Desk', 100),
(2, 'Large Desk', 300),
(3, 'Fan', 80);

INSERT INTO customers (id, firstname, lastname) VALUES
(1, 'Greg', 'Jones'),
(2, 'Sandra', 'Jones'),
(3, 'Scott', 'Scott'),
(4, 'Trevor', 'Green'),
(5, 'Melanie', 'Johnson');


SELECT * FROM items;
SELECT * FROM items WHERE price > 80;
SELECT * FROM items WHERE price <= 300;
SELECT * FROM customers WHERE lastname = 'Smith';
SELECT * FROM customers WHERE lastname = 'Jones';
SELECT * FROM customers WHERE firstname <> 'Scott';
