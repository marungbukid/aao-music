import { getScheduleById } from '@/lib/actions/schedule.actions';
import { redirect } from 'next/navigation';
import ScheduleSongsView from './schedule-songs-view';
import { unstable_noStore } from 'next/cache';

export default async function ScheduleViewPage({
    params: {
        slug
    }
}: { params: { slug: string } }) {
    unstable_noStore();

    const res = await getScheduleById(parseInt(slug));
    if (!res) redirect('schedules')

    return (
        <div>
            <ScheduleSongsView scheduleSongs={res.scheduleSongs.toSorted((a, b) => a.order - b.order)} />
        </div>
    )
}