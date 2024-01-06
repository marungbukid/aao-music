import { Song } from '@/models/song';
import { EditSongForm } from './edit-song-form';
import { redirect } from 'next/navigation';
import { getSongById } from '@/lib/actions/song.actions';


export default async function EditSongPage({
  params: { slug }
}: {
  params: {
    slug?: string
  }
}) {
  if (!slug) redirect('/songs');

  const song = await getSongById(parseInt(slug));
  if (!song) redirect('/songs');


  return (
    <div className='max-w-lg mx-auto'>
      <div className=''>
        <p className='font-heading scroll-m-20 font-semibold tracking-tight first:mt-0'>Edit Song</p>
        <p className='text-muted-foreground text-sm mb-4'>
          Please fill up the required fields
        </p>
      </div>

      <EditSongForm
        id={parseInt(slug)}
        song={song} />
    </div>
  );
}