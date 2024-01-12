import { getScheduleById } from '@/lib/actions/schedule.actions';
import { getSongLeads } from '@/lib/actions/song-lead.actions';
import { Schedule } from '@/models/schedule';
import { TenantType } from '@/models/tenant-type';
import { redirect } from 'next/navigation';
import EditScheduleForm from './edit-schedule-form';
import { unstable_noStore } from 'next/cache';

async function getScheduleDetails(id: number): Promise<Schedule | null> {
  try {
    const res = await getScheduleById(id, false);
    return res;
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
  unstable_noStore();
  const schedule = await getScheduleDetails(parseInt(slug));
  if (!schedule) redirect('/schedules')

  const songLeads = await getSongLeads(parseInt(tenant))

  return (
    <div>
      <EditScheduleForm
        tenant={tenant}
        schedule={schedule} songLeads={songLeads ?? []} />
    </div>
  )
}