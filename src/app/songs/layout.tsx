export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex-1'>
      <div className='border-b'>
        <div className='container flex-1 items-start lg:gap-10'>
          <main className='relative py-6 lg:gap-10 lg:py-8'>
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}