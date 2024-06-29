import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/ui/header'
import { Toaster } from "@/components/ui/sonner"
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://music.aaoministry.com'),
  title: 'AAO Music Team - Lyrics Database',
  manifest: '/manifest.json',
  description: 'AAO Church Music/Lyrics Database',
  applicationName: 'AAO Music',
  appleWebApp: {
    title: 'Apollo',
    statusBarStyle: 'black',
    startupImage: [
      '/icon-512x512.png',
      {
        url: '/icon-512x512.png',
        media: '(device-width: 768px) and (device-height: 1024px)',
      },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#0a0a0a" }
  ],
  userScalable: false
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
