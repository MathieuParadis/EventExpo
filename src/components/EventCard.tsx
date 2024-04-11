// NEXT IMPORTS
import Image from 'next/image'

// PRISMA IMPORTS
import type { Event } from '@prisma/client'

interface Props {
  event: Event
}

const EventCard = ({ event }: Props): JSX.Element => {
  return (
    <div key={event.id} className="flex sm:flex-col gap-2 border-2 border-[var(--primary-color)] rounded-lg overflow-hidden h-[350px]">
      <Image
        src={event.image ?? "/defaultEvent.png"}
        alt="Vercel Logo"
        className="w-full h-[60%] object-cover"
        width={450}
        height={450}
      />
      <div>
        <p>{event.title}</p>
        <p>{new Date(event.startTime).toISOString()}</p>
      </div>
    </div>
  )
}

export default EventCard
