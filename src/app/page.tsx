import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { defaultLocations } from '@/lib/data/default-locations';
import { fetcher } from '@/lib/fetch';
import { Location } from '@/lib/generated/client';
import clsx from 'clsx';
import { Navigation2Icon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
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
    <div className='py-10'>


      <div className='w-[340px] sm:w-[450px] mx-auto'>
        <AspectRatio
          ratio={16 / 9}>
          <Image src='/aao-logo.png'
            className="rounded-md object-cover"
            alt='Assemblies of the Anointed One International'
            width={1111}
            height={447}
          />
        </AspectRatio>
      </div>

      <div className='w-full container'>

        <div className='grid grid-flow-row sm:grid-flow-col sm:grid-cols-3 gap-6 w-full'>
          {locations && locations.map(location => (
            <div key={location.address}
              className={
                clsx({
                  'rounded border shadow p-6 bg-cover bg-opacity-40 flex flex-col min-h-64': true,
                  'bg-[linear-gradient(to_bottom,rgba(255,255,255,0.75),rgba(255,255,255,1)),url("/images/team-taytay.jpg")] dark:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.75),rgba(0,0,0,1)),url("/images/team-taytay.jpg")]': location.id === 1
                })
              }>
              <h1 className='scroll-m-20 text-4xl font-bold tracking-tight mb-4'>{getLocationName(location)}</h1>
              <p className='mb-6'>{location.address}</p>

              <div className='inline-flex justify-end mt-auto'>
                <Link href={`https://www.google.com/maps/search/?api=1&query=${location.lat},${location.long}`}>
                  <Button variant='outline'>
                    <Navigation2Icon className='h-4 w-4 me-2' />
                    Go Now
                  </Button>
                </Link>
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  )
}
