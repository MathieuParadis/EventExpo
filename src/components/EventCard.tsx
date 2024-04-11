// PRISMA IMPORTS
import type { Event } from '@prisma/client'

interface Props {
  event: Event
}

const EventCard = ({ event }: Props): JSX.Element => {
  return (
    <div key={event.id} className="flex gap-2">
      <p>{event.title}</p>
      <p>{new Date(event.startTime).toISOString()}</p>
    </div>
  )
}

export default EventCard
