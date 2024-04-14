'use client'

// MUI IMPORTS
import { Divider } from '@mui/material'

// HOOKS IMPORTS
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { closeAddEditEventModal } from '@/lib/features/eventModals/eventModalsSlice'

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
          <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>
              {isAddEvent && <>new event</>}
              {isEditEvent && <>edit event {event?.title}</>}
            </h2>
            <Divider className='px-[-8px] md:px-[-16px]' />
          </div>

          <div className="grow">content</div>
          <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
            <Divider />
            btns here
          </div>
        </div>
      </div>
    )
  } else return <></>
}

export default AddEditEventModal
