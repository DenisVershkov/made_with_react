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
import { grey, indigo} from '@material-ui/core/colors'


const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
        marginBottom: 50,
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

export default function ProjectsCard({ el }) {
  const classes = useStyles()
    return (
        <Link to={`/projects/${el._id}`} >
            <Card className={classes.root} id={styles.media} key={el?._id}>
                <CardMedia className={classes.media} image={el?.image[0]} />
                <CardHeader style={{minHeight: "100px"}} title={el?.title}/>
                <CardContent>
                 <Typography variant="body2"> {el?.date} </Typography> 
             </CardContent> 
            </Card>
        </Link>
  )
}
