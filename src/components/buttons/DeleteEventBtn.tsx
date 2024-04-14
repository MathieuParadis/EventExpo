'use client'

// MUI IMPORTS
import Button from '@mui/material/Button'

// TYPES IMPORTS
import type { Event } from '@prisma/client'

// HOOKS IMPORTS
import { useAppDispatch } from '@/lib/hooks'
import { openDeleteEventModal } from '@/lib/features/eventModals/eventModalsSlice'

interface Props {
  event: Event
}

const DeleteEventBtn = ({ event }: Props): JSX.Element => {
  const dispatch = useAppDispatch()

  const openDeleteModal = ():void => {
    dispatch(openDeleteEventModal(event))
  }

  return (
    <Button
      className='focus:outline-none rounded bg-red-500 hover:bg-red-600 text-white py-1 px-2 w-fit mr-auto'
      style={{ textTransform: 'capitalize' }}
      onClick={openDeleteModal}
    >
      Delete event
    </Button>
  )
}

export default DeleteEventBtn
