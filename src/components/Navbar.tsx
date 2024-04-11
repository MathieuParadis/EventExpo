'use client'

// NEXT IMPORTS
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = (): JSX.Element => {
  const pathname = usePathname()

  return (
    <nav className="flex justify-between items-center w-full p-4 md:px-10 lg:px-20 bg-black text-white">
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
      <ul className="flex gap-6">
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
    </nav>
  )
}

export default Navbar
