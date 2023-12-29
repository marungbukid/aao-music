import { fetcher } from '@/lib/fetch';
import { Schedule } from '@/models/schedule';
import { redirect } from 'next/navigation';
import ScheduleSongsView from './components/schedule-songs-view';

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

export default async function ScheduleViewPage({
  params: { slug }
}: {
  params: {
    slug: string
  }
}) {
  const res = await getScheduleDetails(slug);
  if (!res) redirect('/schedules')

  return (
    <div>
      <ScheduleSongsView songs={res.scheduleSongs.map(s => s.song)} />
    </div>
  )
}