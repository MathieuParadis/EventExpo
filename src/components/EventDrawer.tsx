import * as React from 'react'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function AnchorTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return
        }

        setState({ ...state, [anchor]: open })
      }

  return (
    <div>
      <Button
        style={{ textTransform: 'capitalize' }}
        onClick={toggleDrawer('right', true)}
      >
          Learn more
      </Button>
      <Drawer
        anchor="right"
        open={state['right']}
        onClose={toggleDrawer('right', false)}
      >
        content
      </Drawer>
    </div>
  )
}
