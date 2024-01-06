'use client'

import ChordSheetRenderer from '@/components/chordsheet-renderer';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Song } from '@/models/song';

export default function ScheduleSongsView({
  songs
}: { songs: Song[] }) {
  return (
    <Carousel className='-mx-4 min-h-screen'>
      <CarouselContent>
        {songs.map(song => (
          <CarouselItem key={song.id}>
            <div>
              <div className='px-4'>
                <p className='font-heading text-xl scroll-m-20 font-semibold tracking-tight first:mt-0'>{song.name}</p>
                <p className='text-muted-foreground text-lg mb-4'>
                  {song.author}
                </p>
              </div>
              <div className=''>
                <ChordSheetRenderer song={song} />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>

  )
}