'use client'

// MUI IMPORTS
import Button from '@mui/material/Button'

// HOOKS IMPORTS
import { useAppDispatch } from '@/lib/hooks'
import { openAddEventModal } from '@/lib/features/eventModals/eventModalsSlice'

const AddEventBtn = (): JSX.Element => {
  const dispatch = useAppDispatch()

  const openAddModal = ():void => {
    dispatch(openAddEventModal())
  }

  return (
    <div className="flex pb-4">
      <Button
        className='focus:outline-none rounded bg-sky-800 hover:bg-sky-900 text-white p-1 w-[150px] ml-auto'
        style={{ textTransform: 'capitalize', border: '1px solid rgb(7 89 183 / var(--tw-bg-opacity))' }}
        onClick={openAddModal}
      >
      Add event
      </Button>
    </div>
  )
}

export default AddEventBtn
