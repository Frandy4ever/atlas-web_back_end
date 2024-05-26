-- Setup MySQL server
-- Config permissions

CREATE DATABASE IF NOT EXISTS my_db;
CREATE USER IF NOT EXISTS root@localhost IDENTIFIED BY 'root';
GRANT ALL PRIVILEGES ON my_db.* TO 'root'@'localhost';

USE my_db;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
    email VARCHAR(256)
);

INSERT INTO users(email) VALUE ("bob@dylan.com");
INSERT INTO users(email) VALUE ("bib@dylan.com");
