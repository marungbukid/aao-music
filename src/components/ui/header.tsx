import Link from 'next/link';
import { Button } from './button';
import { ThemeModeToggle } from './theme-toggle';
import Cross from './cross';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 max-w-screen-2xl items-center'>
        <div className='inline-flex gap-6 items-center h-full'>
          <div className='inline-flex items-center justify-center whitespace-nowrap'>
            <Cross className='h-6 w-6' />
            <span className='font-bold'>aao</span>
          </div>

          <Link href='/songs'>
            <Button className='min-w-0 h-auto min-h-0 px-0 py-0 text-sm font-semibold' variant='link'>
              Songs
            </Button>
          </Link>


          <Link href='/schedules'>
            <Button className='min-w-0 h-auto min-h-0 px-0 py-0 text-sm font-semibold' variant='link'>
              Schedules
            </Button>
          </Link>
        </div>

        <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
          <div className='w-full flex-1 md:w-auto md:flex-none'></div>
          <div className='flex items-center'>
            <ThemeModeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}