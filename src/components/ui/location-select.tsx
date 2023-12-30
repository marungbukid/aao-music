'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function LocationSelect() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Location" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">
          <Link href={pathname + '?' + searchParams + '&' + new URLSearchParams({
            location: '1'
          })}>
            Taytay
          </Link>
        </SelectItem>
        <SelectItem value="2">Binangonan</SelectItem>
        <SelectItem value="3">Bulacan</SelectItem>
      </SelectContent>
    </Select>
  )
}