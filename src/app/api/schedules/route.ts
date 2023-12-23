import prisma from 'db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const pageNumber: number = parseInt(searchParams.get('pageNumber') ?? '1');
  const pageSize: number = parseInt(searchParams.get('pageSize') ?? '10');
  const query = searchParams.get('query');

  console.log(pageNumber, pageSize, query);

  const totalCount = await prisma.schedule.count({
    where: {
      ...(query && {
        date: {
          equals: searchParams.get('query')!,
        },
      }),
    },
  });

  const totalPages = Math.ceil(totalCount / pageSize);

  console.log('finding schedules');

  const schedules = await prisma.schedule.findMany({
    skip: (pageNumber - 1) * pageSize,
    take: pageSize,
    orderBy: [{ date: 'desc' }],
    where: {
      ...(query && {
        date: {
          equals: searchParams.get('query')!,
        },
      }),
    },
  });

  console.log('schedules', schedules);

  return Response.json(
    {
      pagination: {
        totalCount: totalCount,
        pageSize: pageSize,
        currentPage: pageNumber,
        items: schedules,
        totalPages: totalPages,
        hasNext: pageNumber < totalPages,
        hasPrev: pageNumber > 1,
      },
      data: schedules,
    },
    {
      status: 200,
    }
  );
}

export async function POST(request: Request) {
  try {
    const schedule = await request.json();

    try {
      const songs = await prisma.song.findMany({
        where: {
          id: {
            in: schedule.songIds,
          },
        },
      });

      await prisma.schedule.create({
        data: {
          date: schedule.date,
          scheduleSongs: {
            createMany: {
              data: songs.map((s) => ({
                songId: s.id,
              })),
            },
          },
        },
      });
    } catch (error) {
      console.error(error);
      return Response.json(error, {
        status: 400,
      });
    }
  } catch (error) {
    console.error(error);
  }

  return Response.json(null, { status: 200 });
}
