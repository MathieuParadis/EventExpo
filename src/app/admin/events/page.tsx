// DB IMPORTS
import { fetchEvents } from '@/db/queries/events'

export default async function AdminEventsPage() {
  const events = await fetchEvents()

  return (
    <main className="bg-blue-300 grow">
      {events != null && events.map((event) => (
        <div key={event.id} className="flex gap-2">
          <p>{event.title}</p>
        </div>
      ))}
    </main>
  )
}
