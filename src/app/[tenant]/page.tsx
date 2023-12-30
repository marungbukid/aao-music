import { TenantType } from '@/models/tenant-type';
import { redirect } from 'next/navigation';

function isValidTenant(tenant: string): tenant is TenantType {
  switch (tenant) {
    case '1':
    case '2':
    case '3':
      return true;
    default: return false;
  }

}

export default function TenantPage({
  params: { tenant }
}: { params: { tenant: TenantType } }) {
  if (!isValidTenant(tenant)) {
    redirect('/')
  }

  redirect(tenant + '/schedules');
}