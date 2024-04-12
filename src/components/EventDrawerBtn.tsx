'use client'

// REACT IMPORTS
import { useEffect, useState } from 'react'

// MUI IMPORTS
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'

const EventDrawerBtn = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const openDrawer = (): void => {
    setIsOpen(true)
  }

  const closeDrawer = (): void => {
    setIsOpen(false)
  }

  // Close drawer on Escape
  useEffect((): (() => void) => {
    const close = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        closeDrawer()
      }
    }

    window.addEventListener('keydown', close)
    return (): void => {
      window.removeEventListener('keydown', close)
    }
  })

  return (
    <>
      <Button
        className='focus:outline-none rounded bg-white hover:bg-[var(--primary-color)] text-[var(--primary-color)] hover:text-white p-1 w-1/2'
        style={{ textTransform: 'capitalize', border: '1px solid var(--primary-color)' }}
        onClick={openDrawer}
      >
        Learn more
      </Button>
      <Drawer
        className='top-[var(--navbar-height)]'
        anchor="right"
        open={isOpen}
        onClose={closeDrawer}
        PaperProps={{
          className: 'h-[calc(100%-var(--navbar-height))] top-[var(--navbar-height)] w-full sm:w-[100%] md:w-[90%] lg:w-[80%] xl:w-[72%] rounded-tl-md rounded-bl-md'
        }}
        slotProps={{
          backdrop: {
            sx: {top: 'var(--navbar-height)'}
          }
        }}
      >
        <div>
          content
        </div>
      </Drawer>
    </>
  )
}

export default EventDrawerBtn
