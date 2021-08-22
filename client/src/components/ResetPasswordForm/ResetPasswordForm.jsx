import './ResetPasswordForm.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { updatePassword } from '../../redux/actions/user.ac'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
        marginTop: '250px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    textField: {
        width: '300px',
    },
    button: {
        // height: '50px',
        margin: '8',
    },
    divv: {
        paddingBottom: '16px',
    },
}))

const ResetPasswordForm = () => {
    const [password, setPassword] = useState({ password: '' })
    const dispatch = useDispatch()
    let history = useHistory()
    let { link } = useParams()
    const error = useSelector((state) => state.error)
    const classes = useStyles()

    function changeHandler(e) {
        // const field = e.currentTarget.dataset.id
        const newValue = e.currentTarget.value
        setPassword((prev) => ({ ...prev, ['password']: newValue }))
    }

    function submitHandler(e) {
        e.preventDefault()
        dispatch(updatePassword(link, error, history, password))
    }

    return (
        <form onSubmit={submitHandler} className={classes.root}>
            <div>
                <TextField
                    id="searchText"
                    style={{ margin: 8 }}
                    placeholder="Введите новый пароль"
                    fullWidth
                    onChange={changeHandler}
                    data-id="password"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    type="password"
                    className={classes.textField}
                />
            </div>
            <div className={classes.divv}>
                <Button
                    className={classes.button}
                    variant="contained"
                    color="secondary"
                    type="submit"
                >
                    <strong>Подтвердить</strong>
                </Button>
            </div>
        </form>
    )
}

export default ResetPasswordForm
