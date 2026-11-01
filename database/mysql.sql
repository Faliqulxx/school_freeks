-- ==============================================================================
-- FREEKS School Website Template - MySQL / TiDB / PlanetScale DDL
-- ==============================================================================
-- Skema database standar untuk MySQL 5.7+ / 8.0+ / MariaDB / PlanetScale.
-- ==============================================================================

CREATE DATABASE IF NOT EXISTS school_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE school_db;

-- 1. Tabel Pendaftaran PPDB (registrations)
CREATE TABLE IF NOT EXISTS `registrations` (
  `id` VARCHAR(36) NOT NULL PRIMARY KEY,
  `registration_no` VARCHAR(50) NOT NULL UNIQUE,
  `full_name` VARCHAR(255) NOT NULL,
  `gender` VARCHAR(20) NOT NULL,
  `nisn` VARCHAR(20) NOT NULL,
  `birth_place` VARCHAR(100) NULL,
  `birth_date` VARCHAR(50) NULL,
  `parent_name` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(50) NOT NULL,
  `email` VARCHAR(255) NULL,
  `address` TEXT NULL,
  `previous_school` VARCHAR(255) NULL,
  `status` VARCHAR(50) NOT NULL DEFAULT 'pending',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX `idx_reg_status` (`status`),
  INDEX `idx_reg_created` (`created_at` DESC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Tabel Pesan Kontak (contact_messages)
CREATE TABLE IF NOT EXISTS `contact_messages` (
  `id` VARCHAR(36) NOT NULL PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NULL,
  `phone` VARCHAR(50) NULL,
  `subject` VARCHAR(255) NOT NULL,
  `message` TEXT NOT NULL,
  `status` VARCHAR(50) NOT NULL DEFAULT 'unread',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX `idx_msg_status` (`status`),
  INDEX `idx_msg_created` (`created_at` DESC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

