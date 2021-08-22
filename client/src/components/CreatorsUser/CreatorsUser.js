import { makeStyles } from '@material-ui/core/styles'
import styles from './style.module.css'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import {
    CardHeader,
    CardMedia,
    CardContent,
    Typography,
} from '@material-ui/core'
import { grey, indigo } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
        marginTop: 10,
        marginLeft: 15,
        backgroundColor: indigo[400],
        color: grey[100],
    },
    media: {
        height: 0,
        paddingTop: '80%',
    },
}))

export default function CreatorsUser({ el }) {
    const classes = useStyles()

    return (
        <Link to={`/profile/${el._id}`}>
            <Card className={classes.root} id={styles.media} key={el?.id}>
                <CardMedia className={classes.media} image={el?.image} />
                <CardHeader title={`${el?.lastName} ${el?.firstName}`} />
                <CardContent>
                    <Typography variant="body2">{el?.date}</Typography>
                </CardContent>
            </Card>
        </Link>
    )
}
