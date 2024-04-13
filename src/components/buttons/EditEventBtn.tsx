'use client'

// MUI IMPORTS
import Button from '@mui/material/Button'

// TYPES IMPORTS
import type { Event } from '@prisma/client'

// HOOKS IMPORTS
import { useAppDispatch } from '@/lib/hooks'
import { openEditEventModal } from '@/lib/features/eventModals/eventModalsSlice'

interface Props {
  event: Event
}

const EditEventBtn = ({ event }: Props): JSX.Element => {
  const dispatch = useAppDispatch()

  const openEditModal = ():void => {
    dispatch(openEditEventModal(event))
  }

  return (
    <Button
      className='focus:outline-none rounded bg-sky-400 hover:bg-sky-500 text-white py-1 px-2 w-[fit] mr-auto'
      style={{ textTransform: 'capitalize' }}
      onClick={openEditModal}
    >
      Edit event
    </Button>
  )
}

export default EditEventBtn
