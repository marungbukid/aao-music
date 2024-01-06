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
import { getSongLeads } from '@/lib/actions/song-lead.actions';

export default async function SongLeadsPage({
  params: { tenant }
}: {
  params: {
    tenant: TenantType
  }
}) {
  const songLeads = await getSongLeads(parseInt(tenant));

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