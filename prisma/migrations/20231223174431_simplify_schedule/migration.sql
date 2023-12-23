/*
  Warnings:

  - You are about to drop the column `scheduleSongsId` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the `ScheduleSongs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Schedule" DROP CONSTRAINT "Schedule_scheduleSongsId_fkey";

-- DropForeignKey
ALTER TABLE "ScheduleSongs" DROP CONSTRAINT "ScheduleSongs_songId_fkey";

-- AlterTable
ALTER TABLE "Schedule" DROP COLUMN "scheduleSongsId";

-- DropTable
DROP TABLE "ScheduleSongs";
