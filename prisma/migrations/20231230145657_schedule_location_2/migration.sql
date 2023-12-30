/*
  Warnings:

  - You are about to drop the column `scheduleLocationId` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the `ScheduleLocation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Schedule" DROP CONSTRAINT "Schedule_scheduleLocationId_fkey";

-- DropForeignKey
ALTER TABLE "ScheduleLocation" DROP CONSTRAINT "ScheduleLocation_locationId_fkey";

-- AlterTable
ALTER TABLE "Schedule" DROP COLUMN "scheduleLocationId",
ADD COLUMN     "locationId" INTEGER;

-- DropTable
DROP TABLE "ScheduleLocation";

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;
