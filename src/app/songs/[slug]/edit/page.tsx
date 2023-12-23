import { Song } from '@/models/song';
import { EditSongForm } from './components/edit-song-form';
import { fetcher } from '@/lib/fetch';
import { redirect } from 'next/navigation';


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



export default async function EditSongPage({
  params
}: {
  params: {
    slug: string
  }
}) {

  const song = await getSong(params.slug);
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
        id={parseInt(params.slug)}
        song={song} />
    </div>
  );
}