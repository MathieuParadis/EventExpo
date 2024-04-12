'use client'

// REACT IMPORTS
import { useEffect, useState } from 'react'

// MUI IMPORTS
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'

const EventDrawer = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const openDrawer = (): void => {
    setIsOpen(true)
    document.documentElement.style.overflow = 'hidden'
  }

  const closeDrawer = (): void => {
    setIsOpen(false)
    document.documentElement.style.overflow = 'visible'
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
    <div>
      <Button
        style={{ textTransform: 'capitalize' }}
        onClick={openDrawer}
      >
        Learn more
      </Button>
      <Drawer
        className='top-[69px] bg-black opacity-40'
        anchor="right"
        open={isOpen}
        // onClose={closeDrawer}
        PaperProps={{
          className: "top-[69px]"
        }}
        slotProps={{
          backdrop: {
            invisible: true
          }
        }}
      >
        <div className="w-1/2">
          content
        </div>
      </Drawer>
    </div>
  )
}

export default EventDrawer
