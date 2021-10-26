CREATE TABLE `user_roles` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL,
	`role_id` INT NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (`id`)
);

CREATE TABLE `roles` (
	`id` BINARY NOT NULL AUTO_INCREMENT,
	`name` INT NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (`id`)
);

CREATE TABLE `usres` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`email` VARCHAR(255) NOT NULL,
	`pass` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Pizzas` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`pizza_name` VARCHAR(255) NOT NULL,
	`ingridients` VARCHAR(255) NOT NULL,
	`picture` VARCHAR(255) NOT NULL,
	`price` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `promocodes` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`promocode` VARCHAR(255) NOT NULL,
	`discount` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `basket` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`order_id` INT NOT NULL,
	`customer_id` INT NOT NULL,
	`discount_id` INT NOT NULL,
	`pizza_id` INT NOT NULL,
	`price` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `orders` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`adress` VARCHAR(255) NOT NULL,
	`type_of_delivery` VARCHAR(255) NOT NULL,
	`status` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `roles` ADD CONSTRAINT `roles_fk0` FOREIGN KEY (`id`) REFERENCES `user_roles`(`role_id`);

ALTER TABLE `usres` ADD CONSTRAINT `usres_fk0` FOREIGN KEY (`id`) REFERENCES `user_roles`(`user_id`);

ALTER TABLE `basket` ADD CONSTRAINT `basket_fk0` FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`);

ALTER TABLE `basket` ADD CONSTRAINT `basket_fk1` FOREIGN KEY (`customer_id`) REFERENCES `user_roles`(`id`);

ALTER TABLE `basket` ADD CONSTRAINT `basket_fk2` FOREIGN KEY (`discount_id`) REFERENCES `promocodes`(`id`);

ALTER TABLE `basket` ADD CONSTRAINT `basket_fk3` FOREIGN KEY (`pizza_id`) REFERENCES `Pizzas`(`id`);








