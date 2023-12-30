-- AlterTable
ALTER TABLE "LocationSchedules" ADD COLUMN     "locationId" INTEGER;

-- AlterTable
ALTER TABLE "SongLead" ADD COLUMN     "locationId" INTEGER;

-- CreateTable
CREATE TABLE "LocationSongLead" (
    "id" SERIAL NOT NULL,
    "locationId" INTEGER,
    "songLeadId" INTEGER NOT NULL,

    CONSTRAINT "LocationSongLead_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SongLead" ADD CONSTRAINT "SongLead_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LocationSchedules" ADD CONSTRAINT "LocationSchedules_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LocationSongLead" ADD CONSTRAINT "LocationSongLead_songLeadId_fkey" FOREIGN KEY ("songLeadId") REFERENCES "SongLead"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LocationSongLead" ADD CONSTRAINT "LocationSongLead_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;
