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
import { CalendarIcon, MusicIcon } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import SearchSongCommand from './search-song-command'
import { addSchedule, revalidate } from '@/lib/actions/actions'
import { useRouter } from 'next/navigation'

const formSchema = z.object({
  date: z.date(),
  songs: z.array(z.object({
    id: z.number(),
    name: z.string(),
    author: z.string()
  }))
})

export default function AddScheduleForm() {
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
      date: new Date()
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await addSchedule({
        date: values.date,
        songIds: values.songs.map(s => s.id)
      }) 
      await revalidate('/schedules');
      router.replace('/schedules');
    } catch(error) {
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
                      <div className='flex flex-wrap gap-2'>
                        {(field.value && field.value.length > 0) ? (
                          field.value.map((value, index) => (
                            <Badge key={value.id + index}>{value.name} <Cross2Icon className='h-4 w-4 ms-2' onClick={() => {
                              form.setValue('songs', field.value.filter(song => song.id !== value.id))
                            }}/></Badge>
                          ))
                        ) : (
                          <span>Select songs</span>
                        )}
                      </div>

                      <MusicIcon className='ml-auto h-4 w-4 opacity-50' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className='w-[300px] p-0' align='start'>
                  <SearchSongCommand
                    onSelect={e => {
                      setPopoverState(v => ({ ...v, songsCommandOpen: false }))
                      form.setValue('songs', [...(field.value ? field.value : []), e])
                    }} />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='flex flex-row justify-end'>
          <Button type='submit'>
            Save
          </Button>
        </div>
      </form>
    </Form>
  )
}