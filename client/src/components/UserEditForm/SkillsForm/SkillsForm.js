import CheckIcon from '@material-ui/icons/Check';
import Button from '@material-ui/core/Button';
import styles from './styles.module.css';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { makeStyles } from '@material-ui/core';
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import UserEditSlider from '../UserEditSlider/UserEditSlider';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateSkills } from '../../../redux/actions/user.ac';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    button: {
        marginTop: '15px',
        width: '140px'
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
    form: {
        margin: '0 auto'
    },
    IconButton: {

    },
    formGrop: {
        marginLeft: '8%',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    label: {
        textAlign: 'center'
    },
    checkbox: {
        width: '25%',
        marginButton: '10%',
        margin: '0 auto',
    }
}));

const SkillsForm = ({ previousPageButtonHandler, nextPageButtonHandler }) => {
    const classes = useStyles();
    const [skills, setSkills] = useState({
        JavaScript: false,
        React: false,
        NodeJS: false,
        Vue: false,
        Angular: false,
        HBS: false,
        Pyton: false,
        Haskell: false,
    });

    const dispatch = useDispatch()
    const { id } = useParams()

    const [inputValue, setInputValue] = useState({ Javascript: 0, NodeJS: 0, Vue: 0, React: 0, Angular: 0, HBS: 0, Pyton: 0, Haskell: 0 })
    const { JavaScript, React, NodeJS, Vue, Angular, HBS, Pyton, Haskell } = skills;

    const handleSkillChange = (event) => {
        setSkills({ ...skills, [event.target.name]: event.target.checked });
    };

    const handleSliderChange = (e, value) => {
        setInputValue({ ...inputValue, [e.currentTarget.id || e.target.ariaLabel]: value })
    }


    function onSubmit(e) {
        e.preventDefault()
        const obj = { ...inputValue }
        dispatch(updateSkills(id, obj))
    }

    return (
        <>
            <form onSubmit={onSubmit} className={classes.form} noValidate autoComplete="off">
                <div className={styles.formContainer}>
                    <FormControl component="fieldset">
                        <FormLabel className={classes.label} component="legend">Выбери</FormLabel>
                        <FormGroup className={classes.formGrop}>
                            <FormControlLabel
                                className={classes.checkbox}
                                control={
                                    <Checkbox

                                        checked={JavaScript}
                                        onChange={handleSkillChange}
                                        name="JavaScript"
                                    />
                                }
                                label="JavaScript"
                            />
                            {JavaScript ? (<UserEditSlider aria='Javascrip' id={'Javascript'} handleClickChange={handleSliderChange} handleSliderChange={handleSliderChange} inputValue={inputValue.Javascript} />) : null}
                            <FormControlLabel
                                className={classes.checkbox}
                                control={
                                    <Checkbox
                                        checked={NodeJS}
                                        onChange={handleSkillChange}
                                        name="NodeJS"
                                    />
                                }
                                label="NodeJS"
                            />
                            {NodeJS ? (<UserEditSlider aria='NodeJS' id={'NodeJS'} handleClickChange={handleSliderChange} handleSliderChange={handleSliderChange} inputValue={inputValue.NodeJS} />) : null}
                            <FormControlLabel
                                className={classes.checkbox}
                                control={
                                    <Checkbox
                                        checked={Vue}
                                        onChange={handleSkillChange}
                                        name="Vue"
                                    />
                                }
                                label="Vue"
                            />
                            {Vue ? (<UserEditSlider aria={'Vue'} id={'Vue'} handleClickChange={handleSliderChange} handleSliderChange={handleSliderChange} inputValue={inputValue.Vue} />) : null}
                            <FormControlLabel
                                className={classes.checkbox}
                                control={
                                    <Checkbox
                                        checked={React}
                                        onChange={handleSkillChange}
                                        name="React"
                                    />
                                }
                                label="React"
                            />
                            {React ? (<UserEditSlider aria={'React'} id={'React'} handleClickChange={handleSliderChange} handleSliderChange={handleSliderChange} inputValue={inputValue.React} />) : null}
                            <FormControlLabel
                                className={classes.checkbox}
                                control={
                                    <Checkbox
                                        checked={Angular}
                                        onChange={handleSkillChange}
                                        name="Angular"
                                    />
                                }
                                label="Angular"
                            />
                            {Angular ? (<UserEditSlider aria={'Angular'} id={'Angular'} handleClickChange={handleSliderChange} handleSliderChange={handleSliderChange} inputValue={inputValue.Angular} />) : null}
                            <FormControlLabel
                                className={classes.checkbox}
                                control={
                                    <Checkbox
                                        checked={HBS}
                                        onChange={handleSkillChange}
                                        name="HBS"
                                    />
                                }
                                label="HBS"
                            />
                            {HBS ? (<UserEditSlider aria={'HBS'} id={'HBS'} handleClickChange={handleSliderChange} handleSliderChange={handleSliderChange} inputValue={inputValue.HBS} />) : null}
                            <FormControlLabel
                                className={classes.checkbox}
                                control={
                                    <Checkbox
                                        checked={Pyton}
                                        onChange={handleSkillChange}
                                        name="Pyton"
                                    />
                                }
                                label="Pyton"
                            />
                            {Pyton ? (<UserEditSlider aria={'Pyton'} id={'Pyton'} handleClickChange={handleSliderChange} handleSliderChange={handleSliderChange} inputValue={inputValue.Pyton} />) : null}

                            <FormControlLabel
                                className={classes.checkbox}
                                control={
                                    <Checkbox
                                        checked={Haskell}
                                        onChange={handleSkillChange}
                                        name="Haskell"
                                    />
                                }
                                label="Haskell"
                            />
                            {Haskell ? (<UserEditSlider aria={'Haskell'} id={'Haskell'} handleClickChange={handleSliderChange} handleSliderChange={handleSliderChange} inputValue={inputValue.Haskell} />) : null}
                        </FormGroup>
                    </FormControl>
                    <div className={styles.button_group}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            type='submit'
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

export default SkillsForm