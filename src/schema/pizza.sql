
DROP DATABASE IF EXISTS	`pizza`;
CREATE DATABASE `pizza` DEFAULT CHARACTER SET utf8;

USE `pizza`;

DROP TABLE IF EXISTS `user_roles`;
CREATE TABLE `user_roles` (
	`id`		 		INT 			NOT NULL 	AUTO_INCREMENT,
	`user_id` 	 		INT 			NOT NULL,
	`role_id` 	 		INT 			NOT NULL 	AUTO_INCREMENT,
	PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
	`id` 				INT				NOT NULL	AUTO_INCREMENT,
	`name` 		 		INT				NOT NULL	AUTO_INCREMENT,
	PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
	`id` 				INT 			NOT NULL	AUTO_INCREMENT,
	`email` 	 		varchar(255) 	NOT NULL,
	`password` 	 		varchar(255) 	NOT NULL,
	PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `pizzas`;
CREATE TABLE `pizzas` (
	`id` 		 		INT 			NOT NULL 	AUTO_INCREMENT,
	`name` 		  		varchar(255) 	NOT NULL,
	`ingridients` 		varchar(255) 	NOT NULL,
	`picture` 	 		varchar(255) 	NOT NULL,
	`price` 	 		INT NOT NULL,
	PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `promocodes`;
CREATE TABLE `promocodes` (
	`id` 		 		INT 		    NOT NULL	AUTO_INCREMENT,
	`promocode`  		varchar(255)    NOT NULL,
	`discount`   		DECIMAL	   	    NOT NULL,
	PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `basket`;
CREATE TABLE `basket` (
	`id` 		 		INT 		    NOT NULL 	    AUTO_INCREMENT,
	`order_id` 	 		INT 		    NOT NULL,
	`customer_id`		INT 		    NOT NULL,
	`pizza_id`   		INT             NOT NULL,
	`price` 	 		INT             NOT NULL,
	PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
	`id` 		 		INT 		    NOT NULL 	    AUTO_INCREMENT,
	`adress` 	 		varchar(255)    NOT NULL,
	`type_of_delivery`  varchar(255)    NOT NULL,
	`status` 			varchar(255)    NOT NULL,
	`promocode` 		INT 			NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `user_info` (
	`id` 				INT 			NOT NULL		AUTO_INCREMENT,
	`nickname` 			varchar(255) 	NOT NULL,
	`user` 				INT 			NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `roles` 
	ADD CONSTRAINT `FK_roles_id_user_roles_role_id` 
    FOREIGN KEY (`id`) REFERENCES `user_roles`(`role_id`);

ALTER TABLE `users` 
	ADD CONSTRAINT `FK_users_id_user_roles_user_id` 
    FOREIGN KEY (`id`) REFERENCES `user_roles`(`user_id`);

ALTER TABLE `promocodes` 
	ADD CONSTRAINT `FK_promocodes_id_orders_promocode` 
    FOREIGN KEY (`id`) REFERENCES `orders`(`promocode`);

ALTER TABLE `basket` 
	ADD CONSTRAINT `FK_basket_order_id_orders_id` 
    FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`);

ALTER TABLE `basket` 
	ADD CONSTRAINT `FK_basket_customer_id_user_roles_id` 
    FOREIGN KEY (`customer_id`) REFERENCES `user_roles`(`id`);

ALTER TABLE `basket` 
	ADD CONSTRAINT `FK_basket_pizza_id_pizzas_id` 
    FOREIGN KEY (`pizza_id`) REFERENCES `pizzas`(`id`);

ALTER TABLE `user_info` 
	ADD CONSTRAINT `FK_user_info_user_users_id` 
    FOREIGN KEY (`user`) REFERENCES `users`(`id`);







