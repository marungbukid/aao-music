'use client'

import ChordSheetRenderer from '@/components/chordsheet-renderer';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Song } from '@/models/song';

export default function ScheduleSongsView({
  songs
}: { songs: Song[] }) {
  console.log(songs)
  return (
    <Tabs defaultValue={songs[0].name} defaultChecked={true} className=''>
      <div className='overflow-hidden whitespace-nowrap w-screen h-auto !sticky top-14 z-40 -mt-10 -ml-8 left-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <ScrollArea className='w-full'>
          <div className='flex items-center pt-2'>
            <TabsList variant='outline' className='font-medium w-full' >
              {songs.map(song => (
                <TabsTrigger value={song.name} variant='outline' key={song.name}>
                  <span className='py-2'>{song.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>


      {songs.map(song => (
        <TabsContent value={song.name} key={song.name}>
          <div className='mt-10'>
            <ChordSheetRenderer song={song} />
          </div>

        </TabsContent>
      ))}
    </Tabs>
  )
}