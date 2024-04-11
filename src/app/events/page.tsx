// DB IMPORTS
import { fetchEvents } from '@/db/queries/events'

// COMPONENTS IMPORTS
import EventCard from '@/components/EventCard'

export default async function EventsPage() {
  const events = await fetchEvents()

  return (
    <main className="bg-white grow">
      <div>
        {events != null && events.map((event) => (
          <EventCard event={event} />
        ))}
      </div>
    </main>
  )
}
