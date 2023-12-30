import { fetcher } from '@/lib/fetch';
import { Schedule } from '@/models/schedule';
import EditScheduleForm from './components/edit-schedule-form';
import { redirect } from 'next/navigation';
import { getSongLeads } from '@/lib/actions/actions';
import { TenantType } from '@/models/tenant-type';

async function getScheduleDetails(id: string): Promise<Schedule | null> {
  try {
    const res = await fetcher('/api/schedules/' + id, {
      method: 'get'
    })
    return await res.json();
  } catch (error) {
    console.error(error)
  }

  return null;
}

export default async function EditSchedulePage({
  params: { slug, tenant }
}: {
  params: {
    slug: string;
    tenant: TenantType
  }
}) {
  const schedule = await getScheduleDetails(slug);
  if (!schedule) redirect('/schedules')

  console.log(schedule)

  const songLeads = await getSongLeads(tenant)

  return (
    <div>
      <EditScheduleForm
        tenant={tenant}
        schedule={schedule} songLeads={songLeads ?? []} />
    </div>
  )
}