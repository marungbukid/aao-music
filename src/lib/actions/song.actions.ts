'use server';

import { Paged } from '@/models/paged';
import { Song } from '@/models/song';
import prisma from 'db';
import { revalidatePath } from 'next/cache';

export async function revalidate(path: string) {
  revalidatePath(path);
}

export async function getSongById(id: number): Promise<Song | null> {
  try {
    const song = await prisma.song.findFirst({
      where: {
        id: {
          equals: id,
        },
      },
    });
    return song;
  } catch (error) {
    console.error(error);
  }

  return null;
}

export async function getSongs({
  pagination: { pageNumber, pageSize = 10, query },
}: {
  pagination: {
    pageNumber: number;
    pageSize: number;
    query?: string;
  };
}): Promise<Paged<Song>> {
  const totalCount = await prisma.song.count({
    where: {
      ...(query && {
        name: {
          mode: 'insensitive',
          contains: query!,
        },
      }),
    },
  });

  const totalPages = Math.ceil(totalCount / pageSize);

  const songs = await prisma.song.findMany({
    skip: (pageNumber - 1) * pageSize,
    take: pageSize,
    orderBy: [{ name: 'asc' }],
    where: {
      ...(query && {
        name: {
          mode: 'insensitive',
          contains: query!,
        },
      }),
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
    data: songs,
  };
}

export async function addSong(params: {
  name: string;
  author: string;
  key: string;
  chordSheetType: string;
  lyric: string;
}) {
  try {
    await prisma.song.create({
      data: params,
    });
  } catch (error) {
    console.error(error);
  }
}

export async function editSong(
  id: number,
  params: {
    name: string;
    author: string;
    key: string;
    chordSheetType: string;
    lyric: string;
  }
) {
  try {
    await prisma.song.update({
      data: params,
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.error(error);
  }
}

export async function deleteSong(id: number) {
  try {
    await prisma.song.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.error(error);
  }
}
