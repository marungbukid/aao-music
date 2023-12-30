import { Song } from '@/models/song';
import prisma from 'db';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = parseInt(params.slug);

  const schedule = await prisma.schedule.findFirst({
    include: {
      scheduleSongs: {
        include: {
          song: true,
        },
      },
    },
    where: {
      id: {
        equals: slug,
      },
    },
  });

  return Response.json(schedule, {
    status: 200,
  });
}

export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } }
) {
  await prisma.schedule.delete({
    where: {
      id: parseInt(params.slug),
    },
  });
  
  return Response.json(
    {},
    {
      status: 200,
    }
  );
}

export async function PUT(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = parseInt(params.slug);
    const schedule = await request.json();

    try {
      const songs = await prisma.song.findMany({
        where: {
          id: {
            in: schedule.songs.map((s: any) => s.id),
          },
        },
      });

      await prisma.scheduleSongs.deleteMany({
        where: {
          scheduleId: {
            equals: slug,
          },
        },
      });

      await prisma.schedule.update({
        where: {
          id: slug,
        },
        data: {
          date: schedule.date,
          songLeadId: schedule.songLeadId,
          locationId: parseInt(searchParams.get('locationId') ?? '1'),
          scheduleSongs: {
            createMany: {
              data: songs.map((s: Song) => ({
                songId: s.id,
                order:
                  (schedule.songs as { id: number; order: number }[]).find(
                    (requestSong: any) => requestSong.id === s.id
                  )?.order ?? 0,
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
