// Notes

install mariadb for sequelize
sudo mariadb

CREATE DATABASE boilerplate;
USE boilerplate;
CREATE USER dbname IDENTIFIED BY 'dbpass';
GRANT ALL PRIVILEGES ON boilerplate.* TO 'dbuser'@'%' WITH GRANT OPTION;

Add dbpass to .env
DBPASS=dbpass

Install Mongodb