DROP DATABASE IF EXISTS	pizza;
CREATE DATABASE pizza DEFAULT CHARACTER SET utf8;

USE pizza;

DROP TABLE IF EXISTS user_roles;
CREATE TABLE user_roles (
	id		 			INT 			NOT NULL 	AUTO_INCREMENT PRIMARY KEY,
	user_id 	 		INT 			NOT NULL,
	role_id 	 		INT 			NOT NULL 	
	 
);

DROP TABLE IF EXISTS roles;
CREATE TABLE roles (
	id 					INT				NOT NULL 	PRIMARY KEY	AUTO_INCREMENT,
	name 		 		INT				NOT NULL				
);

DROP TABLE IF EXISTS users;
CREATE TABLE users (
	id 					INT 			NOT NULL 	PRIMARY KEY	AUTO_INCREMENT,
	email	 			varchar(255) 	NOT NULL,
	password 	 		varchar(255) 	NOT NULL
	
);

DROP TABLE IF EXISTS pizzas;
CREATE TABLE pizzas (
	id 		 			INT 			NOT NULL 	PRIMARY KEY AUTO_INCREMENT,
	name 		  		varchar(255) 	NOT NULL,
	ingridients 		varchar(255) 	NOT NULL,
	picture 	 		varchar(255) 	NOT NULL,
	price 	 			INT				NOT NULL
	 
);

DROP TABLE IF EXISTS promocodes;
CREATE TABLE promocodes (
	id			 		INT 		    NOT NULL PRIMARY KEY AUTO_INCREMENT,
	promocode  			varchar(255)    NOT NULL,
	discount   			FLOAT 	   	    NOT NULL
	
);

DROP TABLE IF EXISTS basket;
CREATE TABLE basket (
	id		 			INT 			NOT NULL 	AUTO_INCREMENT PRIMARY KEY,
	pizza_id 	 		INT 			NOT NULL,
	price 	 			INT 			NOT NULL,
	amount              INT             NOT NULL,
    user              	INT             NOT NULL,
    basket				int				NOT NULL	
);

DROP TABLE IF EXISTS orders;
CREATE TABLE orders (
	id 		 			INT 		    NOT NULL 	PRIMARY KEY    AUTO_INCREMENT,
	user				INT				NOT NULL,
	basket				INT				NOT NULL
	adress 	 			varchar(255)    NOT NULL,
	delivery  			varchar(255)    NOT NULL,
	status 				varchar(255)    NOT NULL,
	promocode 			INT 			NOT NULL,
	price 				FLOAT 			NOT NULL,
	discount 			INT 			NOT NULL
	
);
DROP TABLE IF EXISTS user_info;
CREATE TABLE user_info (
	id 					INT 			NOT NULL	PRIMARY KEY	AUTO_INCREMENT,
	nickname 			varchar(255) 	NOT NULL,
	user 				INT 			NOT NULL
	 
);

ALTER TABLE `user_roles` 
	ADD CONSTRAINT `FK_roles_id_user_roles_role_id` 
    FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`)
		ON DELETE CASCADE 
		ON UPDATE CASCADE;

ALTER TABLE `user_roles` 
	ADD CONSTRAINT `FK_users_id_user_roles_user_id` 
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)
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
	ADD CONSTRAINT `FK_pizza_basket_user_user_roles_id` 
    FOREIGN KEY (`user`) REFERENCES `user_roles`(`id`)
		ON DELETE CASCADE 
		ON UPDATE CASCADE;

        
ALTER TABLE `user_info` 
	ADD CONSTRAINT `FK_user_info_user_users_id` 
    FOREIGN KEY (`user`) REFERENCES `users`(`id`)
		ON DELETE CASCADE 
		ON UPDATE CASCADE;