import { AddSongForm } from './components/add-song-form';

export default function AddSongPage() {
  return (
    <div className='max-w-lg mx-auto'>
      <div className=''>
        <p className='font-heading scroll-m-20 font-semibold tracking-tight first:mt-0'>Add Song</p>
        <p className='text-muted-foreground text-sm mb-4'>
          Please fill up the required fields
        </p>
      </div>

      <AddSongForm />
    </div>
  );
}