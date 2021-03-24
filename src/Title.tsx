import * as React from 'react'
import Typography from '@material-ui/core/Typography'

interface ITitleProps {
  children: React.ReactChildren
}

export const Title: Function = (props: ITitleProps): React.ReactElement => {
  return (
    <>
      <Typography component='h2' variant='h6' color='primary' gutterBottom>
        {props.children}
      </Typography>
    </>
  )
}
