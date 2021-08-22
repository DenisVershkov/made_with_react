import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AnotherUserInfo } from '../../redux/actions/AnotherProfileReducer.ac'
import styles from './About.module.css'

const About = ({user}) => {
    const currentUser = useSelector(state => state.user)
    const anotherUser = useSelector(state => state?.AnotherUser?.about)

    const dispatch = useDispatch()
    const {id} = useParams()

    useEffect(() => {
        dispatch(AnotherUserInfo(id))
    }, [id])


    return (
        <>
            <div className={styles.about_container}>
                <div className={styles.about_item}>
                    <h3 className={styles.about_title}>Немного текста о себе</h3>
                    <p className={styles.about_subtitle}>{id == currentUser?.id ? currentUser?.info?.about : anotherUser}</p>
                </div>
            </div>
        </>
    )
}

export default About
