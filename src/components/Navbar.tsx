// NEXT IMPORTS
import Image from "next/image"
import Link from 'next/link'

const Navbar = (): JSX.Element => {
  return (
    <nav className="flex justify-between items-center w-full p-4 md:px-10 lg:px-20">
      <div className="flex items-end">
      <Image
        src="/logo.svg"
        alt="Vercel Logo"
        className="pr-2"
        width={60}
        height={60}
        priority
      />
      <p className="font-bold text-4xl">Event'EXPO</p>
      </div>
      <ul className="flex gap-6">
        <li><Link href="/events">Events</Link></li>
        <li><Link href="/admin/events">Dashboard</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
