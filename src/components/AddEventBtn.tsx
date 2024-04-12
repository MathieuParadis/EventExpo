'use client'

// REACT IMPORTS
import { useState } from 'react'

// MUI IMPORTS
import Button from '@mui/material/Button'

// COMPONENTS IMPORTS
import AddEventModal from './AddEditEventModal'

const AddEventBtn = (): JSX.Element => {
  const [displayAddModal, setDisplayAddModal] = useState(false)

  const openAddModal = ():void => {
    setDisplayAddModal(true)
  }

  const closeAddModal = ():void => {
    setDisplayAddModal(false)
  }

  return (
    <div className="flex pb-4">
      {/* Add Modal */}
      {displayAddModal && <AddEventModal closeModal={closeAddModal} />}

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
