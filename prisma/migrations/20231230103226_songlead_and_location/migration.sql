-- AlterTable
ALTER TABLE "Schedule" ADD COLUMN     "songLeadId" INTEGER;

-- CreateTable
CREATE TABLE "SongLead" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,

    CONSTRAINT "SongLead_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "lat" DECIMAL(8,6) NOT NULL DEFAULT 0.0,
    "long" DECIMAL(9,6) NOT NULL DEFAULT 0.0,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_songLeadId_fkey" FOREIGN KEY ("songLeadId") REFERENCES "SongLead"("id") ON DELETE SET NULL ON UPDATE CASCADE;
