import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/ui/header'
import { Toaster } from "@/components/ui/sonner"
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import './globals.css'

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
      <body className={GeistSans.className + ` min-h-screen bg-background antialiased ` + GeistMono.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <div className='relative flex min-h-screen flex-col'>
            <Header />
            {children}
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
