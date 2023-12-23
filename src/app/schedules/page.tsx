import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { fetcher } from '@/lib/fetch';
import { Paged } from '@/models/paged';
import { Schedule } from '@/models/schedule';
import Link from 'next/link';
import { columns } from './components/columns';


async function getSchedules(pageNumber: number, query?: string): Promise<Paged<Schedule>> {
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
  } as unknown as Paged<Schedule>;

  try {
    const res = await fetcher('/api/schedules?' + new URLSearchParams({
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


export default async function SchedulesPage({
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

  const { data, pagination } = await getSchedules(pageNumber, query);

  return (
    <div>
      <div className=''>
        <p className='font-heading scroll-m-20 font-semibold tracking-tight first:mt-0'>Schedules</p>
        <p className='text-muted-foreground text-sm mb-4'>
          These are the set of songs by schedule
        </p>
      </div>

      <Link href='/schedules/add'>
        <Button>
          Add Schedule
        </Button>
      </Link>

      <DataTable
        columns={columns}
        pagination={pagination}
        data={data} />
    </div>
  )
}