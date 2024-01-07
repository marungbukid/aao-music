'use client'

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { addSongLead } from '@/lib/actions/song-lead.actions';
import { revalidate } from '@/lib/actions/song.actions';
import { TenantType } from '@/models/tenant-type';
import { zodResolver } from '@hookform/resolvers/zod';
import { PlusIcon } from '@radix-ui/react-icons';
import { Loader2, Loader2Icon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod'

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string()
});

export default function AddSongLeadForm({ tenant }: { tenant: TenantType }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: ''
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await addSongLead(parseInt(tenant), {
        ...values
      });
      await revalidate(parseInt(tenant) + '/song-leads');
      toast(`${values.firstName.toUpperCase()} ${values.lastName.toUpperCase()} added to song leads!`)
    } catch (error) {
      toast('Failed to add song lead. Please try again later')
    }
  }

  const { isSubmitting } = form.formState;

  return (
    <Form {...form}>
      <form className='flex flex-col sm:flex-row gap-2 p-4'
        onSubmit={form.handleSubmit(onSubmit)}>

        <FormField
          control={form.control}
          name='firstName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name *</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  className='uppercase'
                  placeholder='Barbie'
                  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='lastName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name *</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  className='uppercase'
                  placeholder='Almabis'
                  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        <div className='self-end mt-4'>
          <Button type='submit'>
            {isSubmitting ? <Loader2 className='h-4 w-4 me-2' /> : <PlusIcon className='h-4 w-4 me-2' />}
            Add
          </Button>
        </div>
      </form>
    </Form>
  )
}