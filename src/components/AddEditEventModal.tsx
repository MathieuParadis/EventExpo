'use client'

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
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black opacity-40"></div>

        {/* content */}
        <div className="absolute flex flex-col gap-10 md:gap-16 justify-center items-center w-[80%] md:w-[650px] h-fit md:h-[330px] bg-white rounded-md p-2 md:p-4">
          {isAddEvent && <>new event</>}
          {isEditEvent && <>edit event {event?.title}</>}
        </div>
      </div>
    )
  } else return <></>
}

export default AddEditEventModal
