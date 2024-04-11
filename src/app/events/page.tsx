// DB IMPORTS
import { fetchEvents } from '@/db/queries/events'

// COMPONENTS IMPORTS
import EventCard from '@/components/EventCard'

export default async function EventsPage() {
  const events = await fetchEvents()

  return (
    <main className="bg-white grow p-4 md:px-10 lg:px-20">
      <div className="grid grid-cols-4 gap-10">
        {events != null && events.map((event) => (
          <EventCard event={event} />
        ))}
      </div>
    </main>
  )
}
