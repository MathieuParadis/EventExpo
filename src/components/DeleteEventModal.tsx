'use client'

// MUI IMPORTS
import Button from '@mui/material/Button'

// HOOKS IMPORTS
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { closeDeleteEventModal } from '@/lib/features/eventModals/eventModalsSlice'

const DeleteModal = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const eventModals = useAppSelector((state) => state.modals)
  const { isDeleteEvent, event } = eventModals

  const closeDeleteModal = ():void => {
    dispatch(closeDeleteEventModal())
  }

  if (isDeleteEvent && event != null) {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-[9999]">
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
            <Button
              className="w-1/2 md:w-[150px] rounded focus:outline-none bg-red-500 hover:bg-red-600 text-white p-2"
              style={{ textTransform: 'capitalize'}}
              onClick={() => alert('deleting event')}
            >
              Yes, delete
            </Button>
            <Button
              className="w-1/2 md:w-[150px] rounded focus:outline-none bg-gray-400 hover:bg-gray-500 text-white p-2"
              style={{ textTransform: 'capitalize'}}
              onClick={closeDeleteModal}
            >
            No, cancel
            </Button>
          </div>
        </div>
      </div>
    )
  } else return <></>
}

export default DeleteModal
