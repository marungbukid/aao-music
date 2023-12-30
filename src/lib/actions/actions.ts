'use server';

import { Paged } from '@/models/paged';
import { fetcher } from '../fetch';
import { Song } from '@/models/song';
import { revalidatePath } from 'next/cache';

export async function revalidate(path: string) {
  revalidatePath(path);
}

export async function getSongs(
  pageNumber: number,
  query?: string
): Promise<Paged<Song>> {
  const noRes = {
    pagination: {
      currentPage: 1,
      hasNext: false,
      hasPrevious: false,
      pageSize: 10,
      totalCount: 0,
      totalPages: 0,
    },
    data: [],
  } as unknown as Paged<Song>;

  try {
    console.log('getting songs');
    const res = await fetcher(
      '/api/songs?' +
        new URLSearchParams({
          pageNumber: pageNumber.toString(),
          pageSize: '10',
          ...(query && { query: query }),
        }),
      {
        method: 'get',
      }
    );
    if (!res.ok) return noRes;
    return await res.json();
  } catch (error) {
    console.error(error);
  }

  return noRes;
}

export async function addSong(params: {
  name: string;
  author: string;
  key: string;
  chordSheetType: string;
  lyric: string;
}) {
  try {
    const res = await fetcher('/api/songs', {
      body: JSON.stringify(params),
      method: 'post',
    });
  } catch (error) {
    console.error(error);
  }
}

export async function editSong(id: number, params: {
  name: string;
  author: string;
  key: string;
  chordSheetType: string;
  lyric: string;
}) {
  try {
    const res = await fetcher('/api/songs/' + id, {
      body: JSON.stringify(params),
      method: 'put',
    });
  } catch (error) {
    console.error(error);
  }
}

export async function deleteSong(id: number) {
  try {
    await fetcher('/api/songs/' + id, {
      method: 'delete',
    });
  } catch (error) {
    console.error(error);
  }
}

export async function addSchedule(params: {
  date: Date,
  songs: {
    id: number,
    order: number
  }[]
}) {
  try {
    await fetcher('/api/schedules', {
      body: JSON.stringify(params),
      method: 'post'
    })
  } catch (error) {
    console.error(error)
  }
}


export async function updateSchedule(id: number, params: {
  date: Date,
  songs: {
    id: number,
    order: number
  }[]
}) {
  try {
    await fetcher(`/api/schedules/${id}`, {
      body: JSON.stringify(params),
      method: 'put'
    })
  } catch (error) {
    console.error(error)
  }
}