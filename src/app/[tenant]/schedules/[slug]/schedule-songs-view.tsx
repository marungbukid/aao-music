'use client'

import ChordSheetRenderer from '@/components/chordsheet-renderer';
import {Carousel, CarouselContent, CarouselItem} from '@/components/ui/carousel';
import {ScheduleSong} from "@/models/schedule-song";
import {updateScheduleSongPreferredKey} from "@/lib/actions/schedule-song.actions";

export default function ScheduleSongsView({scheduleSongs}: { scheduleSongs: ScheduleSong[] }) {

    async function updatePreferredKey(scheduleSongId: number, preferredKey: string) {
        try {
            console.log('updating preferred key');
            await updateScheduleSongPreferredKey(scheduleSongId, preferredKey)
        } catch (error) {
            console.error(error)
        }
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
                                <ChordSheetRenderer song={item.song} preferredKey={item.preferredKey ?? item.song.key}
                                                    onPreferredKeyChanged={(async function (key: string) {
                                                        console.log('Preferred key changed: ', key);
                                                        await updatePreferredKey(item.id, key);
                                                    })}/>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>

    )
}