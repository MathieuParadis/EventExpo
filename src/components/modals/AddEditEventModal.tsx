'use client'

// MUI IMPORTS
import { Divider } from '@mui/material'
import Button from '@mui/material/Button'

// COMPONENTS IMPORTS
import EventForm from '../EventForm'

// TYPES IMPORTS
import { Event } from '@prisma/client'

// HOOKS IMPORTS
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { closeAddEditEventModal } from '@/lib/features/eventModals/eventModalsSlice'

const newEvent: Event = {
  id: 0,
  title: '',
  description: '',
  location: '',
  startTime: new Date(),
  image: '',
  interestCount: 0,
  createdAt: new Date(),
  updatedAt: new Date()
}

const AddEditEventModal = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const eventModals = useAppSelector((state) => state.modals)
  const { isAddEvent, isEditEvent, event } = eventModals

  const closeAddEditModal = ():void => {
    dispatch(closeAddEditEventModal())
  }

  if (isAddEvent || isEditEvent) {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-[9999]">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black opacity-40"></div>

        {/* content */}
        <div className="absolute flex flex-col justify-between gap-2 md:gap-3 lg:gap-4 w-[90%] md:w-[500px] aspect-[5/6] bg-white rounded-md p-2 md:p-4">
          <div className="flex flex-col justify-center gap-2 md:gap-3 lg:gap-4">
            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-semibold text-[var(--primary-color-darker)]'>
              {isAddEvent && <>New event</>}
              {isEditEvent && <>Edit event</>}
            </h2>
            <Divider className='px-[-8px] md:px-[-16px]' />
          </div>

          <div className="grow overflow-y-auto h-10">
            <EventForm event={event ?? newEvent} />
          </div>

          <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
            <Divider />
            <div className="flex justify-center gap-2 md:gap-3 lg:gap-4">
              <Button
                className="w-1/2 md:w-[150px] rounded focus:outline-none bg-gray-400 hover:bg-gray-500 text-white py-1 px-2"
                style={{ textTransform: 'capitalize'}}
                onClick={closeAddEditModal}
              >
              Cancel
              </Button>
              <Button
                className="w-1/2 md:w-[150px] rounded focus:outline-none bg-green-500 hover:bg-green-600 text-white py-1 px-2"
                style={{ textTransform: 'capitalize'}}
                onClick={closeAddEditModal}
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
