'use server';

import { Paged } from '@/models/paged';
import { fetcher } from '../fetch';
import { Song } from '@/models/song';
import { revalidatePath } from 'next/cache';
import { method } from 'lodash';
import { SongLead } from '../generated/client';

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

export async function editSong(
  id: number,
  params: {
    name: string;
    author: string;
    key: string;
    chordSheetType: string;
    lyric: string;
  }
) {
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

export async function addSchedule(
  locationId: string,
  params: {
    date: Date;
    songs: {
      id: number;
      order: number;
    }[];
    songLeadId: number;
  }
) {
  try {
    await fetcher('/api/schedules?' + new URLSearchParams({ locationId }), {
      body: JSON.stringify(params),
      method: 'post',
    });
  } catch (error) {
    console.error(error);
  }
}

export async function deleteScheduleById(id: number) {
  try {
    await fetcher(`/api/schedules/${id}`, { method: 'delete' });
  } catch (error) {
    console.error(error);
  }
}

export async function updateScheduleById(
  id: number,
  locationId: string,
  params: {
    date: Date;
    songs: {
      id: number;
      order: number;
    }[];
    songLeadId: number;
  }
) {
  try {
    await fetcher(
      `/api/schedules/${id}?` + new URLSearchParams({ locationId }),
      {
        body: JSON.stringify(params),
        method: 'put',
      }
    );
  } catch (error) {
    console.error(error);
  }
}

export async function addSongLead(
  locationId: string,
  params: {
    firstName: string;
    lastName: string;
  }
) {
  try {
    await fetcher(
      '/api/song-leads?' +
        new URLSearchParams({
          locationId,
        }),
      {
        body: JSON.stringify(params),
        method: 'post',
      }
    );
  } catch (error) {
    console.error(error);
  }
}

export async function getSongLeads(
  locationId: string
): Promise<SongLead[] | null> {
  try {
    const res = await fetcher(
      '/api/song-leads?' + new URLSearchParams({ locationId })
    );
    return await res.json();
  } catch (error) {
    console.error(error);
  }

  return null;
}
