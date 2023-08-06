-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Час створення: Сер 06 2023 р., 14:38
-- Версія сервера: 10.4.28-MariaDB
-- Версія PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База даних: `reactquiz`
--

-- --------------------------------------------------------

--
-- Структура таблиці `narutoquiz`
--

CREATE TABLE `narutoquiz` (
  `category` varchar(50) NOT NULL,
  `question` text NOT NULL,
  `correct_answer` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `incorrect_answers` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп даних таблиці `narutoquiz`
--

INSERT INTO `narutoquiz` (`category`, `question`, `correct_answer`, `incorrect_answers`, `description`) VALUES
('child', 'What team were Naruto, Sakura and Sasuke assigned to?', 'Team #7', '[\"Team #13\", \"Team #5\", \"Team #2\"]', 'Team 7 was the Genin team consisting of Naruto, Sakura, and Sasuke who were under Kakashi Hatake. They were kinda a problematic group but they manage to balance out with their team dynamics.'),
('child', 'What was the name of Naruto\'s first teacher?', 'Iruka', '[\"Mizuki\", \"Yamato\", \"Kakashi\"]', 'Iruka sensei is the first teacher Naruto ever looked up to. Iruka was his instructor at the Ninja Academy and taught him the basics of being a ninja.'),
('child', 'Who killed the third hokage?', 'Orochimaru', '[\"Kabuto\", \"Danzo\", \"Kurama\"]', 'The Third Hokage won fight against Orochimaru because he achieved his goal to protect Konoha. Orochimaru technically killed the Third because he drove Hiruzen to use Reaper Death Seal.'),
('child', 'What Tsunade gave Naruto after their battle against Kabuto?', 'Necklace', '[\"Bracelet\", \"Kunai\", \"Ring\"]', 'Naruto makes a bet with Tsunade, that if he can master the Rasengan in one week, she\'ll give him a necklace belonging the to the First Hokage. Accordingly, he wins this bet.'),
('child', 'Who replaced Sasuke on Team Naruto?', 'Sai', '[\"Shikamaru\", \"Lee\", \"Kiba\"]', 'To provide additional manpower to the team, Sai of Root is added to the team as Sasuke\'s replacement.'),
('child', 'What element of the elements does Yamato sensei possess?', 'Tree element', '[\"Lightning element\", \"Fire element\", \"Stone element\"]', 'Yamato\'s Wood Release technique allows him to create wood, effectively turning his chakra into a source of life.'),
('child', 'What happened to Orochimaru\'s body?', 'Kabuto absorbed his body', '[\"His body was burned\", \"It is unknown\", \"The medical ninjas took his body for examination\"]', 'The most significant modification to Kabuto\'s body was the introduction of cells from Orochimaru\'s body, which from the beginning gives Kabuto a greater supply of chakra, and the chakra itself becomes much stronger.'),
('child', 'Who helped regain control of emotions during the battle against Paine?', 'Minato', '[\"Hinata\", \"Akamaru\", \"Sai\"]', 'When the Nine-Tails almost captures Naruto\'s mind and frees the eight tails, Minato appears in Naruto\'s mind thanks to a part of his chakra left in his son especially for such an occasion, in order to renew the seal.'),
('child', 'What is the name of the technique that Pain used to destroy Konoha?', 'Shinra Tensei', '[\"Kuroibo\", \"Chibaku Tensei\", \"Meifu no O\"]', 'Pain\'s famous \'Shinra Tensei\' in Naruto and everything he said before destroying the Konoha village.'),
('child', 'How many maximum bodies can a Rinnegan wielder control?', 'Six', '[\"More than ten\", \"Seven\", \"Four\"]', 'Nagato creates six bodies that receive chakra through the black rods and act on their behalf. Each body gets access to one path of the Rinnegan and all of them share vision, making defeating them incredibly difficult');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
