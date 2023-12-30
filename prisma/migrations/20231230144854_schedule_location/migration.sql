/*
  Warnings:

  - You are about to drop the column `locationSchedulesId` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the `LocationSchedules` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "LocationSchedules" DROP CONSTRAINT "LocationSchedules_locationId_fkey";

-- DropForeignKey
ALTER TABLE "Schedule" DROP CONSTRAINT "Schedule_locationSchedulesId_fkey";

-- AlterTable
ALTER TABLE "Schedule" DROP COLUMN "locationSchedulesId",
ADD COLUMN     "scheduleLocationId" INTEGER;

-- DropTable
DROP TABLE "LocationSchedules";

-- CreateTable
CREATE TABLE "ScheduleLocation" (
    "id" SERIAL NOT NULL,
    "locationId" INTEGER NOT NULL,

    CONSTRAINT "ScheduleLocation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_scheduleLocationId_fkey" FOREIGN KEY ("scheduleLocationId") REFERENCES "ScheduleLocation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScheduleLocation" ADD CONSTRAINT "ScheduleLocation_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
