import prisma from 'db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const locationId = parseInt(searchParams.get('location') ?? '1');

  const songLeads = await prisma.songLead.findMany({
    where: {
      locationId: {
        equals: locationId,
      },
    },
  });

  return Response.json(songLeads, {
    status: 200,
  });
}

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const songLead: {
    firstName: string,
    lastName: string
  } = await request.json();

  await prisma.songLead.create({
    data: {
      firstName: songLead.firstName.toUpperCase(),
      lastName: songLead.lastName.toUpperCase(),
      locationId: parseInt(searchParams.get('locationId') ?? '1')
    }
  })

  return Response.json({}, {
    status: 200,
  });
}
