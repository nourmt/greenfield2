-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema data2
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema data2
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `data2` DEFAULT CHARACTER SET utf8 ;
USE `data2` ;

-- -----------------------------------------------------
-- Table `data2`.`Clients`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `data2`.`Clients` (
  `idClients` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idClients`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `data2`.`Product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `data2`.`Product` (
  `idProduct` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `image` VARCHAR(455) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `price` VARCHAR(255) NOT NULL,
  `Clients_idClients` INT NOT NULL,
  PRIMARY KEY (`idProduct`),
  INDEX `fk_Product_Clients_idx` (`Clients_idClients` ASC) VISIBLE,
  CONSTRAINT `fk_Product_Clients`
    FOREIGN KEY (`Clients_idClients`)
    REFERENCES `data2`.`Clients` (`idClients`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
