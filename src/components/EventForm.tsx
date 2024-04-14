
// TYPES IMPORTS
import { Event } from '@prisma/client'

interface Props {
  event: Event
  isAdmin?: boolean
}

const EventForm = ({ event }: Props): JSX.Element => {
  return (
    <div className="grow">
      form here
    </div>
  )
}

export default EventForm
