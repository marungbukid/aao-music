import { fetcher } from '@/lib/fetch';
import { SongLead } from '@/lib/generated/client';
import { TenantType } from '@/models/tenant-type';
import AddSongLeadForm from './components/add-song-lead-form';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
async function getSongLeads(tenant: TenantType): Promise<SongLead[] | null> {
  try {
    const res = await fetcher('/api/song-leads?' + new URLSearchParams({
      location: tenant
    }))
    return await res.json();
  } catch (error) {
    console.error(error)
  }

  return null;
}

export default async function SongLeadsPage({
  params: { tenant }
}: {
  params: {
    tenant: TenantType
  }
}) {
  const songLeads = await getSongLeads(tenant);



  return (
    <div>
      <AddSongLeadForm locationId={tenant} />

      <Separator className='my-4' />

      <div className='p-4'>
        {songLeads && songLeads?.length > 0 ? (
          songLeads?.map(leads => (
            <Card key={leads.id}>
              <CardHeader>
                <CardTitle>{leads.firstName} {leads.lastName}</CardTitle>
              </CardHeader>
            </Card>
          ))

        ) : (
          <Card>
            <CardHeader />
            <CardContent>
              <p className='text-center'>No Records Found</p>
            </CardContent>
            <CardFooter />
          </Card>
        )}
      </div>

    </div>
  )
}