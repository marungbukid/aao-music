'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { chordSheetParserFactory, possibleNotes } from '@/lib/utils'
import { Song } from '@/models/song'
import ChordSheetJS from 'chordsheetjs'
import { useState } from 'react'

export default function ChordSheetRenderer({
  song
}: { song: Song }) {
  const parser = chordSheetParserFactory(song.chordSheetType);

  const [currentKey, setCurrentKey] = useState<string>(song.key);
  const [parsedSong, setParsedSong] = useState(parser.parse(song.lyric).setKey(song.key))

  function renderChordSheet() {
    const formatter = new ChordSheetJS.HtmlDivFormatter();
    console.log(parsedSong.currentKey)
    return <div dangerouslySetInnerHTML={{ __html: formatter.format(parsedSong) }}></div>;
  }

  return (
    <div className=''>
      <div className='flex flex-row items-center gap-2'>
        <span className='text-xs whitespace-nowrap'>Change Key:</span>
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

      {renderChordSheet()}
    </div>
  )
}