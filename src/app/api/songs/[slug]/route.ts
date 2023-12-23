import prisma from 'db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = parseInt(params.slug);

  const song = await prisma.song.findFirst({
    where: {
      id: {
        equals: slug,
      },
    },
  });

  return Response.json(song, {
    status: 200,
  });
}

export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = parseInt(params.slug);

  await prisma.song.delete({
    where: {
      id: slug
    }
  });

  return Response.json(null, {
    status: 200,
  });
}

export async function PUT(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = parseInt(params.slug);
  const song = await request.json();


  await prisma.song.update({
    data: song,
    where: {
      id: slug
    }
  });

  return Response.json(null, {
    status: 200,
  });
}
