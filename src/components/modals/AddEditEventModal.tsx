'use client'

// MUI IMPORTS
import Button from '@mui/material/Button'

// REACT-HOT-TOAST IMPORTS
import { toast } from 'react-hot-toast'

// COMPONENTS IMPORTS
import EventForm from '../EventForm'

// TYPES IMPORTS
import { Event } from '@prisma/client'

// HOOKS IMPORTS
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { closeAddEditEventModal } from '@/lib/features/eventModals/eventModalsSlice'
import { addEvent, editEvent } from '@/db/queries/events'

const newEvent: Omit<Event, 'createdAt' | 'updatedAt'> = {
  id: 0,
  title: '',
  description: '',
  location: '',
  startTime: new Date().toISOString(),
  image: null,
  interestCount: 0
}

const AddEditEventModal = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const eventModals = useAppSelector((state) => state.modals)
  const { isAddEvent, isEditEvent, event } = eventModals

  const closeAddEditModal = ():void => {
    dispatch(closeAddEditEventModal())
  }

  const handleAdd = async (): Promise<void> => {
    if (event != null) {
      try {
        await addEvent(event)
        toast.success('Event added successfully')
      } catch (error) {
        console.error('Error while adding event:', error)
        toast.error('An error occured. Try again!')
      }
      closeAddEditModal()
    }
  }

  const handleEdit = async (): Promise<void> => {
    if (event != null) {
      try {
        await editEvent(event)
        toast.success('Event edited successfully')
      } catch (error) {
        console.error('Error while editing event:', error)
        toast.error('An error occured. Try again!')
      }
      closeAddEditModal()
    }
  }

  if (isAddEvent || isEditEvent) {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-[100]">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black opacity-40"></div>

        {/* content */}
        <div className="absolute flex flex-col justify-between gap-2 md:gap-3 lg:gap-4 w-[90%] md:w-[500px] aspect-[5/6] bg-white rounded-md">
          <div className="flex justify-center gap-2 md:gap-3 lg:gap-4 border-b p-2 md:p-4">
            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-semibold text-[var(--primary-color-darker)]'>
              {isAddEvent && <>New event</>}
              {isEditEvent && <>Edit event</>}
            </h2>
          </div>

          <div className="grow overflow-y-auto h-10 p-2 md:p-4">
            <EventForm event={event ?? newEvent} />
          </div>

          <div className="flex justify-between items-center border-t p-2 md:p-4">
            <p className='text-red-500'>* Required field</p>

            <div className="flex gap-2 md:gap-3 lg:gap-4">
              <Button
                className="w-1/2 md:w-[100px] rounded focus:outline-none bg-gray-400 hover:bg-gray-500 text-white py-1 px-2"
                style={{ textTransform: 'capitalize'}}
                onClick={closeAddEditModal}
              >
              Cancel
              </Button>
              <Button
                className="w-1/2 md:w-[100px] rounded focus:outline-none bg-green-500 hover:bg-green-600 text-white py-1 px-2"
                style={{ textTransform: 'capitalize'}}
                onClick={isAddEvent ? handleAdd : handleEdit}
              >
              Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  } else return <></>
}

export default AddEditEventModal
