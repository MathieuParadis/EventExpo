'use client'

// REACT IMPORTS
import { useEffect, useState } from 'react'

// NEXT IMPORTS
import { usePathname } from 'next/navigation'

// MOMENT IMPORT
import moment from 'moment'

// MUI IMPORTS
import { Divider } from '@mui/material'
import Drawer from '@mui/material/Drawer'

// REACT-HOT-TOAST IMPORTS
import { toast } from 'react-hot-toast'

// ICONS IMPORTS
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined'

// COMPONENTS IMPORTS
import DeleteEventBtn from '../buttons/DeleteEventBtn'
import EditEventBtn from '../buttons/EditEventBtn'
import EditInterestEventBtn from '../buttons/EditInterestEventBtn'

// HOOKS IMPORTS
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { closeReadEventModal } from '@/lib/features/eventModals/eventModalsSlice'
import { markEventAsInterested } from '@/db/queries/events'

const EventDrawer = (): JSX.Element => {
  const pathname = usePathname()
  const dispatch = useAppDispatch()
  const eventModals = useAppSelector((state) => state.modals)
  const { isReadEvent, event } = eventModals
  const [isAdmin, setIsAdmin] = useState(pathname === '/admin/events')

  const closeReadModal = ():void => {
    dispatch(closeReadEventModal())
  }

  const handleMarkEventAsInterested = async (): Promise<void> => {
    if (event != null) {
      try {
        await markEventAsInterested(event.id)
        toast.success('Interest shared successfully')
      } catch (error) {
        console.error('Error while marking event as interested:', error)
        toast.error('An error occured. Try again!')
      }
    }
  }

  useEffect(() => {
    setIsAdmin(pathname === '/admin/events')
  }, [pathname])

  return (
    <Drawer
      className='top-[var(--navbar-height)] z-50'
      disableEnforceFocus
      anchor="right"
      open={isReadEvent}
      onClose={closeReadModal}
      disableEscapeKeyDown={true}
      PaperProps={{
        className: 'h-[calc(100%-var(--navbar-height))] top-[var(--navbar-height)] w-full sm:w-[100%] md:w-[90%] lg:w-[80%] xl:w-[72%] rounded-tl-md rounded-bl-md'
      }}
      slotProps={{
        backdrop: {
          sx: {top: 'var(--navbar-height)'}
        }
      }}
    >
      {event != null && (
        <div className="h-full flex flex-col gap-4 md:gap-5 lg:gap-6 p-4 md:p-5 lg:p-6">
          {/* event title */}
          <div className='flex justify-between items-center text-xl sm:text-2xl md:text-3xl lg:text-4xl line-clamp-2'>
            <h2 className='text-[var(--primary-color)] font-bold'>{event.title}</h2>
            <CloseOutlinedIcon className="cursor-pointer" fontSize="inherit" onClick={closeReadModal} />
          </div>

          <Divider />

          {/* event details */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 lg:gap-6 grow">
            <div className='w-full md:w-2/3 flex flex-col gap-4 md:gap-5 lg:gap-6'>
              <p className="text-base md:text-lg lg:text-xl">{event.description}</p>
              <div className="flex gap-2">
                <CalendarTodayOutlinedIcon fontSize="small" color="inherit" />
                <p className="text-sm md:text-base">{moment(event.startTime).format('ddd, MMM DD · hh:mm A')}</p>
              </div>
              <div className="flex gap-2">
                <FmdGoodOutlinedIcon fontSize="small" color="inherit" />
                <p className="text-sm md:text-base">{event.location}</p>
              </div>
              <div className="flex gap-2">
                <CheckCircleOutlineOutlinedIcon fontSize="small" color="inherit" />
                <p className="text-sm md:text-base">{event.interestCount} people interested</p>
              </div>
            </div>
            <Divider className="hidden md:block" orientation="vertical" flexItem />
            <Divider className="md:hidden" />
            <div className="grow flex flex-col gap-2 md:gap-3 lg:gap-4">
              {isAdmin && <DeleteEventBtn event={event} />}
              {isAdmin && <EditEventBtn event={event} />}
              {!isAdmin && <EditInterestEventBtn onClick={handleMarkEventAsInterested} />}
            </div>
          </div>
        </div>
      )}
    </Drawer>
  )
}

export default EventDrawer
