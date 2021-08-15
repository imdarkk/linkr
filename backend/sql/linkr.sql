-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 15, 2021 at 06:06 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `linkr`
--

-- --------------------------------------------------------

--
-- Table structure for table `socialmedia`
--

CREATE TABLE `socialmedia` (
  `socialmedia_id` int(11) NOT NULL,
  `sm_name` varchar(500) NOT NULL,
  `default_link` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `socialmedia`
--

INSERT INTO `socialmedia` (`socialmedia_id`, `sm_name`, `default_link`) VALUES
(1, 'Instagram', 'https://instagram.com/'),
(2, 'Facebook', 'https://facebook.com/'),
(3, 'Twitter', 'https://twitter.com/'),
(4, 'YouTube', 'https://youtube.com/'),
(5, 'LinkedIn', 'https://linkedin.com/'),
(6, 'Behance', 'https://behance.net/'),
(7, 'Dribbble', 'https://dribbble.com/'),
(8, 'Twitch', 'https://twitch.tv/'),
(9, 'Soundcloud', 'https://soundcloud.com/'),
(10, 'TikTok', 'https://tiktok.com/'),
(11, 'Medium', 'https://medium.com/'),
(12, 'Spotify', 'https://spotify.com/'),
(13, 'GitHub', 'https://github.com/'),
(14, 'Pinterest', 'https://pinterest.com/'),
(15, 'Reddit', 'https://reddit.com/');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userid` int(11) NOT NULL,
  `username` varchar(3000) NOT NULL,
  `email` varchar(3000) NOT NULL,
  `password` varchar(3000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userid`, `username`, `email`, `password`) VALUES
(1, 'darkk', 'email@email.com', '$2b$11$6fgZz0pVUWyrN6oh/en0WurozXlEQOREtP116QEkI9MUFNUu5Zbta');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `socialmedia`
--
ALTER TABLE `socialmedia`
  ADD PRIMARY KEY (`socialmedia_id`),
  ADD UNIQUE KEY `sm_name` (`sm_name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userid`),
  ADD UNIQUE KEY `username` (`username`,`email`) USING HASH;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `socialmedia`
--
ALTER TABLE `socialmedia`
  MODIFY `socialmedia_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
