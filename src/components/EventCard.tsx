// NEXT IMPORTS
import Image from 'next/image'

// MOMENT IMPORT
import moment from 'moment'

// PRISMA IMPORTS
import type { Event } from '@prisma/client'

// ICONS IMPORTS
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'

interface Props {
  event: Event
}

const EventCard = ({ event }: Props): JSX.Element => {
  return (
    <div key={event.id} className="flex sm:flex-col border-2 rounded-lg overflow-hidden h-[380px]">
      <Image
        src={event.image ?? '/defaultEvent.png'}
        alt="Vercel Logo"
        className="w-full h-[45%] object-cover"
        width={450}
        height={450}
      />

      {/* event info */}
      <div className="flex flex-col gap-3 p-2">
        <p className='text-xl font-semibold text-sky-700'>{event.title}</p>
        <div className="flex items-center gap-2 text-gray-500">
          <CalendarTodayOutlinedIcon fontSize='small' color="inherit" />
          <p className='text-base'>{moment(event.startTime).format("ddd, MMM DD · hh:mm A")}</p>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <CheckCircleOutlineOutlinedIcon fontSize='small' color="inherit" />
          <p className='text-base'>{event.interestCount} people interested</p>
        </div>
      </div>

      {/* buttons */}
      <div className='mt-auto flex gap-2 p-2 pt-3'>
        <button
          className="border border-[var(--primary-color)] rounded-md bg-white hover:bg-[var(--primary-color)] text-[var(--primary-color)] hover:text-white p-2 w-1/2"
          >I'm interested</button>
        <button
          className="border rounded-md bg-[var(--primary-color)] hover:bg-[var(--primary-color-darker)] text-white p-2 w-1/2"
        >Learn more</button>
      </div>
    </div>
  )
}

export default EventCard
