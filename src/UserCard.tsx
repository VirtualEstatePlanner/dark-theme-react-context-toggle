import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
})

export const UserCard: Function = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Typography component='h2' variant='h6' color='primary'>
        Mad Doctor
      </Typography>
      <Typography component='h2' variant='h5' color='primary'>
        George Georgulas IV
      </Typography>
      <Typography variant='subtitle1'>Contest Rating : 1511</Typography>
      <Typography variant='subtitle1'>Contribution : +10</Typography>

      <div>
        <Typography color='textSecondary' className={classes.depositContext}>
          Last Visit : 11 hours ago
        </Typography>
        <Typography color='textSecondary' className={classes.depositContext}>
          Registered : 1 year ago
        </Typography>
      </div>
    </React.Fragment>
  )
}
