import { useParams, useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './style.module.css'
import {
    getOneProjects,
    likeProject,
    viewsProject,
} from '../../redux/actions/projects.ac'
import CreatorsUser from '../CreatorsUser/CreatorsUser'
import { Carousel } from '3d-react-carousal'
import { checkAuth } from '../../redux/actions/user.ac'
import ProjectsCard from '../ProjectsCard/ProjectsCard.jsx'
import IconButton from '@material-ui/core/IconButton'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ScrollToTop from '../ScrollToTop/ScrollToTop'
import Comment from '../Comment/Comment'
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen'
import { grey, blue, pink, indigo } from '@material-ui/core/colors'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import GitHubIcon from '@material-ui/icons/GitHub'

export default function ProjectProfile() {
    const dispatch = useDispatch()
    const project = useSelector((state) => state?.project)
    const projects = useSelector((state) => state?.projects)
    const errors = useSelector((state) => state?.errors)
    const user = useSelector((state) => state?.user)
    const comment = useSelector((state) => state?.comment)
    const history = useHistory()

    const { projectId } = useParams()

    useEffect(() => {
        dispatch(checkAuth(history, errors))
        dispatch(getOneProjects(projectId, errors))
        dispatch(viewsProject(projectId))
    }, [projectId])

    let slides = project?.image?.map((el) => {
        return <img src={el} className={styles.imageCarousel} alt="logo" />
    })

    const handleLike = (projectId, user) => {
        dispatch(likeProject(projectId, user))
    }

    return (
        <>
            <div className={styles.projectContainer}>
                <div className={styles.imageContainer}>
                    {project?.image?.length > 0 && (
                        <Carousel
                            navButtonsProps={{
                                style: {
                                    color: 'black',
                                },
                            }}
                            slides={slides}
                        />
                    )}
                </div>

                <div className={styles.title}>
                    <h1 style={{ margin: 0 }}>{project?.title}</h1>
                    <div>
                        <IconButton
                            onClick={() => handleLike(projectId, user)}
                            id={project?._id}
                        >
                            <FavoriteIcon fontSize="large" color="secondary" />
                            <ScrollToTop />
                        </IconButton>
                        {project?.likes.length}
                        <IconButton>
                            <VisibilityOutlinedIcon
                                fontSize="large"
                                style={{ color: grey[900] }}
                            />
                        </IconButton>
                        {project?.views?.length}
                    </div>
                </div>

                <b className={styles.text}>О ПРОЕКТЕ </b>
                <br />
                <div className={styles.about}>
                    <p>{project?.description}</p>
                </div>
                <div className={styles.web}>
                    <a href={project?.website}>
                        <IconButton>
                            <AddToHomeScreenIcon
                                fontSize="large"
                                style={{ color: grey[700] }}
                            />
                        </IconButton>
                    </a>
                    <a href={project?.gitHub}>
                        <IconButton>
                            <GitHubIcon
                                fontSize="large"
                                style={{ color: grey[500] }}
                            />
                        </IconButton>
                    </a>
                    <a href={project?.twitter}>
                        <IconButton>
                            <TwitterIcon
                                fontSize="large"
                                style={{ color: blue[600] }}
                            />
                        </IconButton>
                    </a>
                    <a href={project?.instagram}>
                        <IconButton>
                            <InstagramIcon
                                fontSize="large"
                                style={{ color: pink[400] }}
                            />
                        </IconButton>
                    </a>
                    <a href={project?.facebook}>
                        <IconButton>
                            <FacebookIcon
                                fontSize="large"
                                style={{ color: indigo[500] }}
                            />
                        </IconButton>
                    </a>
                </div>
                <hr style={{ width: '1400px' }} />
                <b className={styles.text}>
                    {project?.creators?.length > 1 ? 'СОЗДАТЕЛИ' : 'СОЗДАТЕЛЬ'}
                </b>
                <div>
                    <div className={styles.conteinerUser}>
                        {project?.creators?.map((el) => {
                            return <CreatorsUser el={el} />
                        })}
                    </div>
                </div>
                <hr style={{ width: '1400px' }} />
                <b className={styles.text}>ПРОЕКТЫ ЭТОГО ВЫПУСКА</b>
                <div className={styles.conteinerUser}>
                    {projects.map((el) => {
                        return <ProjectsCard el={el} />
                    })}
                </div>
                <hr style={{ width: '1400px' }} />
                <b className={styles.text}>КОММЕНТАРИИ К ПРОЕКТУ</b>
                <div className={styles.comment}>
                    <Comment />
                </div>
            </div>
        </>
    )
}
