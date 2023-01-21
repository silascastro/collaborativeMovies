-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema movies
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `movies` ;

-- -----------------------------------------------------
-- Schema movies
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `movies` DEFAULT CHARACTER SET utf8 ;
USE `movies` ;

-- -----------------------------------------------------
-- Table `movies`.`gender`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `movies`.`gender` (
  `gender_id` INT NOT NULL,
  `gender` VARCHAR(45) NULL,
  PRIMARY KEY (`gender_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `movies`.`movie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `movies`.`movie` (
  `movie_id` INT NOT NULL AUTO_INCREMENT,
  `movie_name` VARCHAR(100) NOT NULL,
  `movie_description` VARCHAR(250) NOT NULL,
  `movie_rate` INT NULL,
  `movie_image` VARCHAR(45) NULL,
  `movie_director` VARCHAR(45) NULL,
  `movie_link` VARCHAR(100) NULL,
  `gender_gender_id` INT NOT NULL,
  PRIMARY KEY (`movie_id`, `gender_gender_id`),
  INDEX `fk_movie_gender1_idx` (`gender_gender_id` ASC) VISIBLE,
  CONSTRAINT `fk_movie_gender1`
    FOREIGN KEY (`gender_gender_id`)
    REFERENCES `movies`.`gender` (`gender_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `movies`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `movies`.`user` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `user_email` VARCHAR(100) NOT NULL,
  `user_nickname` VARCHAR(45) NOT NULL,
  `user_password` VARCHAR(45) NOT NULL,
  `user_photo` VARCHAR(100) NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `movies`.`review`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `movies`.`review` (
  `review_id` INT NOT NULL,
  `review_note` INT NOT NULL,
  `review_comentary` VARCHAR(45) NULL,
  `review_movie_id` INT NOT NULL,
  `review_user_id` INT NOT NULL,
  PRIMARY KEY (`review_id`, `review_movie_id`, `review_user_id`),
  INDEX `fk_rating_movie_idx` (`review_movie_id` ASC) VISIBLE,
  INDEX `fk_rating_user1_idx` (`review_user_id` ASC) VISIBLE,
  CONSTRAINT `fk_rating_movie`
    FOREIGN KEY (`review_movie_id`)
    REFERENCES `movies`.`movie` (`movie_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_rating_user1`
    FOREIGN KEY (`review_user_id`)
    REFERENCES `movies`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `movies`.`actor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `movies`.`actor` (
  `actor_id` INT NOT NULL,
  `actor_name` VARCHAR(45) NOT NULL,
  `actor_born` DATE NOT NULL,
  PRIMARY KEY (`actor_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `movies`.`character`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `movies`.`character` (
  `character_movie_id` INT NOT NULL,
  `character_actor_id` INT NOT NULL,
  PRIMARY KEY (`character_movie_id`, `character_actor_id`),
  INDEX `fk_movie_has_actor_actor1_idx` (`character_actor_id` ASC) VISIBLE,
  INDEX `fk_movie_has_actor_movie1_idx` (`character_movie_id` ASC) VISIBLE,
  CONSTRAINT `fk_movie_has_actor_movie1`
    FOREIGN KEY (`character_movie_id`)
    REFERENCES `movies`.`movie` (`movie_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_movie_has_actor_actor1`
    FOREIGN KEY (`character_actor_id`)
    REFERENCES `movies`.`actor` (`actor_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `movies`.`director`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `movies`.`director` (
  `director_id` INT NOT NULL,
  `director_name` VARCHAR(45) NULL,
  PRIMARY KEY (`director_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `movies`.`movie_has_directors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `movies`.`movie_has_directors` (
  `director_director_id` INT NOT NULL,
  `movie_movie_id` INT NOT NULL,
  PRIMARY KEY (`director_director_id`, `movie_movie_id`),
  INDEX `fk_director_has_movie_movie1_idx` (`movie_movie_id` ASC) VISIBLE,
  INDEX `fk_director_has_movie_director1_idx` (`director_director_id` ASC) VISIBLE,
  CONSTRAINT `fk_director_has_movie_director1`
    FOREIGN KEY (`director_director_id`)
    REFERENCES `movies`.`director` (`director_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_director_has_movie_movie1`
    FOREIGN KEY (`movie_movie_id`)
    REFERENCES `movies`.`movie` (`movie_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `movies`.`favorite_movies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `movies`.`favorite_movies` (
  `user_user_id` INT NOT NULL,
  `movie_movie_id` INT NOT NULL,
  `movie_gender_gender_id` INT NOT NULL,
  PRIMARY KEY (`user_user_id`, `movie_movie_id`, `movie_gender_gender_id`),
  INDEX `fk_user_has_movie_movie1_idx` (`movie_movie_id` ASC, `movie_gender_gender_id` ASC) VISIBLE,
  INDEX `fk_user_has_movie_user1_idx` (`user_user_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_movie_user1`
    FOREIGN KEY (`user_user_id`)
    REFERENCES `movies`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_movie_movie1`
    FOREIGN KEY (`movie_movie_id` , `movie_gender_gender_id`)
    REFERENCES `movies`.`movie` (`movie_id` , `gender_gender_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
