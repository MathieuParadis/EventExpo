'use client'

// REACT IMPORTS
import { useState } from 'react'

// MUI IMPORTS
import Button from '@mui/material/Button'

const AddEventBtn = (): JSX.Element => {
  return (
    <div className="flex pb-4">
      <Button
        className='focus:outline-none rounded bg-sky-800 hover:bg-sky-900 text-white p-1 w-[150px] ml-auto'
        style={{ textTransform: 'capitalize', border: '1px solid rgb(7 89 183 / var(--tw-bg-opacity))' }}
        onClick={() => alert('interestec')}
      >
      Add event
      </Button>
    </div>
  )
}

export default AddEventBtn
