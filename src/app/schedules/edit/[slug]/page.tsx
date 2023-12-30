import { fetcher } from '@/lib/fetch';
import { Schedule } from '@/models/schedule';
import EditScheduleForm from './components/edit-schedule-form';
import { redirect } from 'next/navigation';

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
  params: { slug }
}: {
  params: {
    slug: string
  }
}) {
  const schedule = await getScheduleDetails(slug);
  if (!schedule) redirect('/schedules')

  return (
    <div>
      <EditScheduleForm schedule={schedule} />
    </div>
  )
}