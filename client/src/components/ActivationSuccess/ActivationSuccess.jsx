import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { confirmAuth } from '../../redux/actions/user.ac'
import { useDispatch } from 'react-redux'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Alert, AlertTitle } from '@material-ui/lab'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
        marginTop: '300px',
        display: 'flex',
        justifyContent: 'center',
    },
    alertik: {
        width: '850px',
        fontSize:"19px",
    },
    alertq:{
      fontSize:"20px"
    }
}))

const ActivationSuccess = () => {
    const [timer, setTimer] = useState(6)
    const dispatch = useDispatch()
    let history = useHistory()
    let { link } = useParams()
    const classes = useStyles()

    useEffect(() => {
        if (timer > 0) {
            setTimeout(() => setTimer(timer - 1), 1000)
        } else {
            dispatch(confirmAuth(link))
            history.replace('/')
        }
    }, [timer])

    return (
      
        <div className={classes.root}>
            <Alert className={classes.alertik} severity="success">
                <AlertTitle className={classes.alertq}><strong>Hey Guys, у нас всё найс!</strong></AlertTitle>
               
                    Вы будете автоматически перенаправлены на главную страницу
                    через {timer}{' '}
                    {timer <= 1 ? 'секунду' : timer < 5 ? 'секунды' : 'секунд'}
                
            </Alert>
        </div>
    )
}

export default ActivationSuccess
