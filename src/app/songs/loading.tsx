import { Skeleton } from '@/components/ui/skeleton';

export default function LoadingPage() {
  return (
    <div className='flex flex-col p-4 items-start justify-start gap-4'>
      <Skeleton className='w-64 h-4' />
      <Skeleton className='w-64 h-4' />
      <Skeleton className='w-48 h-4' />
    </div>
  )
}