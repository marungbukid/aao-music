import { Button } from '@/components/ui/button';
import { defaultLocations } from '@/lib/data/default-locations';
import { Location } from '@/lib/generated/client';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';
import Link from 'next/link';

export default function SelectLocationPage() {
  const locations = defaultLocations;

  function getLocationName(location: Location) {
    switch (location.id) {
      case 1: return 'Taytay';
      case 2: return 'Binangonan';
      case 3: return 'Bulacan';
    }
    return '';
  }

  return (
    <div className='w-full container py-10'>

      <div className='grid grid-flow-row sm:grid-flow-col sm:grid-cols-3 gap-6 w-full'>
        {locations && locations.map(location => (
          <Link href={location.id + '/schedules'}
            key={location.address}>
            <div
              className={
                clsx({
                  'rounded border shadow p-6 bg-cover bg-opacity-40 flex flex-col min-h-64': true,
                  'bg-[linear-gradient(to_bottom,rgba(255,255,255,0.75),rgba(255,255,255,1)),url("/images/team-taytay.jpg")] dark:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.75),rgba(0,0,0,1)),url("/images/team-taytay.jpg")]': location.id === 1
                })
              }>
              <h1 className='scroll-m-20 text-4xl font-bold tracking-tight mb-4'>{getLocationName(location)}</h1>
              <p className='mb-6'>{location.address}</p>

              <div className='inline-flex justify-end mt-auto'>
                <Button variant='link' size='icon'>
                  <ArrowRightIcon className='h-6 w-6' />
                </Button>
              </div>
            </div>
          </Link>
        ))}

      </div>
    </div>
  )
}