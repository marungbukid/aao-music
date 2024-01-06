'use client'

import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Song } from '@/models/song'
import { DotsHorizontalIcon, Pencil1Icon } from '@radix-ui/react-icons';
import { ColumnDef } from "@tanstack/react-table"
import { DeleteIcon } from 'lucide-react';
import Link from 'next/link';
import { format } from 'date-fns'
import { deleteSong, revalidate } from '@/lib/actions/song.actions';
import { toast } from '@/components/ui/use-toast';


export const columns: ColumnDef<Song>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) =>
      <Link href={'/songs/' + row.original.id}>
        <Button className='p-0 min-h-0' variant='link'>{row.original.name}</Button>
      </Link>

  },
  {
    accessorKey: "author",
    header: "Author",
  },
  {
    accessorKey: "createdAt",
    header: "Date Added",
    cell: ({ row }) =>
      <span>{format(row.original.createdAt, 'LLL dd, yyyy')}</span>
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const song = row.original;

      async function onDeleteSong(song: Song) {
        try {
          await deleteSong(song.id)
          await revalidate('/songs');
          toast({
            title: 'Song removed',
            description: `${song.name} deleted`
          });
        } catch (error) {
          toast({
            title: 'Something went wrong',
            description: error?.toString(),
            variant: 'destructive'
          });
        }
      }

      return (
        <Dialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <DotsHorizontalIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <Link href={`/songs/${song.id}/edit`}>
                <DropdownMenuItem>
                  <Pencil1Icon className='h-4 w-4 me-2' /> Edit
                </DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <DialogTrigger asChild>
                <DropdownMenuItem className='text-destructive'>
                  <DeleteIcon className='h-4 w-4 me-2' /> Delete
                </DropdownMenuItem>
              </DialogTrigger>
            </DropdownMenuContent>
          </DropdownMenu>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant='ghost'>
                  Cancel
                </Button>
              </DialogClose>

              <DialogClose asChild>
                <Button type='button' variant='destructive' onClick={() => onDeleteSong(song)}>
                  Yes
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )
    }
  }
]