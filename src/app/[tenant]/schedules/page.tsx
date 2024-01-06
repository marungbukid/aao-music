import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { getScheduleByPage } from '@/lib/actions/schedule.actions';
import { Paged } from '@/models/paged';
import { Schedule } from '@/models/schedule';
import { TenantType } from '@/models/tenant-type';
import Link from 'next/link';
import { columns } from './columns';

export default async function SchedulesPage({
  searchParams: { page = '1', query = '' },
  params: { tenant }
}: {
  searchParams: {
    page?: string,
    query?: string
  },
  params: {
    tenant: TenantType
  }
}) {
  let pageNumber = 1;

  try {
    pageNumber = parseInt(page);
    if (pageNumber < 1) pageNumber = 1;
  } catch (e) {
    pageNumber = 1;
  }

  const { data, pagination } = await getScheduleByPage({
    locationId: parseInt(tenant),
    pagination: {
      pageNumber: pageNumber,
      pageSize: 10,
      query: query
    }
  });

  return (
    <div>
      <div className=''>
        <p className='font-heading scroll-m-20 font-semibold tracking-tight first:mt-0'>Schedules</p>
        <p className='text-muted-foreground text-sm mb-4'>
          These are the set of songs by schedule
        </p>
      </div>

      <div className='inline-flex gap-2'>
        <Link href={'schedules/add'}>
          <Button>
            Add Schedule
          </Button>
        </Link>
      </div>

      <DataTable
        columns={columns}
        pagination={pagination}
        data={data} />
    </div>
  )
}