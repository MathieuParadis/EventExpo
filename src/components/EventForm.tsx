// MUI IMPORTS
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'

// MOMENT IMPORT
import moment from 'moment'

// TYPES IMPORTS
import { Event } from '@prisma/client'

// HOOKS IMPORTS
import { useAppDispatch } from '@/lib/hooks'
import { editEvent } from '@/lib/features/eventModals/eventModalsSlice'

interface Props {
  event: Omit<Event, 'createdAt' | 'updatedAt'>
  isAdmin?: boolean
}

const EventForm = ({ event }: Props): JSX.Element => {
  const dispatch = useAppDispatch()

  const setEvent = (event: Omit<Event, 'createdAt' | 'updatedAt'>): void => {
    dispatch(editEvent(event))
  }

  return (
    <form className="flex flex-col gap-4 md:gap-6">
      {/* title */}
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className=" text-sm md:text-base font-semibold">
        Title{' '}
          <span className='text-red-500'>*</span>
        </label>
        <input
          id="title"
          type="text"
          className="border rounded-lg w-full py-2 px-3 focus:outline-none focus:shadow-[0_0_10px_var(--primary-color)] hover:shadow-[0_0_10px_var(--primary-color)]"
          required={true}
          value={event.title}
          onChange={(e) => {
            setEvent({
              ...event,
              title: e.target.value
            })
          }}
        />
      </div>

      {/* description */}
      <div className="flex flex-col gap-2">
        <label htmlFor="description" className=" text-sm md:text-base font-semibold">
          Description{' '}
          <span className='text-red-500'>*</span>
        </label>
        <textarea
          id="description"
          rows={5}
          className="border rounded-lg w-full py-2 px-3 focus:outline-none focus:shadow-[0_0_10px_var(--primary-color)] hover:shadow-[0_0_10px_var(--primary-color)]"
          required={true}
          placeholder='Share here what is your event about'
          value={event.description}
          onChange={(e) => {
            setEvent({
              ...event,
              description: e.target.value
            })
          }}
        />
      </div>

      {/* date and time */}
      <div className="flex flex-col gap-2">
        <label htmlFor="date" className=" text-sm md:text-base font-semibold">
          Date{' '}
          <span className='text-red-500'>*</span>
        </label>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DateTimePicker disablePast
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { border: 'none' },
                '&:hover > fieldset': { borderColor: '1px #d4d4d4 solid', boxShadow: '0 0 10px var(--primary-color)' },
                '&:focus > fieldset': { borderColor: '1px #d4d4d4 solid', boxShadow: '0 0 10px var(--primary-color)' },
                height: '42px',
                borderRadius: '8px',
                border: '1px #d4d4d4 solid'
              },
              '.MuiInputBase-input': {
                padding: '8px 12px'
              }
            } }
            value={moment(event.startTime)}
            onChange={(e) => {
              setEvent({
                ...event,
                startTime: (e?.toDate() ?? new Date()).toISOString()
              })
            }}
          />
        </LocalizationProvider>
      </div>

      {/* location */}
      <div className="flex flex-col gap-2">
        <label htmlFor="location" className=" text-sm md:text-base font-semibold">
        Location{' '}
          <span className='text-red-500'>*</span>
        </label>
        <input
          id="location"
          type="text"
          className="border rounded-lg w-full py-2 px-3 focus:outline-none focus:shadow-[0_0_10px_var(--primary-color)] hover:shadow-[0_0_10px_var(--primary-color)]"
          required={true}
          value={event.location}
          onChange={(e) => {
            setEvent({
              ...event,
              location: e.target.value
            })
          }}
        />
      </div>

      {/* image */}
      <div className="flex flex-col gap-2">
        <label htmlFor="image" className=" text-sm md:text-base font-semibold">
        Image URL{' '}
          <span className='text-gray-400 text-sm font-normal italic'>(optional)</span>
        </label>
        <input
          id="image"
          type="text"
          className="border rounded-lg w-full py-2 px-3 focus:outline-none focus:shadow-[0_0_10px_var(--primary-color)] hover:shadow-[0_0_10px_var(--primary-color)]"
          required={true}
          value={event.image ?? ''}
          onChange={(e) => {
            setEvent({
              ...event,
              image: e.target.value
            })
          }}
        />
      </div>
    </form>
  )
}

export default EventForm
