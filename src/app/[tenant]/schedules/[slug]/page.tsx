import { getScheduleById } from '@/lib/actions/schedule.actions';
import { redirect } from 'next/navigation';
import ScheduleSongsView from './schedule-songs-view';

export default async function ScheduleViewPage({
  params: { slug }
}: {
  params: {
    slug: string
  }
}) {
  const res = await getScheduleById(parseInt(slug));
  if (!res) redirect('schedules')

  return (
    <div>
      <ScheduleSongsView songs={res.scheduleSongs.toSorted((a, b) => a.order - b.order).map(s => s.song)} />
    </div>
  )
}