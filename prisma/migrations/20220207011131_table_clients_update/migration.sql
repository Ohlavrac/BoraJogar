/*
  Warnings:

  - You are about to drop the column `urlIamge` on the `clients` table. All the data in the column will be lost.
  - Added the required column `urlImage` to the `clients` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `clients` DROP COLUMN `urlIamge`,
    ADD COLUMN `urlImage` VARCHAR(191) NOT NULL;
