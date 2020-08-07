-- MySQL dump 10.13  Distrib 5.7.31, for Linux (x86_64)
--
-- Host: localhost    Database: portfolio_ab
-- ------------------------------------------------------
-- Server version	5.7.31-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `language`
--

DROP TABLE IF EXISTS `language`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `language` (
  `id` int(11) NOT NULL,
  `language_name` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `language`
--

LOCK TABLES `language` WRITE;
/*!40000 ALTER TABLE `language` DISABLE KEYS */;
INSERT INTO `language` VALUES (1,'react'),(2,'nodejs'),(3,'js'),(4,'html'),(5,'css'),(6,'mysql');
/*!40000 ALTER TABLE `language` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `work`
--

DROP TABLE IF EXISTS `work`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `work` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` text NOT NULL,
  `urlGit` varchar(255) NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  `thumb` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `work`
--

LOCK TABLES `work` WRITE;
/*!40000 ALTER TABLE `work` DISABLE KEYS */;
INSERT INTO `work` VALUES (31,'TinyHappy','Application réalisé pour un client réel, Jérôme Benoît, qui voulais partager les moments marquant de sa vie avec ses proches. \nPour ce projet nous étions une équipe de 5 personnes. J\'occupais le poste de développeur fullstack.','https://github.com/WildCodeSchool/paris-react-2003-pjt3-tinyhappy-front','https://paris-js-202003-pjt3-tinyhappy-front.jsrover.wilders.dev/','/images/thumbs/thumb-tinyhappy.png'),(32,'Doctalk','Application réalisé durant un hackaton en partenariat avec la célèbre entreprise Doctolib, qui permet d\'avoir une ligne direct entre médecin et patient où le médecin peut répondre si il le souhaite ou non. Le chat est réalisé avec socket.io et l\'ensemble alliance entre React / Nodejs.','https://github.com/AuxB?tab=repositories',NULL,'/images/thumbs/thumb-doctalk.png'),(33,'Pokefight','Application permettant de jouer avec n\'importe quelle pokemon afin de se battre contre d\'autre pokemon. Utilisation de l\'appel à API poke api.','https://github.com/AuxB/PokeFight','https://pokefight.netlify.app/','/images/thumbs/thumb-pokefight.png'),(34,'SpeechReco','Projet personnel réalisé pour une camarade de classe atteinte de surdité. Le principe est simple, on parle au micro et la retranscription est faite.(Utilisaiton avec google chrome requise)','https://github.com/AuxB/Speech_reco','https://auxb.github.io/Speech_reco/','/images/thumbs/thumb-speechreco.png'),(35,'CovidRun','Un hackaton de 24h, une équipe, pour réalisé ce site web regroupant plusieurs mini-jeux sous le theme du covid.','https://github.com/Audreyritzenthaler/covidrun','https://master--elegant-hypatia-f05ed3.netlify.app/','/images/thumbs/thumb-covidrun.png'),(36,'Cabreta Portfolio','Premier projet portfolio réalisé durant ma formation de développeur web pour un photographe fictif en  utilisant de vanilla js.','https://github.com/AuxB/Cabreta-JS','https://auxb.github.io/Cabreta-JS/','/images/thumbs/thumb-cabreta.png'),(43,'aa','fezfezfez','fezfezfez',NULL,'fezfezfez'),(45,'test languages','dezezfezf','fezfezf',NULL,'fzefezfez'),(46,'fezfezfz','fzefzefez','fezfez',NULL,'fezfez'),(47,'fezfezfz','fzefzefez','fezfez',NULL,'fezfez');
/*!40000 ALTER TABLE `work` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `work_language`
--

DROP TABLE IF EXISTS `work_language`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `work_language` (
  `work_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  KEY `fk_work_has_language_language1_idx` (`language_id`),
  KEY `fk_work_has_language_work_idx` (`work_id`),
  CONSTRAINT `fk_work_has_language_language1` FOREIGN KEY (`language_id`) REFERENCES `language` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `work_language`
--

LOCK TABLES `work_language` WRITE;
/*!40000 ALTER TABLE `work_language` DISABLE KEYS */;
INSERT INTO `work_language` VALUES (1,1),(1,2),(1,3),(2,1),(2,2),(3,3),(30,1),(30,3),(31,1),(31,2),(31,6),(32,1),(32,2),(32,6),(33,1),(34,3),(34,5),(34,4),(35,1),(36,3),(36,4),(36,5),(44,1),(48,1),(48,2),(48,4),(49,1),(49,6),(49,5);
/*!40000 ALTER TABLE `work_language` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-07 13:04:56
