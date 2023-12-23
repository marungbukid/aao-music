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
          song: true
        }
      }
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