'use client'

import ChordSheetRenderer from '@/components/chordsheet-renderer';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Song } from '@/models/song';

export default function ScheduleSongsView({
  songs
}: { songs: Song[] }) {
  return (
    <Carousel>
      <CarouselContent>
        {songs.map(song => (
          <CarouselItem key={song.id}>
            <div>
              <div className=''>
                <p className='font-heading scroll-m-20 font-semibold tracking-tight first:mt-0'>{song.name}</p>
                <p className='text-muted-foreground text-sm mb-4'>
                  {song.author}
                </p>
              </div>
              <ChordSheetRenderer song={song} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>

  )
}