# Host: localhost  (Version: 5.5.53)
# Date: 2018-01-29 15:32:47
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "vip"
#

DROP TABLE IF EXISTS `vip`;
CREATE TABLE `vip` (
  `username` varchar(20) NOT NULL,
  `userpass` varchar(16) NOT NULL,
  `usersex` char(2) DEFAULT NULL,
  `userage` int(11) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "vip"
#

/*!40000 ALTER TABLE `vip` DISABLE KEYS */;
INSERT INTO `vip` VALUES ('13838383338','555555','女',39),('15045994371','',NULL,NULL),('15045994378','',NULL,NULL),('15045994379','',NULL,NULL),('15091868490','555555','女',39),('lily','555555','女',39),('好好','123456','男',19),('张九疯','123456','女',18),('张十一疯','666666','男',25),('张十疯','666666','男',25),('张好','123456','男',19),('张悦','55555',NULL,NULL),('杨丫丫','55555',NULL,NULL),('杨大叔','333333',NULL,NULL),('杨幼','12345',NULL,NULL),('杨幼苗','123456',NULL,NULL),('田老师','888888',NULL,NULL);
/*!40000 ALTER TABLE `vip` ENABLE KEYS */;
