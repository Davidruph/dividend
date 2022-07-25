-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 26, 2022 at 10:17 PM
-- Server version: 5.7.36
-- PHP Version: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dividend_tracker`
--

-- --------------------------------------------------------

--
-- Table structure for table `log`
--

DROP TABLE IF EXISTS `log`;
CREATE TABLE IF NOT EXISTS `log` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `log_date_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` varchar(11) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `log`
--

INSERT INTO `log` (`user_id`, `log_date_time`, `status`) VALUES
(1, '2022-06-04 20:29:22', 'In');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `fullname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(100) DEFAULT NULL,
  `login_type` varchar(255) DEFAULT 'local',
  `registered_on` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `fullname`, `email`, `password`, `role`, `login_type`, `registered_on`) VALUES
(1, 'David Junior', '', '$2b$10$zVqkXsCeYfDgmKaWXbSBI.MngMwGBDZAbWMgZ.PT2tCYqx6vZLwq.', 'user', 'local', '2022-06-17 10:51:08'),
(2, 'ddddddddd', 'ddddddddddd', '$2b$10$XTaJFh86T/xWjdTfDlvjKObmJBNqgnnzheDRXYXWXx0ADDbadesuC', 'user', 'local', '2022-06-11 23:53:22'),
(3, 'ddddddddd', 'ddddddddddds', '$2b$10$0JHvtcMQPqBnWlDeDMnpheyisn0bLYMUWVYfTdkQXSSuu7yb.LdRi', 'user', 'local', '2022-06-12 00:00:29'),
(4, 'ddddddddd', 'dddddddxxxxxx', '$2b$10$elQ0PB.Fpn8dWBZPFa5/5eFkDNmHkPRtaB9jC8eoyRlKe6A28s6vC', 'user', 'local', '2022-06-12 00:00:47'),
(5, 'ddddddddddd', 'eeeeeeeeeeeee', '$2b$10$372ZJLFXd7Lu4wl3xxAzFu.FwLpc6KtaB6sh90tLUSbTSeSaOWpnm', 'user', 'local', '2022-06-12 00:05:11'),
(6, 'David Junior', 'juniord.dj88@gmail.com', '$2b$10$wv.fZmTDg7l.TFNowDXTleH8N/alPquXt4yXAaz8pdmvqFL0gg2c6', 'user', 'google', '2022-06-15 00:39:24'),
(7, 'pay test', 'paytest432@gmail.com', '$2b$10$5lFaaF2QBAKq61eVDuJucuF98gUARpfXOld2iZsBtwPVH1PWQn1Ae', 'user', 'google', '2022-06-15 00:47:28'),
(8, 'Judas Bontaj', 'judas@gmail.com', '$2b$10$Br.2cWI7a3lNZNsufyMuDeQkIItDOrwQL4WEEho4pg2XvUceoJ4uS', 'user', 'local', '2022-06-17 19:50:26');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
