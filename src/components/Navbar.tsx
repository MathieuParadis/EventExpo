// NEXT IMPORTS
import Link from 'next/link'

const Navbar = (): JSX.Element => {
  return (
    <nav className="flex justify-between w-full bg-red-400 p-6 md:px-10 lg:px-20">
      <div>Logo here</div>
      <ul className="flex gap-3">
        <li><Link href="/events">Events</Link></li>
        <li><Link href="/admin/events">Dashboard</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
