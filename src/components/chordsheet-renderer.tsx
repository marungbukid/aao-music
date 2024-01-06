'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { chordSheetParserFactory, possibleNotes } from '@/lib/utils'
import { Song } from '@/models/song'
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons'
import ChordSheetJS from 'chordsheetjs'
import { useState } from 'react'
import { Button } from './ui/button'
import { ScrollArea, ScrollBar } from './ui/scroll-area'

export default function ChordSheetRenderer({
  song
}: { song: Song }) {
  const parser = chordSheetParserFactory(song.chordSheetType);

  const [fontSize, setFontSize] = useState(1.0)
  const [currentKey, setCurrentKey] = useState<string>(song.key);
  const [parsedSong, setParsedSong] = useState(parser.parse(song.lyric).setKey(song.key))

  function renderChordSheet() {
    const formatter = new ChordSheetJS.HtmlDivFormatter();
    return <div
      style={{ fontSize: `${fontSize}em` }}
      dangerouslySetInnerHTML={{ __html: formatter.format(parsedSong) }}></div>;
  }

  function adjustFontSize(to: number) {
    const newFontSize = fontSize + to;
    if (newFontSize < 1.0) return;
    if (newFontSize > 2.0) return;
    setFontSize(_ => newFontSize)
  }

  return (
    <div className=''>
      <div className='flex flex-row items-center justify-start gap-4 mb-4'>
        <div className='inline-flex items-center gap-2'>
          <span className='text-sm whitespace-nowrap'>Change Key:</span>
          <Select onValueChange={e => {
            setCurrentKey(e)
            setParsedSong(_ => parsedSong.changeKey(e));
          }} defaultValue={currentKey}>
            <SelectTrigger>
              <SelectValue placeholder="Select a key" />
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
            <MinusIcon className="h-4 w-4" />
          </Button>
          Text Size
          <Button variant="outline" size="icon" onClick={() => adjustFontSize(0.1)}>
            <PlusIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <ScrollArea className='h-screen border rounded-md p-2'>
        {renderChordSheet()}
        <ScrollBar orientation='vertical' />
      </ScrollArea>

    </div>
  )
}