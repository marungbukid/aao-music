'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { Cross2Icon } from '@radix-ui/react-icons'
import { format, startOfDay } from 'date-fns'
import { CalendarIcon, Loader2, MusicIcon, SaveIcon } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import SearchSongCommand from './search-song-command'
import { addSchedule, revalidate } from '@/lib/actions/song.actions'
import { useRouter } from 'next/navigation'
import { DragDropContext, Draggable, DropResult } from 'react-beautiful-dnd'
import { DroppableSong } from '@/components/ui/droppable-song'
import { Song } from '@/models/song'
import { SongLead } from '@/lib/generated/client'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { TenantType } from '@/models/tenant-type'

const formSchema = z.object({
  date: z.date(),
  songs: z.array(z.object({
    id: z.number(),
    name: z.string(),
    author: z.string(),
    order: z.number()
  })),
  songLeadId: z.coerce.number()
})

export default function AddScheduleForm({
  songLeads,
  tenant
}: {
  songLeads: SongLead[],
  tenant: TenantType
}) {
  const router = useRouter();
  const [popoversState, setPopoverState] = useState<{
    calendarOpen: boolean,
    songsCommandOpen: boolean,
  }>({
    calendarOpen: false,
    songsCommandOpen: false,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: new Date(),
    }
  })


  function reorder(songList: Song[], startIndex: number, endIndex: number) {
    const result = Array.from(songList);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };


  function onDragEnd(result: DropResult) {
    if (!result.destination) {
      return;
    }

    const orderedSongs = reorder(
      form.getValues('songs') as unknown as Song[],
      result.source.index,
      result.destination.index
    );

    form.setValue('songs', orderedSongs.map((os, idx) => ({
      id: os.id,
      name: os.name,
      author: os.author,
      order: idx
    })));
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await addSchedule(tenant, {
        date: values.date,
        songs: values.songs.map(s => ({
          id: s.id,
          order: s.order
        })),
        songLeadId: values.songLeadId
      })
      await revalidate('/' + tenant + '/schedules');
      router.replace('/' + tenant + '/schedules');
    } catch (error) {
      console.error(error)
    }
  }

  const { isSubmitting } = form.formState;

  return (
    <Form {...form}>
      <form className='space-y-4'
        onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='date'
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              <FormLabel>Date *</FormLabel>
              <Popover open={popoversState.calendarOpen} onOpenChange={e => setPopoverState(v => ({ ...v, calendarOpen: e }))}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button variant='outline'
                      disabled={isSubmitting}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}>
                      {field.value ? (
                        format(field.value, 'PPP')
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0' align='start'>
                  <Calendar
                    mode='single'
                    className='rounded shadow border bg-background'
                    selected={field.value}
                    onSelect={e => {
                      setPopoverState(v => ({ ...v, calendarOpen: false }));
                      field.onChange(e);
                    }}
                    disabled={(date) => date < startOfDay(new Date())}
                    initialFocus />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Date of appointment
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='songs'
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              <FormLabel>Songs *</FormLabel>
              <Popover
                open={popoversState.songsCommandOpen}
                onOpenChange={e => setPopoverState(v => ({ ...v, songsCommandOpen: e }))}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button variant='outline'
                      role='combobox'
                      disabled={isSubmitting}
                      className={cn(
                        "w-full pl-3 text-left font-normal h-auto",
                        !field.value && "text-muted-foreground"
                      )}>

                      <span>Select songs</span>

                      <MusicIcon className='ml-auto h-4 w-4 opacity-50' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className='w-[300px] p-0' align='start'>
                  <SearchSongCommand
                    onSelect={e => {
                      setPopoverState(v => ({ ...v, songsCommandOpen: false }))
                      form.setValue('songs', [...(field.value ? field.value : []), ({...e, order: (field.value?.length ?? 0) + 1})])
                    }} />
                </PopoverContent>
              </Popover>
              <div className='flex flex-wrap gap-2'>
                <DragDropContext onDragEnd={onDragEnd}>
                  <DroppableSong droppableId='songs-list'>
                    {(provided) => (
                      <div
                        className="flex flex-col gap-2"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        {(field.value && field.value.length > 0) && (
                          field.value.map((value, index) => (
                            <Draggable key={index} draggableId={index.toString()} index={index}>
                              {(dragProvided) => (
                                <div
                                  className="border rounded-md px-4 py-2 inline-flex items-center justify-between"
                                  ref={dragProvided.innerRef}
                                  {...dragProvided.dragHandleProps}
                                  {...dragProvided.draggableProps}
                                >
                                  {value.name}
                                  <Cross2Icon className='h-4 w-4 ms-2' onClick={() => {
                                    form.setValue('songs', field.value.filter(song => song.id !== value.id))
                                  }} />
                                </div>
                              )}
                            </Draggable>
                          )))}

                        {provided.placeholder}
                      </div>
                    )}
                  </DroppableSong>
                </DragDropContext>
              </div>

              <FormMessage />
            </FormItem>
          )}
        />


        <FormField
          control={form.control}
          name='songLeadId'
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              <FormLabel>Song Lead *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value?.toString()}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select song lead" className='capitalize'/>
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {songLeads.map(s => (
                    <SelectItem key={s.id} value={s.id.toString()}>
                      <span className='capitalize'>{s.firstName.toLowerCase()} {s.lastName.toLowerCase()}</span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />


        <div className='flex flex-row justify-end'>
          <Button type='submit'>
            {isSubmitting ? <Loader2 className='h-4 w-4 me-2 animate-spin' /> : <SaveIcon className='h-4 w-4 me-2' />}
            Save
          </Button>
        </div>
      </form>
    </Form>
  )
}