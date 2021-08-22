import { makeStyles } from '@material-ui/core/styles'
import styles from './style.module.css'
import { Link, useParams } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import {
    CardHeader,
    CardMedia,
    CardContent,
    Typography,
} from '@material-ui/core'
import { grey, indigo} from '@material-ui/core/colors'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import IconButton from '@material-ui/core/IconButton'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProject } from '../../redux/actions/AnotherProfileReducer.ac' 




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

export default function ProjectsCardForUser({ el }) {
    const classes = useStyles()
    const currentUser = useSelector((state) => state?.user)
    const {id} = useParams()
    const dispatch = useDispatch()

    const handleDeleteProject = (e, el) => {
       if(e.target.dataset.id){
        dispatch(deleteProject(el))
       }
    } 

    return (
        <>
            <Card className={classes.root} id={styles.media} key={el?._id}>
            <Link to={`/projects/${el._id}`} >
                <CardMedia className={classes.media} image={el?.image[0]} />
                <CardHeader title={el?.title}/>
                </Link>
                <CardContent style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                 <Typography variant="body2"> {el?.date} </Typography> 
                
                 <Typography> {id == currentUser?.id &&<IconButton onClick={(e) => handleDeleteProject(e, el?._id)}> 
                            <DeleteOutlineIcon 
                            data-id='delete'
                                fontSize="medium"
                                style={{ color: grey[100] }}
                            />
                        </IconButton>}</Typography>
             </CardContent> 
            </Card>
        </>
  )
}
