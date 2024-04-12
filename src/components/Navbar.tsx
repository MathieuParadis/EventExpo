'use client'

// REACT IMPORTS
import { useState } from 'react'

// NEXT IMPORTS
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// ICONS IMPORTS
import MenuIcon from '@mui/icons-material/Menu'

const Navbar = (): JSX.Element => {
  const pathname = usePathname()
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false)

  const toggleMobileMenu = (): void => {
    setDisplayMobileMenu(!displayMobileMenu)
  }

  return (
    <nav>
      {/* Navbar */}
      <div className="flex justify-between items-center h-[var(--navbar-height)] w-full p-4 md:px-10 lg:px-20 bg-black text-white">
        <div className="flex items-center cursor-default">
          <Image
            src="/logo.svg"
            alt="Vercel Logo"
            className="pr-2"
            width={45}
            height={45}
            priority
          />
          <p className="font-bold text-3xl">Event&#39;EXPO</p>
        </div>
        <ul className="hidden md:flex gap-6">
          <li className="hover:scale-110">
            <Link
              className={`font-bold text-xl ${pathname === '/events' ? 'text-[var(--primary-color)]' : ''}`}
              href="/events">Events
            </Link>
          </li>
          <li className="hover:scale-110">
            <Link
              className={`font-bold text-xl ${pathname === '/admin/events' ? 'text-[var(--primary-color)]' : ''}`}
              href="/admin/events">Dashboard
            </Link>
          </li>
        </ul>
        <MenuIcon className="md:hidden" onClick={toggleMobileMenu} />
      </div>

      {/* Mobile Navigation */}
      {displayMobileMenu && (
        <div className="flex flex-col md:hidden bg-white">
          <Link
            className={`text-xl p-4 ${pathname === '/events' ? 'bg-[var(--primary-color)] text-white' : ''}`}
            href="/events">Events
          </Link>
          <Link
            className={`text-xl p-4 w-full ${pathname === '/admin/events' ? 'bg-[var(--primary-color)] text-white' : ''}`}
            href="/admin/events">Dashboard
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
