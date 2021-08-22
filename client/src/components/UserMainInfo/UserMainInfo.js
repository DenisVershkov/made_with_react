import styles from './UserMainInfo.module.css'
import { Button, makeStyles } from '@material-ui/core/'
import EditIcon from '@material-ui/icons/Edit'
import SendIcon from '@material-ui/icons/Send'
import AddIcon from '@material-ui/icons/Add'
import { useDispatch, useSelector } from 'react-redux'
import Helpers from '../../helpers/UploadsHelper'
import { setError } from '../../redux/actions/errors.ac'
import { setUserImg } from '../../redux/actions/user.ac'
import { useState } from 'react'
import { indigo } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
    button: {
        color: 'white',
        marginTop: '10px',
        backgroundColor: indigo[400],
        '& .MuiButton-label': {
            justifyContent: 'end',
        },
        '& .makeStyles-button-10:nth-child(1)': {
            margin: 0,
        },
        '&:hover': {
            backgroundColor: '#FF4268',
        },
    },
    addButton: {
        backgroundColor: indigo[400],
        color: 'white',
        width: '100%',
        height: '36px',
        '& .MuiButton-endIcon': {
            marginLeft: 0,
        },
        '&:hover': {
            backgroundColor: '#FF4268',
        },
    },
    root: {
        marginTop: '5%',
        boxShadow:
            '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 3px 0px -2px rgb(0 0 0 / 12%)',
    },
    photobutton: {
        // backgroundColor: '#4521ab',
        // color: 'white',
    },
}))

const UserMainInfo = ({ handleOpen, handleProjectModalOpen, id }) => {
    const currentUser = useSelector((state) => state?.user)
    const anotherUser = useSelector((state) => state?.AnotherUser)
    const classes = useStyles()
    const dispatch = useDispatch()
    const userPhoto = useSelector((state) => state?.user)
    const [drag, setDrag] = useState(false)
    const flag = 'user'

    function changeHandler(e) {
        const [file] = e.target.files
        if (!file) return
        Helpers.uploadFile(
            flag,
            file,
            dispatch,
            setError,
            setUserImg,
            userPhoto?.id
        )
    }

    function dragStartHandler(e) {
        e.preventDefault()
        setDrag(true)
    }

    function dragLeaveHandler(e) {
        e.preventDefault()
        setDrag(false)
    }

    function onDropHandler(e) {
        e.preventDefault()
        let file = [...e.dataTransfer.files][0]
        setDrag(false)
        Helpers.uploadFile(flag, file, dispatch, setError, setUserImg, id)
    }
    return (
        <>
            <div className={styles.main_info}>
                <div className={styles.img_container}>
                    <div
                        oneDragStart={dragStartHandler}
                        onDragLeave={dragLeaveHandler}
                        onDragOver={dragStartHandler}
                        onDrop={onDropHandler}
                    >
                        <img
                            src={
                                id == currentUser?.id
                                    ? userPhoto?.image || '/profile-user.png'
                                    : anotherUser?.image || '/profile-user.png'
                            }
                            className={styles.user_img}
                            alt=""
                        ></img>
                    </div>
                    <input
                        type="file"
                        id="file"
                        onChange={changeHandler}
                        className={styles.file}
                    />
                    {id == currentUser?.id ? <Button variant="contained" className={classes.button}>
                        <label htmlFor="file">Добавить фото</label>
                    </Button> : null}
                </div>
                <div className={styles.name_and_info_container}>
                    {(<h2 className={styles.user_name}>
                        {id == currentUser?.id ? ((currentUser?.info?.firstName || currentUser?.info?.middleName || currentUser?.info?.lastName) ? (`${currentUser?.info?.firstName} ${currentUser?.info?.middleName} ${currentUser?.info?.lastName}`) : null) : (`${anotherUser?.firstName} ${anotherUser?.middleName} ${anotherUser?.lastName}`)}
                    </h2>)}
                    <div className={styles.location}>
                        <div className={styles.location_name}>
                            {id == currentUser?.id
                                ? currentUser?.info?.location
                                : anotherUser?.location}
                        </div>
                        <img
                            className={styles.location_img}
                            src="/location.png"
                            alt=""
                        ></img>
                    </div>
                    <div className={styles.job}>
                        Место работы:{' '}
                        {id == currentUser?.id
                            ? currentUser?.info?.job
                            : anotherUser?.job}
                    </div>
                </div>
                <div className={styles.button_group__userProfile}>
                    <div className={styles.upButtons}>
                        <Button
                            variant="contained"
                            className={classes.button}
                            endIcon={<SendIcon />}
                        ><a href={`mailto:${anotherUser?.email}`}>Send</a></Button>
                        <div className={styles.falsh}></div>
                        {id == currentUser?.id ? (<Button
                            variant="contained"
                            onClick={handleOpen}
                            className={classes.button}
                            endIcon={<EditIcon />}
                        ></Button>) : null}
                    </div>
                    <div>
                        {id == currentUser?.id ? (<Button
                            variant="contained"
                            onClick={handleProjectModalOpen}
                            className={classes.addButton}
                            endIcon={<AddIcon />}
                        ></Button>) : null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserMainInfo
