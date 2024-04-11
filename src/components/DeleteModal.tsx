'use client'

// REACT IMPORTS
import { useEffect } from 'react'

// PRISMA IMPORTS
import type { Event } from '@prisma/client'

interface Props {
  event: Event
  closeDeleteModal: () => void
}

const DeleteModal = ({ event, closeDeleteModal }: Props): JSX.Element => {
  // Close modal on Escape
  useEffect((): (() => void) => {
    const close = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        closeDeleteModal()
      }
    }

    window.addEventListener('keydown', close)
    return (): void => {
      window.removeEventListener('keydown', close)
    }
  })

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
      {/* overlay */}
      <div className="absolute w-full h-full bg-black opacity-40"></div>

      {/* content */}
      <div className="absolute w-1/2 h-1/2 bg-white">yo</div>
    </div>
  )
}

export default DeleteModal
