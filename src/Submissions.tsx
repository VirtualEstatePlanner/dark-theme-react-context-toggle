import { makeStyles } from '@material-ui/core/styles'
import { Table, TableBody, TableCell, TableHead, TableRow, Link, Typography } from '@material-ui/core'
import { Title } from './Title'

interface ISubmission {
  id: number
  hash: number
  when: Date
  who: string
  problem: string
  lang: string
  verdict: string
  time: string
  memory: string
}

// Generate Submission Data
const createData: Function = (id: number, hash: number, when: Date, who: string, problem: string, lang: string, verdict: string, time: string, memory: string): ISubmission => {
  return { id, hash, when, who, problem, lang, verdict, time, memory }
}

const rows = [
  createData(0, 79053104, 'May/05/2020 17:24UTC+5.5', 'George', 'D - Alena And The Heater', 'Python3', 'Wrong answer on test 7	', '187 ms', '7900 KB'),
  createData(1, 79053086, 'May/05/2020 17:14UTC+5.5', 'George', 'D - Alena And The Heater', 'C++14', 'Wrong answer on test 7	', '187 ms', '600 KB'),
  createData(2, 78908900, 'May/03/2020 21:48UTC+5.5', 'George', 'C - Summarize to the Power of Two', 'C++14', 'Accepted', '670 ms', '4400 KB'),
  createData(3, 78908548, 'May/03/2020 21:45UTC+5.5	', 'George', 'D - Alena And The Heater', 'C++14', 'Wrong answer on test 5	', '31 ms', '0 KB'),
  createData(4, 78896002, 'May/03/2020 19:06UTC+5.5	', 'George', 'B - Koala and Lights', 'C++14', 'Accepted', '155 ms', '300 KB'),
]

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}))

export const Submissions: Function = (): React.ReactElement => {
  const classes = useStyles()
  return (
    <>
      <Title>Recent Submissions</Title>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>When</TableCell>
            <TableCell>Who</TableCell>
            <TableCell>Problem</TableCell>
            <TableCell>Lang</TableCell>
            <TableCell>Verdict</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Memory</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: ISubmission) => (
            <TableRow key={row.id}>
              <TableCell>
                <Link color='primary' href='#'>
                  {row.hash}
                </Link>
              </TableCell>
              <TableCell>{row.when}</TableCell>
              <TableCell>{row.who}</TableCell>
              <TableCell>
                <Link color='primary' href='#'>
                  {row.problem}
                </Link>
              </TableCell>
              <TableCell>{row.lang}</TableCell>
              <TableCell>
                <Typography color={row.verdict === 'Accepted' ? 'primary' : 'textSecondary'} variant='body2'>
                  {row.verdict}
                </Typography>
              </TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.memory}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color='primary' href='#'>
          See more Submissions
        </Link>
      </div>
    </>
  )
}
