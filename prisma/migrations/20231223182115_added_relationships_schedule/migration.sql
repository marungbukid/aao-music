-- CreateTable
CREATE TABLE "ScheduleSongs" (
    "id" SERIAL NOT NULL,
    "songId" INTEGER NOT NULL,
    "scheduleId" INTEGER,

    CONSTRAINT "ScheduleSongs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ScheduleSongs" ADD CONSTRAINT "ScheduleSongs_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScheduleSongs" ADD CONSTRAINT "ScheduleSongs_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "Schedule"("id") ON DELETE SET NULL ON UPDATE CASCADE;
