import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CheckIcon from '@material-ui/icons/Check';
import Button from '@material-ui/core/Button';
import styles from './styles.module.css';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { updateInformation } from '../../../redux/actions/user.ac';
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    button: {
        marginTop: '15px',
        width: '140px',
        marginBottom: "15px",
    },
    TextField: {
        marginTop: '15px',
        width: '80%',
        margin: '0 auto',
        display: 'flex',
        backgroundColor: 'white',
    },
    TextField_first: {
        marginTop: '15px',
        width: '100%',
        backgroundColor: 'white',
    },
    formContainer: {
        margin: '0 auto',
    },
    IconButton: {
    }
}));
const InformationForm = ({ previousPageButtonHandler, nextPageButtonHandler }) => {
    const data = useSelector(state => state.user?.info)
    const [inputData, setInputData] = useState(null)
    useEffect(() => {
        setInputData(data)
    }, [])

    const preloadedValues = {
        firstName: inputData?.firstName,
        middleName: inputData?.middleName
    }
    const classes = useStyles();
    const { handleSubmit, control } = useForm();
    const dispatch = useDispatch()
    const { id } = useParams()
    const onSubmit = (data) => dispatch(updateInformation(id, data))
    const inputToStorage = () => {

    }


    return (
        <><form onSubmit={handleSubmit(onSubmit)} className={classes.formContainer} noValidate autoComplete="off">
            <div className={styles.formContainer}>
                <span className={styles.formSpan}>Редактирование профиля</span>
                <Controller
                    name="firstName"
                    control={control}
                    defaultValue={data?.firstName}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            label="Имя"
                            variant="filled"
                            value={value}
                            onChange={onChange}
                            className={classes.TextField_first}
                        />
                    )}
                />

                <Controller
                    name="middleName"
                    control={control}
                    defaultValue={data?.middleName}
                    className={classes.TextField_first}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            label="Отчество"
                            variant="filled"
                            value={value}
                            onChange={onChange}
                            className={classes.TextField_first}
                        />
                    )}
                />
                <Controller
                    name="lastName"
                    control={control}
                    defaultValue={data?.lastName}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            label="Фамилия"
                            variant="filled"
                            value={value}
                            onChange={onChange}
                            className={classes.TextField_first}
                        />
                    )}
                />
                <Controller
                    name="about"
                    control={control}
                    defaultValue={data?.about}
                    className={classes.TextField_first}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            label="О себе"
                            variant="filled"
                            value={value}
                            onChange={onChange}
                            className={classes.TextField_first}
                        />
                    )}
                />

                <Controller
                    name="location"
                    control={control}
                    defaultValue={data?.location}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            label="Город"
                            variant="filled"
                            value={value}
                            onChange={onChange}
                            className={classes.TextField_first}
                        />
                    )}
                />
                <Controller
                    name="job"
                    control={control}
                    defaultValue={data?.job}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            label="Работа"
                            variant="filled"
                            value={value}
                            onChange={onChange}
                            className={classes.TextField_first}
                        />
                    )}
                />
                <Controller
                    name="gitHub"
                    control={control}
                    defaultValue={data?.gitHub}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            label="GitHub"
                            variant="filled"
                            value={value}
                            onChange={onChange}
                            className={classes.TextField_first}
                        />
                    )}
                />
                <Controller
                    name="twitter"
                    control={control}
                    defaultValue={data?.twitter}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            label="Twitter"
                            variant="filled"
                            value={value}
                            onChange={onChange}
                            className={classes.TextField_first}
                        />
                    )}
                />
                <Controller
                    name="instagram"
                    control={control}
                    defaultValue={data?.instagram}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            label="Instagram"
                            variant="filled"
                            value={value}
                            onChange={onChange}
                            className={classes.TextField_first}
                        />
                    )}
                />
                <Controller
                    name="facebook"
                    control={control}
                    defaultValue={data?.facebook}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            label="Facebook"
                            variant="filled"
                            value={value}
                            onChange={onChange}
                            className={classes.TextField_first}
                        />
                    )}
                />
                <div className={styles.button_group}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        type="submit"
                        className={classes.button}
                        endIcon={<CheckIcon />}
                    >
                        Сохранить
                    </Button>
                    <div className={styles.IconButtons}>
                        <Button onClick={previousPageButtonHandler}>
                            <IconButton className={classes.IconButton} aria-label="delete" disabled color="primary">
                                <ChevronLeftIcon />
                            </IconButton>
                        </Button>
                        <Button onClick={nextPageButtonHandler}>
                            <IconButton aria-label="delete" disabled color="primary">
                                <ChevronRightIcon />
                            </IconButton>
                        </Button>
                    </div>
                </div>
            </div>
        </form>
        </>
    )
}
export default InformationForm
