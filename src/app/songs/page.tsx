import { fetcher } from '@/lib/fetch';
import { Paged } from '@/models/paged';
import { Song } from '@/models/song';
import { DataTable } from '../../components/ui/data-table';
import { columns } from './components/columns';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

async function getSongs(pageNumber: number, query?: string): Promise<Paged<Song>> {
  const noRes = {
    pagination: {
      currentPage: 1,
      hasNext: false,
      hasPrevious: false,
      pageSize: 10,
      totalCount: 0,
      totalPages: 0
    },
    data: []
  } as unknown as Paged<Song>;

  try {
    const res = await fetcher('/api/songs?' + new URLSearchParams({
      pageNumber: pageNumber.toString(),
      pageSize: '10',
      ...(query && { query: query })
    }), {
      method: 'get'
    });
    if (!res.ok) return noRes;
    return await res.json();
  } catch (error) {
    console.error(error)
  }

  return noRes
}

export default async function SongsPage({
  searchParams: { page = '1', query = '' }
}: {
  searchParams: {
    page?: string,
    query?: string
  }
}) {
  let pageNumber = 1;

  try {
    pageNumber = parseInt(page);
    if (pageNumber < 1) pageNumber = 1;
  } catch (e) {
    pageNumber = 1;
  }

  const { data, pagination } = await getSongs(pageNumber, query);

  return (
    <div className=''>
      <div className=''>
        <p className='font-heading scroll-m-20 font-semibold tracking-tight first:mt-0'>Songs</p>
        <p className='text-muted-foreground text-sm mb-4'>
          These are the songs sorted by name
        </p>
      </div>

      <Link href='/songs/add'>
        <Button>
          Add Song
        </Button>
      </Link>

      <DataTable
        columns={columns}
        pagination={pagination}
        data={data} />
    </div>
  )
}