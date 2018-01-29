# Host: localhost  (Version: 5.5.53)
# Date: 2018-01-29 15:33:46
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "goodsinfo"
#

DROP TABLE IF EXISTS `goodsinfo`;
CREATE TABLE `goodsinfo` (
  `goodsId` varchar(10) NOT NULL,
  `goodsName` varchar(100) DEFAULT NULL,
  `goodsType` varchar(20) DEFAULT NULL,
  `goodsPrice` float DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL,
  `goodsDesc` varchar(100) DEFAULT NULL,
  `goodsImg` varchar(100) DEFAULT NULL,
  `beiyong1` varchar(100) DEFAULT NULL,
  `beiyong2` varchar(100) DEFAULT NULL,
  `beiyong3` varchar(100) DEFAULT NULL,
  `beiyong4` varchar(100) DEFAULT NULL,
  `beiyong5` varchar(100) DEFAULT NULL,
  `beiyong6` varchar(100) DEFAULT NULL,
  `beiyong7` varchar(100) DEFAULT NULL,
  `beiyong8` varchar(100) DEFAULT NULL,
  `beiyong9` varchar(100) DEFAULT NULL,
  `beiyong10` varchar(100) DEFAULT NULL,
  `beiyong11` varchar(100) DEFAULT NULL,
  `beiyong12` varchar(100) DEFAULT NULL,
  `beiyong13` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "goodsinfo"
#

/*!40000 ALTER TABLE `goodsinfo` DISABLE KEYS */;
INSERT INTO `goodsinfo` VALUES ('1001','美赞臣 MeadJohnson 【官方授权旗舰店】安婴妈妈A+孕妇奶粉 900g*2罐 ','奶粉',346,2,'最高返25元纸尿裤券 ','img/list_1.jpg','378','img/goodlistGlobal.jpg','img/goodlistYear.png','已抢光','378','230','爆款直降','新西兰品牌','【蜜芽自营 品质保证】富含Omega-3 DHA、益生元、铁、钙、维生素D与锌和碘等关键矿物质，好牛好奶，健康加倍','img/list_1.jpg','40','',''),('1002',' 新西兰原装 a2 【品牌授权】PLATINUM婴儿奶粉3段12~36M 900g*2罐','奶粉',359,4,'最高返25元纸尿裤券 ','img/list_1.jpg','378','img/goodlistGlobal.jpg','img/goodlistYear.png','已抢光','578','230','爆款直降','荷兰品牌','【蜜芽自营 品质保证】不含蔗糖，口味纯正，拥有恰好比例的健康脂肪酸，蕴含丰富的钙、铁、磷等微量元素，营养丰富，妈妈口碑之选','img/list_2.jpg','30','',''),('1003','荷兰原装 Hero Baby 婴幼儿奶粉5段24M+700g*4盒','奶粉',356,4,'最高返25元纸尿裤券 ','img/list_5.jpg','796','img/goodlistGlobal.jpg','img/goodlistYear.png','已抢光','796','79','爆款直降','德国品牌','【蜜芽自营 品质保证】科学配方，富含水解蛋白质，不含结晶糖成分及谷脘/谷氨酸，添加了更多的GOS/FOS和Omega3（ALA），品质纯正，营养健康【新老包装随机发货，新包装顶部添加蓝色防伪标识，喷码','img/list_3.jpg','50','',''),('1004','荷兰原装 Hero Baby 婴幼儿奶粉5段24M+700g*4盒','奶粉',320,5,'最高返25元纸尿裤券 ','img/list_4.jpg','516','img/goodlistGlobal.jpg','img/goodlistYear.png','已抢光','516','160','爆款直降',' 澳洲爱他美 Aptamil','【蜜芽自营 品质保证】含有Omega3、DHA，并添加了GOS（低聚半乳糖）和IcPolyfruclose（多聚果糖），奶味纯正，营养健康','img/list_4.jpg','15','',''),('1005','英国爱他美 Aptamil 婴幼儿配方奶粉3段12M+ 900g*4罐','奶粉',418,5,'最高返25元纸尿裤券 ','img/list_3.jpg','780','img/goodlistGlobal.jpg','img/goodlistYear.png','已抢光','780','160','爆款直降',' 英国牛栏 Cow&Gate ','【蜜芽自营 品质保证】以乳清为基础制造，添加维生素C、D与丰富的矿物质，补充宝宝生长所需，口感柔和，宝宝爱喝不发胖','img/list_5.jpg','22','',''),('1006','德国原装 HiPP 益生菌奶粉2+段24M+600g*8盒','奶粉',418,8,'最高返25元纸尿裤券 ','img/list_6.jpg','880','img/goodlistGlobal.jpg','img/goodlistYear.png','已抢光','880','230','爆款直降',' 诺优能 Nutrilon ','官方进口荷兰牛栏，超过80%荷兰宝宝的选择。官方正品，中荷两国质检，双重安全保障。','img/list_6.jpg','28','',''),('1007','港版美赞臣 MeadJohnson 奶粉3段安儿宝Enfagrow 12~36M 900g*2罐','奶粉',800,2,'最高返25元纸尿裤券 ','img/list_6.jpg','1080','img/goodlistGlobal.jpg','img/goodlistYear.png','已抢光','1080','600','爆款直降',' 澳洲爱他美 Aptamil  ','【蜜芽自营 品质保证】含有 Prebiotics益生元，特别添加25%的鱼油成分，奶味纯正，营养健康','img/list_7.jpg','32','',''),('1008','授权行货 喜宝 原装进口益生元奶粉3段（1-3岁）800g*2桶','奶粉',586,2,'最高返25元纸尿裤券 ','img/list_6.jpg','988','img/goodlistGlobal.jpg','img/goodlistYear.png','已抢光','988','412','爆款直降',' 惠氏 Wyeth 启赋 ','惠氏 Wyeth 启赋 较大婴儿和幼儿配方奶粉2段 6-18m 900g','img/list_8.jpg','38','','');
/*!40000 ALTER TABLE `goodsinfo` ENABLE KEYS */;

#
# Structure for table "shoppingcart"
#

DROP TABLE IF EXISTS `shoppingcart`;
CREATE TABLE `shoppingcart` (
  `vipName` varchar(10) DEFAULT NULL,
  `goodsId` varchar(10) DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "shoppingcart"
#

/*!40000 ALTER TABLE `shoppingcart` DISABLE KEYS */;
/*!40000 ALTER TABLE `shoppingcart` ENABLE KEYS */;
