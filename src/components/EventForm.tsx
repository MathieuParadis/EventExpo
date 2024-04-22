// TYPES IMPORTS
import { Event } from '@prisma/client'

interface Props {
  event: Event
  isAdmin?: boolean
}

const EventForm = ({ event }: Props): JSX.Element => {
  return (
    <form className="flex flex-col gap-4 md:gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className=" text-gray-700 text-sm md:text-base font-semibold">
        Title{' '}
          <span className='text-red-500'>*</span>
        </label>
        <input
          id="title"
          type="text"
          className="border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-[0_0_10px_var(--primary-color)] hover:shadow-[0_0_10px_var(--primary-color)]"
          required={true}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="description" className=" text-gray-700 text-sm md:text-base font-semibold">
          Description{' '}
          <span className='text-red-500'>*</span>
        </label>
        <textarea
          id="description"
          rows={5}
          className="border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-[0_0_10px_var(--primary-color)] hover:shadow-[0_0_10px_var(--primary-color)]"
          required={true}
          placeholder='Share here what is your event about'
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="location" className=" text-gray-700 text-sm md:text-base font-semibold">
        Location{' '}
          <span className='text-red-500'>*</span>
        </label>
        <input
          id="location"
          type="text"
          className="border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-[0_0_10px_var(--primary-color)] hover:shadow-[0_0_10px_var(--primary-color)]"
          required={true}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="image" className=" text-gray-700 text-sm md:text-base font-semibold">
        Image URL{' '}
          <span className='text-gray-400 text-sm font-normal italic'>(optional)</span>
        </label>
        <input
          id="image"
          type="text"
          className="border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-[0_0_10px_var(--primary-color)] hover:shadow-[0_0_10px_var(--primary-color)]"
          required={true}
        />
      </div>
    </form>
  )
}

export default EventForm
