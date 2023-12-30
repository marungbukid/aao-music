-- AlterTable
ALTER TABLE "Schedule" ADD COLUMN     "locationSchedulesId" INTEGER;

-- CreateTable
CREATE TABLE "LocationSchedules" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "LocationSchedules_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_locationSchedulesId_fkey" FOREIGN KEY ("locationSchedulesId") REFERENCES "LocationSchedules"("id") ON DELETE SET NULL ON UPDATE CASCADE;
