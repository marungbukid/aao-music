'use server';

import prisma from "db";

export async function updateScheduleSongPreferredKey(
    id: number,
    preferredKey: string,
) {
    try {
        await prisma.scheduleSongs.update({
            where: {
                id: id,
            },
            data: {
                preferredKey: preferredKey
            },
        });
    } catch (error) {
        console.error(error);
    }
}
