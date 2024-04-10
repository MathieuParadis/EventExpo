// NEXT IMPORTS
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// COMPONENTS IMPORTS
import Navbar from '@/components/Navbar'

// STYLES IMPORTS
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Event\'Expo: Your Gateway to Exciting Gatherings',
  description: 'Discover captivating events hosted by Event\'Expo. Explore our platform to find exciting gatherings, backed by public interest metrics, ensuring each event is a hit.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen w-full">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
