DROP DATABASE IF EXISTS	pizza;
CREATE DATABASE pizza DEFAULT CHARACTER SET utf8;

USE pizza;


DROP TABLE IF EXISTS roles;
CREATE TABLE roles (
	id 					INT				NOT NULL 	PRIMARY KEY	AUTO_INCREMENT,
	role 		 		varchar(255) 	NOT NULL				
);

DROP TABLE IF EXISTS users;
CREATE TABLE users (
	id 					INT 			NOT NULL 	PRIMARY KEY	AUTO_INCREMENT,
	email	 			varchar(255) 	NOT NULL,
	password 	 		varchar(255) 	NOT NULL,
    username			varchar(255) 	NOT NULL,
    role 				varchar(255) 	NOT NULL
);

DROP TABLE IF EXISTS pizzas;
CREATE TABLE pizzas (
	id 		 			INT 			NOT NULL 	PRIMARY KEY AUTO_INCREMENT,
	name 		  		varchar(255) 	NOT NULL,
	ingridients 		varchar(255) 	NOT NULL,
	picture 	 		INT				NOT NULL,
	price 	 			FLOAT			NOT NULL
	 
);

DROP TABLE IF EXISTS promocodes;
CREATE TABLE promocodes (
	id			 		INT 		    NOT NULL PRIMARY KEY AUTO_INCREMENT,
	promocode  			varchar(255)    NOT NULL UNIQUE,
	discount   			FLOAT 	   	    NOT NULL,
	expires				varchar(255)	NOT NULL
);

DROP TABLE IF EXISTS basket;
CREATE TABLE basket (
	id		 			INT 			NOT NULL 	AUTO_INCREMENT PRIMARY KEY,
	pizza_id 	 		INT 			NOT NULL,
	price 	 			FLOAT 			NOT NULL,
	amount              INT             NOT NULL,
    user              	INT             NOT NULL,
    basket				int				NOT NULL	
);

DROP TABLE IF EXISTS orders;
CREATE TABLE orders (
	id 		 			INT 		    NOT NULL 	PRIMARY KEY    AUTO_INCREMENT,
	user				INT				NOT NULL,
	basket				INT				NOT NULL,
	adress 	 			varchar(255)    NOT NULL,
	delivery  			varchar(255)    NOT NULL,
	status 				varchar(255)    NOT NULL,
	promocode 			INT			 	NOT NULL,
	price 				FLOAT 			NOT NULL,
	discount 			INT 			NOT NULL,
    date				BIGINT 			NOT NULL	
);


DROP TABLE IF EXISTS pictures;
CREATE TABLE pictures (
	id 					INT				NOT NULL 	PRIMARY KEY	AUTO_INCREMENT,
	picture 		 		varchar(255) 	NOT NULL				
);


ALTER TABLE `pizzas` 
	ADD CONSTRAINT `FK_pizzas_picture_pictures_id` 
    FOREIGN KEY (`picture`) REFERENCES `pictures`(`id`)
		ON DELETE CASCADE 
		ON UPDATE CASCADE;

ALTER TABLE `orders` 
	ADD CONSTRAINT `FK_orders_user_users_id` 
    FOREIGN KEY (`user`) REFERENCES `users`(`id`)
		ON DELETE CASCADE 
		ON UPDATE CASCADE;
      
ALTER TABLE `orders` 
	ADD CONSTRAINT `FK_promocodes_id_orders_promocode` 
   FOREIGN KEY (`promocode`) REFERENCES `promocodes`(`id`)
		ON DELETE CASCADE 
		ON UPDATE CASCADE;

ALTER TABLE `basket` 
	ADD CONSTRAINT `FK_basket_pizza_id_pizzas_id` 
    FOREIGN KEY (`pizza_id`) REFERENCES `pizzas`(`id`)
		ON DELETE CASCADE 
		ON UPDATE CASCADE;
        
ALTER TABLE `basket` 
	ADD CONSTRAINT `FK_pizza_basket_user_users_id` 
    FOREIGN KEY (`user`) REFERENCES `users`(`id`)
		ON DELETE CASCADE 
		ON UPDATE CASCADE;

INSERT INTO `promocodes`
(`promocode`,`discount`,`expires`)
VALUES
( "No promocode", 0 ,"2099-12-12"),
( "half", 0.5, "2025-12-12"),
( "10%", 0.1, "2021-12-12");


INSERT INTO `roles`
(`role`)
VALUES
( "admin"),
( "user");


 INSERT INTO `users`
(`email`,`password`,`username`,`role`)
VALUES
( "admin@mail.ru","$2a$05$IkNg2uX/..8ppg1dN7R2WeKRM2FWUe2nGAH4St4xWWm9QJfIDnW9a","admin","admin"),
( "user@mail.ru","$2a$05$a8kTbirpl0ff6BS9ewbBWe6sQ0VsUgGUabwsScZD6BnpIHcgCxffW","user","user"),
( "user1@mail.ru","$2a$05$Xi9nLiYpGOcYcYedcpS3/uVJq/U2apanhM/0G8YnGn936wO0mEmvy","user1","user"),
( "user2@mail.ru","$2a$05$vw3GOXlP/1vC57hhnUkOzOaQX0HXPKM.rmXKUHexmTSCMpGzi0F6y","user2","user2");

INSERT INTO `pictures`
(`picture`)
VALUES
( "uploads\00082b3154f4f4c18ca22233ddd40a1d"),
( "uploads\8561c1dab0b4f9a391a7daf1db9b3b86"),
( "uploads\6552080454ea085e2bad071c18ff7cef"),
( "uploads\b023277303c12f96b3665f497ecffc01");

INSERT INTO `pizzas`
(`name`,`ingridients`,`picture`,`price`)
VALUES
( "Marinara","tomatoes, garlic, oregano, and extra virgin olive oil.",1,7),
( "Sicilian","tomato, onion, anchovies, and herbs",2,9.3),
( "Neapolitan ","anchovies, and herbstomato, onion", 3,12),
( "Greek","garlic,oil,tomatoes",1,15.5);

INSERT INTO `basket`
(`pizza_id`,`price`,`amount`,`user`,`basket`)
VALUES
(1, 		 7, 	 1, 	  1,	 1),
(2, 		 18.6, 	 2, 	  2,	 2),
(2, 		 18.6, 	 2, 	  3,	 1),
(3, 		 36, 	 3, 	  1,	 2),
(4, 		 62, 	 4, 	  2,	 1),
(1, 		 14, 	 2, 	  1,	 1),
(1, 		 7, 	 1, 	  2,	 1);


INSERT INTO `orders`
(`user`,`basket`,`adress`,         `delivery`,       `status`,    `promocode`,`price`,`discount`,`date`)
VALUES
( 1,     1, 	  'pupkin street', 'fast',            'complete', 1, 	       21,     0,         1642947667000),
( 1,     2, 	  'lenino', 	   'fast',            'complete', 1, 	       36,     0,         1642947667000),
( 1,     2, 	  'Nikitin street', 'fast',           'complete', 1, 	       36,     0,         1642947667000),
( 2,     2, 	  'Isachenko street', 'fast',         'complete', 1, 	       18.6,     0,         1642947667000),
( 2,     1, 	  'Krakow street', 'fast',            'complete', 1, 	       69,     0,         1642947667000),
( 2,     1, 	  'Moscow street', 'fast',            'complete', 1, 	       69,     0,         1642947667000),
( 3,     1, 	  'pupkin street', 'fast',            'complete', 1, 	       18.6,     0,         1642947667000);



        