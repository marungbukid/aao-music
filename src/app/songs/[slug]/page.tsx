import { fetcher } from '@/lib/fetch';
import { Song } from '@/models/song';
import { redirect } from 'next/navigation';
import ChordSheetRenderer from '../../../components/chordsheet-renderer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

async function getSong(id: string): Promise<Song | null> {
  try {
    const res = await fetcher('/api/songs/' + id, {
      method: 'get'
    })
    return await res.json();
  } catch (error) {
    console.log(error)
  }

  return null;
}


export default async function SongPage({
  params
}: {
  params: {
    slug: string
  }
}) {

  const song = await getSong(params.slug);
  if (!song) redirect('/songs');

  return (
    <div className='flex flex-col items-start space-y-4'>
      <div className=''>
        <p className='font-heading scroll-m-20 font-semibold tracking-tight first:mt-0'>{song.name}</p>
        <p className='text-muted-foreground text-sm mb-4'>
          {song.author}
        </p>
      </div>
      <Link href={`/songs/${params.slug}/edit`}>
        <Button>Edit</Button>
      </Link>

      <ChordSheetRenderer song={song} />
    </div>

  );
}