import { Song } from '@/models/song';
import prisma from 'db';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const pageNumber: number = parseInt(searchParams.get('pageNumber') ?? '1');
  const pageSize: number = parseInt(searchParams.get('pageSize') ?? '10');
  const query = searchParams.get('query');

  console.log(pageNumber, pageSize, query)

  const totalCount = await prisma.song.count({
    where: {
      ...(query && {
        name: {
          mode: 'insensitive',
          contains: searchParams.get('query')!,
        },
      }),
    },
  });

  const totalPages = Math.ceil(totalCount / pageSize);

  console.log('finding songs');

  const songs = await prisma.song.findMany({
    skip: (pageNumber - 1) * pageSize,
    take: pageSize,
    orderBy: [{ name: 'asc' }],
    where: {
      ...(query && {
        name: {
          mode: 'insensitive',
          contains: searchParams.get('query')!,
        },
      }),
    },
  });

  console.log('songs found');

  return Response.json(
    {
      pagination: {
        totalCount: totalCount,
        pageSize: pageSize,
        currentPage: pageNumber,
        items: songs.map((e: Song) => ({
          ...e,
          lyric: '',
        })),
        totalPages: totalPages,
        hasNext: pageNumber < totalPages,
        hasPrev: pageNumber > 1,
      },
      data: songs,
    },
    {
      status: 200,
    }
  );
}

export async function POST(request: Request) {
  try {
    const song = await request.json();

    try {
      await prisma.song.create({
        data: song,
      });
    } catch (error) {
      return Response.json(error, {
        status: 400,
      });
    }
  } catch (error) {
    console.error(error);
  }

  return Response.json(null, { status: 200 });
}
