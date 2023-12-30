export const dynamic = "force-dynamic";

import prisma from 'db';

export async function GET(
  request: Request
) {
  const locations = await prisma.location.findMany();

  return Response.json(locations, {
    status: 200,
  });
}