import { cn } from '@/lib/utils';

export default function Cross({
  className,
  ...props
}: React.HTMLAttributes<SVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={cn('h-6 w-6', className)}
      {...props}>
      <path style={{ stroke: 'hsl(var(--primary))' }} strokeWidth="1.5" d="M7 9.25h10"></path>
      <path style={{ stroke: 'hsl(var(--primary))' }} strokeWidth="1.5" d="M12 4v15"></path>
    </svg>
  )
}