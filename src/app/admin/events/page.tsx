// PRISMA IMPORTS
import type { Event } from '@prisma/client'

// DB IMPORTS
import { fetchEvents } from '@/db/queries/events'

// COMPONENTS IMPORTS
import EventCard from '@/components/EventCard'

export default async function AdminEventsPage() {
  const allEvents = await fetchEvents()

  return (
    <main className="bg-white grow p-4 md:px-10 lg:px-16">
      <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-[var(--secondary-color)] font-bold pb-4 sm:pb-6 md:pb-8 lg:pb-10'>All Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {allEvents != null && allEvents.map((event) => (
          <EventCard key={event.id} event={event} isAdmin={true} />
        ))}
      </div>
    </main>
  )
}
