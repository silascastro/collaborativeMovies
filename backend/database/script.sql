-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema movies
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema movies
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `heroku_a7d2a55b2795ea1` DEFAULT CHARACTER SET utf8mb3 ;
USE `heroku_a7d2a55b2795ea1` ;

-- -----------------------------------------------------
-- Table `movies`.`movie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `heroku_a7d2a55b2795ea1`.`movie` (
  `movie_id` INT NOT NULL AUTO_INCREMENT,
  `movie_name` VARCHAR(100) NOT NULL,
  `movie_description` VARCHAR(300) NOT NULL,
  `movie_rate` INT NULL DEFAULT NULL,
  `movie_director` VARCHAR(45) NULL DEFAULT NULL,
  `movie_image` VARCHAR(45) NULL DEFAULT NULL,
  `movie_gender` VARCHAR(45) NULL DEFAULT NULL,
  `movie_link` VARCHAR(100) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`movie_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `movies`.`review`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `heroku_a7d2a55b2795ea1`.`review` (
  `review_id` INT NOT NULL AUTO_INCREMENT,
  `review_note` VARCHAR(45) NOT NULL,
  `review_comentary` VARCHAR(250) NOT NULL,
  `review_rate` INT NOT NULL,
  `fk_movie_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`review_id`),
  INDEX `fk_movie_id` (`fk_movie_id` ASC),
  CONSTRAINT `review_ibfk_1`
    FOREIGN KEY (`fk_movie_id`)
    REFERENCES `heroku_a7d2a55b2795ea1`.`movie` (`movie_id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
