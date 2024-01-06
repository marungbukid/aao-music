'use client'

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Skeleton } from '@/components/ui/skeleton';
import { getSongs } from '@/lib/actions/song.actions';
import { Song } from '@/models/song';
import { CommandLoading } from 'cmdk';
import { debounce } from 'lodash';
import React, { useCallback, useMemo, useState } from 'react';


type SearchPatientCommandProps = {
  onSelect(patient: any): void;
};

export default function SearchSongCommand({
  onSelect
}: SearchPatientCommandProps) {
  const [query, setQuery] = useState<string | null>();

  const [data, setData] = useState<Song[] | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  async function fetchSongs(query: string) {
    console.log('fetching')
    try {
      const res = await getSongs(1, query);
      setData([...res.data]);
    } catch (error) {
      console.error(error)
    }

    setLoading(false);
  }

  const updateSearchParams = useCallback((query: string) => {
    setLoading(true)
    setData(null)
    console.log('use callback')
    fetchSongs(query)
  }, []);

  const debouncedFetch = useMemo(() => debounce(updateSearchParams, 500), [updateSearchParams]);

  const handleQueryChange = (value: string) => {
    setQuery(value);
    console.log('handle query')
    debouncedFetch(value);
  };

  return (
    <Command className='bg-background rounded border max-h-[240px]'>
      <CommandInput placeholder='Search songs'
        value={query || ''}
        onValueChange={handleQueryChange} />

      {isLoading &&
        <CommandLoading>
          <div className='space-y-2 p-4'>
            <Skeleton className='w-full h-[20px] rounded' />
            <Skeleton className='w-[80%] h-[20px] rounded' />
            <Skeleton className='w-[70%] h-[20px] rounded' />
          </div>
        </CommandLoading>
      }

      <CommandEmpty>{!isLoading ? 'No song found' : ''}</CommandEmpty>

      {!isLoading && data && (
        <CommandGroup className='overflow-y-scroll'>
          {data.map(p => (
            <CommandItem
              key={p.id}
              value={p.id + ' ' + p.name + ' ' + p.author}
              onSelect={value => {
                const id = value.split(' ')[0];
                onSelect(data.find(p => p.id === parseInt(id)));
              }}>
              <div className='text-start justify-start'>
                <p className='font-semibold'>{p.name}</p>
                <span className='text-xs text-muted-foreground'>{p.author}</span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      )}
    </Command>
  );
}
