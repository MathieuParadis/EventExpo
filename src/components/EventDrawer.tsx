'use client'

// REACT IMPORTS
import { useEffect } from 'react'

// MUI IMPORTS
import Drawer from '@mui/material/Drawer'

// HOOKS IMPORTS
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { closeReadEventModal } from '@/lib/features/eventModals/eventModalsSlice'

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
        <div>content</div>
      )}
    </Drawer>
  )
}

export default EventDrawer
