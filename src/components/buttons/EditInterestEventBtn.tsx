// MUI IMPORTS
import Button from '@mui/material/Button'

interface Props {
  onClick: () => void
}

const EditInterestEventBtn = ({ onClick }: Props): JSX.Element => {
  return (
    <Button
      className='focus:outline-none rounded bg-[var(--primary-color)] hover:bg-[var(--primary-color-darker)] text-white py-1 px-2 w-fit'
      style={{ textTransform: 'capitalize', border: '1px solid var(--primary-color)' }}
      onClick={onClick}
    >
      I&#39;m interested
    </Button>
  )
}

export default EditInterestEventBtn
