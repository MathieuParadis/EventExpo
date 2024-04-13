'use client'

// REACT IMPORTS
import { useEffect } from 'react'

// MUI IMPORTS
import { Divider } from '@mui/material'
import Drawer from '@mui/material/Drawer'

// HOOKS IMPORTS
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { closeReadEventModal } from '@/lib/features/eventModals/eventModalsSlice'

// ICONS IMPORTS
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'

const EventDrawer = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const eventModals = useAppSelector((state) => state.modals)
  const { isReadEvent, event } = eventModals

  const closeReadModal = ():void => {
    dispatch(closeReadEventModal())
  }

  // Close modal on Escape
  useEffect((): (() => void) => {
    const close = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        closeReadModal()
      }
    }

    window.addEventListener('keydown', close)
    return (): void => {
      window.removeEventListener('keydown', close)
    }
  })

  return (
    <Drawer
      className='top-[var(--navbar-height)]'
      anchor="right"
      open={isReadEvent}
      onClose={closeReadModal}
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
        <div className="h-full flex flex-col gap-2 md:gap3 lg:gap4 p-2 md:p-3 lg:p-4">
          <div className='flex justify-between items-center text-1xl sm:text-2xl md:text-3xl lg:text-4xl line-clamp-2'>
            <h2 className='text-[var(--primary-color)] font-bold'>{event.title}</h2>
            <CloseOutlinedIcon className="cursor-pointer" fontSize="inherit" onClick={closeReadModal} />
          </div>
          <Divider />
          <div className="flex flex-col md:flex-row gap-2 md:gap3 lg:gap4 grow">
            <div className='w-2/3'>content</div>
            <Divider className='hidden md:block' orientation="vertical" flexItem />
            <Divider className='md:hidden' />
            <div>buttons</div>
          </div>
        </div>
      )}
    </Drawer>
  )
}

export default EventDrawer
