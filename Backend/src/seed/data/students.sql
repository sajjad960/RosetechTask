
DROP TABLE IF EXISTS `students`;

CREATE TABLE `students` (
  `id` varchar(100) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
INSERT INTO `students` VALUES
('200','alia','female','2023-12-20 18:52:12','2023-12-20 18:52:12'),
('201','sajjad','male','2023-12-20 18:52:28','2023-12-20 18:52:28'),
('202','rohima','female','2023-12-20 18:52:43','2023-12-20 18:52:43'),
('203','ima','female','2023-12-20 18:53:01','2023-12-20 18:53:01'),
('204','rohim','male','2023-12-20 18:53:15','2023-12-20 18:53:15'),
('205','rakim','male','2023-12-20 18:53:22','2023-12-20 18:53:22'),
('206','sakib','male','2023-12-20 18:53:31','2023-12-20 18:53:31');
UNLOCK TABLES;

