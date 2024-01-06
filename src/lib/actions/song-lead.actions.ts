'use server';

import prisma from 'db';
import { SongLead } from '../generated/client';

export async function addSongLead(
  locationId: number,
  params: {
    firstName: string;
    lastName: string;
  }
) {
  try {
    await prisma.songLead.create({
      data: {
        firstName: params.firstName.toUpperCase(),
        lastName: params.lastName.toUpperCase(),
        locationId: locationId,
      },
    });
  } catch (error) {
    console.error(error);
  }
}

export async function getSongLeads(
  locationId: number
): Promise<SongLead[] | null> {
  try {
    const songLeads = await prisma.songLead.findMany({
      where: {
        locationId: {
          equals: locationId,
        },
      },
    });
    return songLeads;
  } catch (error) {
    console.error(error);
  }

  return null;
}
