'use client'

// REACT IMPORTS
import { useState } from 'react'

// NEXT IMPORTS
import Image from 'next/image'

// MOMENT IMPORT
import moment from 'moment'

// PRISMA IMPORTS
import type { Event } from '@prisma/client'

// ICONS IMPORTS
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined'

// COMPONENTS IMPORTS
import DeleteModal from '@/components/DeleteModal'
import DropDownMenuBtn from './DropDownBtnEventCard'
import AnchorTemporaryDrawer from './EventDrawer'

interface Props {
  event: Event
  isAdmin?: boolean
}

const EventCard = ({ event, isAdmin = false }: Props): JSX.Element => {
  const [displayDeleteModal, setDisplayDeleteModal] = useState(false)

  const openDeleteModal = ():void => {
    setDisplayDeleteModal(true)
    document.documentElement.style.overflow = 'hidden'
  }

  const closeDeleteModal = ():void => {
    setDisplayDeleteModal(false)
    document.documentElement.style.overflow = 'visible'
  }

  return (
    <>
      {/* Delete Modal */}
      {displayDeleteModal && isAdmin && <DeleteModal event={event} closeDeleteModal={closeDeleteModal} />}

      {/* EventCard */}
      <div className="flex flex-col sm:flex-row md:flex-col border-2 rounded-lg overflow-hidden h-[350px] sm:h-[220px] md:h-[420px] lg:h-[490px]">
        <Image
          src={event.image ?? '/defaultEvent.png'}
          alt="Vercel Logo"
          className="w-full sm:w-[45%] md:w-full h-[40%] sm:h-full md:h-[45%] object-cover"
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
            {/* <button
              onClick={() => alert('Learn more')}
              className="border border-[var(--primary-color)] focus:outline-none rounded bg-white hover:bg-[var(--primary-color)] text-[var(--primary-color)] hover:text-white p-1 w-1/2"
            >Learn more</button> */}
            <AnchorTemporaryDrawer />
            {isAdmin ? (
              <DropDownMenuBtn onEdit={() => {}} onDelete={openDeleteModal} />
            ) : (
              <button
                onClick={() => alert('interested')}
                className="border rounded focus:outline-none bg-[var(--primary-color)] hover:bg-[var(--primary-color-darker)] text-white p-1 w-1/2"
              >I&#39;m interested</button>
            )}
          </div>
        </div>
      </div>
    </>

  )
}

export default EventCard
