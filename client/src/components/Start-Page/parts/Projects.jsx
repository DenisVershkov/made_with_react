import { makeStyles } from '@material-ui/core/styles'
import ImageCard from './ImageCard'
import useWindowPosition from '../hook/useWindowPosition'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
        margin: '0 auto',
        width: '100%',
        maxWidth: '1400px'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 150,
    },
    rootHeader: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
    },
    appbar: {
        background: 'none',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    appbarTitle: {
        flexGrow: '1',
        color: '#66eefb',
    },
    icon: {
        color: '#66eefb',
        fontSize: '2rem',
    },
    colorText: {
        color: '#4520ab',
    },
    container: {
        textAlign: 'center',
    },
    title: {
        color: '#66eefb',
        fontSize: '4.5rem',
    },
    goDown: {
        color: '#4520ab',
        fontSize: '4rem',
    },
    textField: {
        width: '220px',
    },
    select: {
        width: '140px',
    },
}))
export default function Projects ({content}) {
    const classes = useStyles()
    const checked = useWindowPosition('header')

    return (
        <>
            <div className={classes.root} id="place-to-visit">
            <Grid container spacing={0.5}>
          {  content?.map(item => {
            return<Grid item xs={4} style={{display: 'flex', flexDirection: 'column', alignItems: 'stretch', paddingTop: '20px',}}>
              <ImageCard key={item._id} payload={item} checked={checked} /></Grid>
            })}
            </Grid>
            </div>
        </>
    )
}
