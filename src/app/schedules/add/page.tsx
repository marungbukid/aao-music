import AddScheduleForm from './components/add-schedule-form';

export default function AddSchedulePage() {
  return (
    <div>
      <div className=''>
        <p className='font-heading scroll-m-20 font-semibold tracking-tight first:mt-0'>Add Schedule</p>
        <p className='text-muted-foreground text-sm mb-4'>
          Please fill up the required fields
        </p>
      </div>

      <AddScheduleForm />
    </div>
  )
}