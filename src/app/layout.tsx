import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/ui/header'
import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const roboto_mono = Roboto_Mono({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-roboto-mono'
})

export const metadata: Metadata = {
  title: 'AAO Music Team - Lyrics Database',
  description: 'AAO Church Music/Lyrics Database',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className + ` min-h-screen bg-background font-sans antialiased ` + roboto_mono.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <div className='relative flex min-h-screen flex-col'>
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
