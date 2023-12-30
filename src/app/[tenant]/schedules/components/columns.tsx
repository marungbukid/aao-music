'use client'

import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { deleteScheduleById, revalidate } from '@/lib/actions/actions';
import { Schedule } from '@/models/schedule';
import { DotsHorizontalIcon, Pencil1Icon } from '@radix-ui/react-icons';
import { ColumnDef } from "@tanstack/react-table";
import { format } from 'date-fns';
import { DeleteIcon } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';


export const columns: ColumnDef<Schedule>[] = [
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) =>
      <Link href={'schedules/' + row.original.id}>
        <Button className='p-0 min-h-0' variant='link'>{format(row.original.date, 'LLL dd, yyyy')}</Button>
      </Link>

  },
  {
    accessorKey: "songLead",
    header: "Song Lead",
    cell: ({ row }) =>
      <span className='capitalize'>{row.original.songLead.firstName.toLowerCase()} {row.original.songLead.lastName.toLowerCase()}</span>

  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const schedule = row.original;

      async function deleteSchedule(schedule: Schedule) {
        try {
          await deleteScheduleById(schedule.id);
          await revalidate('/' + schedule.locationId + '/schedule');
          toast('Schedule deleted')
          // await deletePatientById(patient.id)
          // await revalidate('/home/patient');
          // toast({
          //   title: 'Patient removed',
          //   description: `${patient.givenName} ${patient.lastName} removed to your database.`
          // });
        } catch (error) {
          toast(error?.toString())
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
              <Link href={`schedules/edit/${schedule.id}`}>
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
                <Button type='button' variant='destructive' onClick={() => deleteSchedule(schedule)}>
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