// NEXT IMPORTS
import type { Metadata } from 'next'

// COMPONENTS IMPORTS
import Navbar from '@/components/Navbar'

// STORE PROVIDER IMPORT
import StoreProvider from '@/app/StoreProvider'

// STYLES IMPORTS
import './globals.css'

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
      <StoreProvider>
        <body className="h-screen w-screen overflow-hidden">
          <Navbar />
          <div className="h-[calc(100%-var(--navbar-height))] w-full overflow-auto z-0">
            {children}
          </div>
        </body>
      </StoreProvider>
    </html>
  )
}
