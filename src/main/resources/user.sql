/*
Navicat MySQL Data Transfer

Source Server         : 10.168.16.116
Source Server Version : 50628
Source Host           : 10.168.16.116:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50628
File Encoding         : 65001

Date: 2017-01-14 15:55:31
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL DEFAULT '' COMMENT '用户名',
  `password` varchar(32) DEFAULT NULL COMMENT '密码',
  `usertype` varchar(2) DEFAULT NULL COMMENT '用户类型',
  `enabled` int(2) DEFAULT NULL COMMENT '是否可用',
  `realname` varchar(32) DEFAULT NULL COMMENT '真实姓名',
  `qq` varchar(14) DEFAULT NULL COMMENT 'QQ',
  `email` varchar(100) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL COMMENT '联系电话',
  `created` datetime DEFAULT NULL,
  `updated` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='用户信息表';

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'admin', 'admin', '2', null, null, null, null, null, null, null);
INSERT INTO `user` VALUES ('2', 'test2', 'aaaa', '2', null, null, null, null, null, null, null);
INSERT INTO `user` VALUES ('3', 'test3', 'bbbb', '1', null, null, null, null, null, null, null);
INSERT INTO `user` VALUES ('4', 'test4', 'cccc', '2', null, null, null, null, null, null, null);
INSERT INTO `user` VALUES ('5', 'test5', 'dddd', '1', null, null, null, null, null, null, null);
