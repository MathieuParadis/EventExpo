// REACT IMPORTS
import { useEffect } from 'react'

// TYPES IMPORTS
import type { Event } from '@prisma/client'

interface Props {
  event?: Event | null
  closeModal: () => void
}

const AddEditEventModal = ({ event = null, closeModal }: Props): JSX.Element => {
  // Close modal on Escape
  useEffect((): (() => void) => {
    const close = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }

    window.addEventListener('keydown', close)
    return (): void => {
      window.removeEventListener('keydown', close)
    }
  })

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
      {/* overlay */}
      <div className="absolute w-full h-full bg-black opacity-40"></div>

      {/* content */}
      <div className="absolute flex flex-col gap-10 md:gap-16 justify-center items-center w-[80%] md:w-[650px] h-fit md:h-[330px] bg-white rounded-md p-2 md:p-4">
        content
      </div>
    </div>
  )
}

export default AddEditEventModal
