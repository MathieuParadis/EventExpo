// MUI IMPORTS
import Button from '@mui/material/Button'

const EditInterestEventBtn = (): JSX.Element => {
  return (
    <Button
      className='focus:outline-none rounded bg-[var(--primary-color)] hover:bg-[var(--primary-color-darker)] text-white py-1 px-2 w-fit'
      style={{ textTransform: 'capitalize', border: '1px solid var(--primary-color)' }}
      onClick={() => alert('interested')}
    >
      I&#39;m interested
    </Button>
  )
}

export default EditInterestEventBtn
