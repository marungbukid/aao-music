'use client'

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select'
import {chordSheetParserFactory, possibleNotes} from '@/lib/utils'
import {Song} from '@/models/song'
import {MinusIcon, PlusIcon} from '@radix-ui/react-icons'
import ChordSheetJS from 'chordsheetjs'
import {useEffect, useState} from 'react'
import {Button} from './ui/button'
import {ScrollArea, ScrollBar} from './ui/scroll-area'
import {z} from "zod";
import {updateScheduleById} from "@/lib/actions/schedule.actions";
import {revalidate} from "@/lib/actions/song.actions";

type ChordSheetRendererProps = {
    song: Song;
    preferredKey: string;
    onPreferredKeyChanged?(preferredKey: string): Promise<void>;
}

export default function ChordSheetRenderer(
    {song, preferredKey, onPreferredKeyChanged}: ChordSheetRendererProps) {
    const parser = chordSheetParserFactory(song.chordSheetType);

    const [fontSize, setFontSize] = useState(1.0)
    const [currentKey, setCurrentKey] = useState<string>(preferredKey);
    const [parsedSong, setParsedSong] = useState(parser.parse(song.lyric).setKey(preferredKey))

    function renderChordSheet() {
        const formatter = new ChordSheetJS.HtmlDivFormatter();
        return <div
            style={{fontSize: `${fontSize}em`}}
            dangerouslySetInnerHTML={{__html: formatter.format(parsedSong)}}></div>;
    }

    function adjustFontSize(to: number) {
        const newFontSize = fontSize + to;
        if (newFontSize < 1.0) return;
        if (newFontSize > 2.0) return;
        setFontSize(_ => newFontSize)
    }

    useEffect(() => {
        setParsedSong(_ => parsedSong.changeKey(preferredKey));
        console.log('changed key', parsedSong.key)

    }, [preferredKey]);

    return (
        <div className=''>
            <div className='flex flex-row items-center justify-start gap-4 mb-4'>
                <div className='inline-flex items-center gap-2'>
                    <span className='text-sm whitespace-nowrap'>Current Key:</span>
                    <Select onValueChange={e => {
                        setCurrentKey(e)
                        setParsedSong(_ => parsedSong.changeKey(e));
                        if (onPreferredKeyChanged) {
                            (async function() {
                                console.log('preferred key changed')
                                await onPreferredKeyChanged(e);
                            })();
                        }
                    }} defaultValue={currentKey}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a key"/>
                        </SelectTrigger>
                        <SelectContent>
                            {possibleNotes.map(note => (
                                <SelectItem key={note} value={note}>{note}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className='inline-flex items-center gap-2 text-sm'>
                    <Button variant="outline" size="icon" onClick={() => adjustFontSize(-0.1)}>
                        <MinusIcon className="h-4 w-4"/>
                    </Button>
                    Text Size
                    <Button variant="outline" size="icon" onClick={() => adjustFontSize(0.1)}>
                        <PlusIcon className="h-4 w-4"/>
                    </Button>
                </div>
            </div>

            <div className='border rounded-md p-2'>
                {renderChordSheet()}
            </div>

        </div>
    )
}