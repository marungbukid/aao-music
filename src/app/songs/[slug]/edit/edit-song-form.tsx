'use client'

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { darcula } from '@uiw/codemirror-theme-darcula';
import { whiteLight } from '@uiw/codemirror-theme-white';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { addSong, editSong } from '@/lib/actions/song.actions';
import { possibleNotes } from '@/lib/utils';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import CodeMirror from '@uiw/react-codemirror';
import ChordSheetJS from 'chordsheetjs';
import { Loader2 } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import { Song } from '@/models/song';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string(),
  author: z.string(),
  key: z.string(),
  chordSheetType: z.string(),
  lyric: z.string()
})

export function EditSongForm({ 
  id,
  song
}: { id: number, song: Song }) {
  const { resolvedTheme } = useTheme();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: song.name,
      author: song.author,
      key: song.key,
      chordSheetType: song.chordSheetType,
      lyric: song.lyric
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await editSong(id, { ...values });
      router.replace('/songs');
      toast.success(`${song.name} updated`)
    } catch (error) {
      console.error(error)
    }
  }

  function chordSheetParserFactory() {
    switch (form.getValues('chordSheetType')) {
      case 'chordsOverWords': return new ChordSheetJS.ChordsOverWordsParser()
      case 'chordPro': return new ChordSheetJS.ChordProParser()
      case 'ultimateGuitar': return new ChordSheetJS.UltimateGuitarParser({ preserveWhitespace: true });
      default: return new ChordSheetJS.ChordProParser()
    }
  }

  function renderChordSheet(chordSheet: string) {
    const parser = chordSheetParserFactory();
    const song = parser.parse(chordSheet);
    const formatter = new ChordSheetJS.HtmlDivFormatter();
    return <div dangerouslySetInnerHTML={{ __html: formatter.format(song) }}></div>;
  }

  const { isSubmitting } = form.formState;

  return (
    <Form {...form}>

      <Dialog>
        <form
          className='space-y-4'
          onSubmit={form.handleSubmit(onSubmit)}>

          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Song Name / Title *</FormLabel>
                <FormControl>
                  <Input
                    type='text'
                    placeholder='One Way'
                    {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='author'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Author *</FormLabel>
                <FormControl>
                  <Input
                    className='capitalize'
                    type='text'
                    placeholder='Hillsong'
                    {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="chordSheetType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ChordSheet Type *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select ChordSheet Type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="chordsOverWords">Chords Over Words</SelectItem>
                    <SelectItem value="chordPro">Chord Pro</SelectItem>
                    <SelectItem value="ultimateGuitar">Ultimate Guitar</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Format of chord sheet
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="key"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Key *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a key" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {possibleNotes.map(note => (
                      <SelectItem key={note} value={note}>{note}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  Key of the song
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />


          <FormField
            control={form.control}
            name='lyric'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lyrics *</FormLabel>
                <FormControl>
                  <CodeMirror
                    height="500px"
                    className='border-input rounded-md'
                    theme={resolvedTheme === 'dark' ? darcula : whiteLight}
                    value={field.value}
                    basicSetup={{
                      lineNumbers: false,
                      foldGutter: false,
                      highlightActiveLine: false
                    }}
                    onChange={e => {
                      // const guessedKey = determineMusicKey(e)
                      // console.log(guessedKey)
                      field.onChange(e)
                    }}
                    extensions={[
                      markdown({
                        base: markdownLanguage
                      })
                    ]} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className='flex flex-row gap-2 justify-between'>
            <Button onClick={() => router.back()} variant='ghost' type='button'>
              Cancel
            </Button>
            <div className='flex flex-row gap-2'>
              <DialogTrigger asChild>
                <Button variant='secondary'>Preview</Button>
              </DialogTrigger>

              <Button type='submit'>
                {isSubmitting && <Loader2 className='h-4 w-4 me-2 animate-spin' />}
                Update
              </Button>
            </div>

          </div>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>{form.getValues('name') ? form.getValues('name') : 'No Title'}</DialogTitle>
              <DialogDescription>
                {form.getValues('author') ? form.getValues('author') : 'No Author'}
              </DialogDescription>
            </DialogHeader>

            <div>

            </div>

            <ScrollArea className='max-h-[540px]'>
              {form.getValues('lyric') ? (
                <div>{renderChordSheet(form.getValues('lyric'))}</div>
              ) : (
                <div>No lyrics</div>
              )}
              <ScrollBar orientation='vertical' />
            </ScrollArea>

          </DialogContent>
        </form>
      </Dialog>
    </Form >
  );
}