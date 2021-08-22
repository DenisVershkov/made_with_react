import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Alert, AlertTitle } from '@material-ui/lab'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
        marginTop: '400px',
        display: 'flex',
        justifyContent: 'center',
    },
    alertik: {
        width: '800px',
        height:"150px",
        fontSize:"19px"
    },
    alertq:{
      fontSize:"20px"
    }
}))

const SignupSuccessMessage = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Alert className={classes.alertik} severity="info">
            <AlertTitle className={classes.alertq}><strong>Эй ты, посмотри на меня!</strong></AlertTitle>
                
                    Для завершения регистрации вам необходимо подтвердить адрес
                    электронной почты. Пожалуйста, проверьте почту и перейдите
                    по ссылке для активации аккаунта.
               
            </Alert>
        </div>
    )
}

export default SignupSuccessMessage
