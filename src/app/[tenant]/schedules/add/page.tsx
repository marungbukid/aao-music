
import { getSongLeads } from '@/lib/actions/song-lead.actions';
import AddScheduleForm from './components/add-schedule-form';
import { TenantType } from '@/models/tenant-type';

export default async function AddSchedulePage({
  params: { tenant }
}: { params: { tenant: TenantType } }) {
  const songLeads = await getSongLeads(parseInt(tenant));

  return (
    <div>
      <div className=''>
        <p className='font-heading scroll-m-20 font-semibold tracking-tight first:mt-0'>Add Schedule</p>
        <p className='text-muted-foreground text-sm mb-4'>
          Please fill up the required fields
        </p>
      </div>

      <AddScheduleForm
        tenant={tenant}
        songLeads={songLeads ?? []} />
    </div>
  )
}