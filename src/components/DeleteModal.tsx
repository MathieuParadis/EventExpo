// REACT IMPORTS
import { useEffect } from 'react'

// TYPES IMPORTS
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
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
      {/* overlay */}
      <div className="absolute w-full h-full bg-black opacity-40"></div>

      {/* content */}
      <div className="absolute flex flex-col gap-10 md:gap-16 justify-center items-center w-[80%] md:w-[650px] h-fit md:h-[330px] bg-white rounded-md p-2 md:p-4">
        <div className="flex flex-col gap-5 text-2xl md:text-3xl lg:text-4xl font-medium text-center">
          <p>You are about to delete the event<br></br>
            <span className="font-semibold text-[var(--primary-color)]">{event.title}</span>
          </p>
          <p>Are you sure?</p>
        </div>
        <div className="w-full flex gap-2 md:gap-4 justify-center text-base md:text-lg">
          <button
            onClick={() => alert('deleting event')}
            className="w-1/2 md:w-[150px] border rounded focus:outline-none bg-red-500 hover:bg-red-600 text-white p-2"
          >Yes, delete</button>
          <button
            onClick={closeDeleteModal}
            className="w-1/2 md:w-[150px] border rounded focus:outline-none bg-gray-400 hover:bg-gray-500 text-white p-2"
          >No, cancel</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal
