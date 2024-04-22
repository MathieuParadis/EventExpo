'use client'

// NEXT IMPORTS
import Image from 'next/image'

// MOMENT IMPORT
import moment from 'moment'

// MUI IMPORTS
import Button from '@mui/material/Button'

// TYPES IMPORTS
import type { Event } from '@prisma/client'

// ICONS IMPORTS
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined'

// COMPONENTS IMPORTS
import DropDownBtn from './buttons/DropDownBtn'
import ReadEventBtn from './buttons/ReadEventBtn'

// HOOKS IMPORTS
import { useAppDispatch } from '@/lib/hooks'
import {
  openDeleteEventModal,
  openEditEventModal,
  openReadEventModal
} from '@/lib/features/eventModals/eventModalsSlice'

interface Props {
  event: Omit<Event, 'createdAt' | 'updatedAt'>
  isAdmin?: boolean
}

const EventCard = ({ event, isAdmin = false }: Props): JSX.Element => {
  const dispatch = useAppDispatch()

  const openDeleteModal = ():void => {
    dispatch(openDeleteEventModal(event))
  }

  const openEditModal = ():void => {
    dispatch(openEditEventModal(event))
  }

  const openReadModal = ():void => {
    dispatch(openReadEventModal(event))
  }

  return (
    <div className="flex flex-col sm:flex-row md:flex-col border-2 rounded-lg drop-shadow-lg overflow-hidden h-[350px] sm:h-[220px] md:h-[420px] lg:h-[490px]">
      <Image
        src={event.image ?? '/defaultEvent.png'}
        alt="Vercel Logo"
        className="w-full sm:w-[45%] md:w-full h-[40%] sm:h-full md:h-[45%] object-cover border-b-2"
        width={450}
        height={450}
      />

      <div className="flex flex-col grow p-3">
        {/* event info */}
        <div className="flex flex-col gap-2 md:gap-3">
          <p className='text-lg md:text-xl font-semibold text-sky-700'>{event.title}</p>
          <div className="flex gap-2 text-gray-500">
            <CalendarTodayOutlinedIcon fontSize='small' color="inherit" />
            <p className='text-sm md:text-base'>{moment(event.startTime).format('ddd, MMM DD · hh:mm A')}</p>
          </div>
          <div className="flex gap-2 text-gray-500">
            <FmdGoodOutlinedIcon fontSize='small' color="inherit" />
            <p className='text-sm md:text-base'>{event.location}</p>
          </div>
          <div className="flex gap-2 text-gray-500">
            <CheckCircleOutlineOutlinedIcon fontSize='small' color="inherit" />
            <p className='text-sm md:text-base'>{event.interestCount} people interested</p>
          </div>
        </div>

        {/* buttons */}
        <div className='mt-auto flex gap-2 pt-3 text-sm md:text-base'>
          <ReadEventBtn onClick={openReadModal} />
          {isAdmin ?
            <DropDownBtn onEdit={openEditModal} onDelete={openDeleteModal} />
            :
            <Button
              className='focus:outline-none rounded bg-[var(--primary-color)] hover:bg-[var(--primary-color-darker)] text-white py-1 px-2 w-1/2'
              style={{ textTransform: 'capitalize', border: '1px solid var(--primary-color)' }}
              onClick={() => alert('interested')}
            >
              I&#39;m interested
            </Button>
          }
        </div>
      </div>
    </div>
  )
}

export default EventCard
