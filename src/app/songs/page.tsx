import { Button } from '@/components/ui/button';
import { getSongs } from '@/lib/actions/song.actions';
import Link from 'next/link';
import { DataTable } from '../../components/ui/data-table';
import { columns } from './components/columns';

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

  const { data, pagination } = await getSongs({
    pagination: {
      pageNumber: pageNumber,
      pageSize: 10,
      query: query
    }
  });

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