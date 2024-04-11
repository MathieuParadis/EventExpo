// PRISMA IMPORTS
import type { Event } from '@prisma/client'

// DB IMPORTS
import { fetchEvents } from '@/db/queries/events'

// COMPONENTS IMPORTS
import DeleteModal from '@/components/DeleteModal'
import EventCard from '@/components/EventCard'

export default async function AdminEventsPage() {
  const events = await fetchEvents()

  return (
    <main className="bg-white grow p-4 md:px-10 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {events != null && events.map((event) => (
          <EventCard key={event.id} event={event} isAdmin={true} />
        ))}
      </div>
      <DeleteModal />
    </main>
  )
}
