'use server';
import { Paged } from '@/models/paged';
import { Schedule } from '@/models/schedule';
import { Song } from '@/models/song';
import prisma from 'db';

export async function getScheduleByPage({
  locationId,
  pagination: { pageNumber, pageSize = 10, query },
}: {
  locationId: number;
  pagination: {
    pageNumber: number;
    pageSize: number;
    query?: string;
  };
}) {
  const totalCount = await prisma.schedule.count({
    where: {
      ...(query && {
        date: {
          equals: query!,
        },
      }),
    },
  });

  const totalPages = Math.ceil(totalCount / pageSize);

  const schedules = await prisma.schedule.findMany({
    skip: (pageNumber - 1) * pageSize,
    take: pageSize,
    orderBy: [{ date: 'desc' }],
    where: {
      ...(query && {
        date: {
          equals: query!,
        },
      }),
      locationId: {
        equals: locationId,
      },
    },
    include: {
      songLead: true,
    },
  });
  
  return {
    pagination: {
      totalCount: totalCount,
      pageSize: pageSize,
      currentPage: pageNumber,
      totalPages: totalPages,
      hasNext: pageNumber < totalPages,
      hasPrevious: pageNumber > 1,
    },
    data: schedules,
  } as unknown as Paged<Schedule>;
}

export async function getScheduleById(id: number, includeLyrics: boolean = true) {
  try {
    const schedule = await prisma.schedule.findFirst({
      include: {
        scheduleSongs: {
          include: {
            song: {
              select: {
                id: true,
                name: true,
                author: true,
                lyric: includeLyrics,
                chordSheetType: true,
                createdAt: true,
                key: true,
                version: true,
                
              }
            },
          },
        },
      },
      where: {
        id: {
          equals: id,
        },
      },
    });

    return schedule as unknown as Schedule;
  } catch (error) {
    console.error(error);
  }

  return null;
}

export async function addSchedule(
  locationId: number,
  params: {
    date: Date;
    songs: {
      id: number;
      order: number;
    }[];
    songLeadId: number;
  }
) {
  try {
    const songs = await prisma.song.findMany({
      where: {
        id: {
          in: params.songs.map((s: any) => s.id),
        },
      },
    });

    await prisma.schedule.create({
      data: {
        date: params.date,
        songLeadId: params.songLeadId,
        locationId: locationId,
        scheduleSongs: {
          createMany: {
            data: songs.map((s: Song) => ({
              songId: s.id,
              order:
                (params.songs as { id: number; order: number }[]).find(
                  (requestSong: any) => requestSong.id === s.id
                )?.order ?? 0,
            })),
          },
        },
      },
    });
  } catch (error) {
    console.error(error);
  }
}

export async function deleteScheduleById(id: number) {
  try {
    await prisma.schedule.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.error(error);
  }
}

export async function updateScheduleById(
  id: number,
  locationId: number,
  params: {
    date: Date;
    songs: {
      id: number;
      order: number;
    }[];
    songLeadId: number;
  }
) {
  try {
    const songs = await prisma.song.findMany({
      where: {
        id: {
          in: params.songs.map((s: any) => s.id),
        },
      },
    });

    await prisma.scheduleSongs.deleteMany({
      where: {
        scheduleId: {
          equals: id,
        },
      },
    });

    await prisma.schedule.update({
      where: {
        id: id,
      },
      data: {
        date: params.date,
        songLeadId: params.songLeadId,
        locationId: locationId,
        scheduleSongs: {
          createMany: {
            data: songs.map((s: Song) => ({
              songId: s.id,
              order:
                (params.songs as { id: number; order: number }[]).find(
                  (requestSong: any) => requestSong.id === s.id
                )?.order ?? 0,
            })),
          },
        },
      },
    });
  } catch (error) {
    console.error(error);
  }
}
