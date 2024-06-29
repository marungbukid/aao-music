'use client'

import ChordSheetRenderer from '@/components/chordsheet-renderer';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { ScheduleSong } from "@/models/schedule-song";

export default function ScheduleSongsView({ scheduleSongs }: { scheduleSongs: ScheduleSong[] }) {


  const updatePreferredKey = (scheduleSongId: number, preferredKey: string) => {
    localStorage.setItem(`prefKey_${scheduleSongId}`, preferredKey);
  };

  const getPreferredKey = (id: number) => {
    if (typeof window !== 'undefined') {
      return  window?.localStorage?.getItem(`prefKey_${id}`);
    }

    return null;
  }

  return (
    <Carousel className='-mx-4 min-h-screen'>
      <CarouselContent>
        {scheduleSongs.map(item => (
          <CarouselItem key={item.song.id}>
            <div>
              <div className='px-4'>
                <p className='font-heading text-xl scroll-m-20 font-semibold tracking-tight first:mt-0'>{item.song.name}</p>
                <p className='text-muted-foreground text-lg'>
                  {item.song.author}
                </p>
                <p className='mb-4 text-sm text-muted-foreground'>Orig Key: {item.song.key}</p>
              </div>
              <div className=''>
                <ChordSheetRenderer song={item.song} preferredKey={getPreferredKey(item.id) ?? item.song.key}
                  onPreferredKeyChanged={(async function (key: string) {
                    console.log('Preferred key changed: ', key);
                    // await updatePreferredKey(item.id, key);
                    updatePreferredKey(item.id, key);
                  })} />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>

  )
}