// DB IMPORTS
import { fetchEvents } from '@/db/queries/events'

// COMPONENTS IMPORTS
import EventCard from '@/components/EventCard'

export default async function EventsPage() {
  const upcomingEvents = await fetchEvents(new Date().toISOString())

  return (
    <main className="bg-white grow p-4 md:px-10 lg:px-16">
      <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-[var(--secondary-color)] font-bold pb-4 sm:pb-6 md:pb-8 lg:pb-10'>Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {upcomingEvents != null && upcomingEvents.map((event) => (
          <EventCard key={event.id} event={event}/>
        ))}
      </div>
    </main>
  )
}
