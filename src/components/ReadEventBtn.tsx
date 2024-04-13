
// MUI IMPORTS
import Button from '@mui/material/Button'

interface Props {
  onClick: () => void
}

const ReadEventBtn = ({ onClick }: Props): JSX.Element => {
  return (
    <Button
      className='focus:outline-none rounded bg-white hover:bg-[var(--primary-color)] text-[var(--primary-color)] hover:text-white p-1 w-1/2'
      style={{ textTransform: 'capitalize', border: '1px solid var(--primary-color)' }}
      onClick={onClick}
    >
      Learn more
    </Button>
  )
}

export default ReadEventBtn
