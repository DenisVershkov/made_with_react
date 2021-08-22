import React, { useEffect} from "react";
import styles from './style.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from "react-router-dom";
import {makeStyles, MenuItem, Toolbar, IconButton,} from "@material-ui/core";
import { AppBar } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { checkAuth, signOut } from "../../redux/actions/user.ac";
import { indigo } from '@material-ui/core/colors'


const useStyles = makeStyles((theme) => ({
  media: {
    height: 80,
    width: 80,
  },
  mediaSignIn: {
    height: 80,
    width: 80,
    marginLeft: '10%',
  },
  root: {
    // background: 'linear-gradient(45deg, #ff4553 30%, #5c6bc0 60%)',
    // borderColor: "#5c6bc0",
    borderRadius: "7%",
    color: indigo[700],
    height: 46,
    padding: '0 30px',
  },
  row: {
    height: 80,
    display: "flex",
    justifyContent: "space-between"
  },
  list: {
    width: 200,
  },
  fullList: {
    width: 'auto',
  },
  sort: {
    '& .MuiFormControl-root' : {
      width: '100%'
    }
  }
}));

export default function Navbar({searchText, changeHandler}) {
  const classes = useStyles();
  const errors = useSelector((state) => state.errors)
  const user = useSelector((state) => state.user)
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    checkAuth(history, errors)
  }, [])

  const signOutHandler = (e) => {
    dispatch(signOut())
  }

  return (
    <React.Fragment >
      <AppBar style={{ backgroundColor: "whitesmoke"}}>
          <Grid container spacing={1} direction='column' justifyContent="space-between">

          <Toolbar className={classes.row}>

            {history.location.pathname === '/' &&
            
            <Grid container spacing={4} direction='row' alignItems='center' justifyContent='flex-start'>
            <Grid item xs={5} >
            <TextField id="searchText" style={{ margin: 8 }} placeholder="Поиск" fullWidth onChange={changeHandler} margin="normal" InputLabelProps={{ shrink: true, }} variant="outlined"
                          value={searchText} className={classes.textField} /></Grid>
            <Grid item xs={3} className={classes.sort}>
            <FormControl variant="outlined" className={classes.formControl} >
            <InputLabel id="demo-simple-select-outlined-label"> Сортировка</InputLabel>
            <Select onChange={changeHandler} className={classes.select} labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" label="Сортировка">
            <MenuItem value=""> <em> Без сортировки</em> </MenuItem>
            <MenuItem value={'date'}> Сначала новое</MenuItem>
            <MenuItem value={'views'}> По количеству просмотров </MenuItem>
            </Select>
            </FormControl>
            </Grid>
            </Grid>
            }
            {/* <p style={{color: "#0f217d", fontFamily: "Arial"}}>Made by Elbrus</p> */}
          {!user ? 
            <Grid container spacing={2} direction='row' justifyContent='flex-end'>
            <Link to='/'><IconButton id={styles.media} className={classes.root} color="inherit">Главная</IconButton></Link>
            <Link to="/auth"><IconButton id={styles.media} className={classes.root} color="inherit" >Войти</IconButton></Link>
          </Grid>
          :
            <Grid container spacing={2} direction='row' justifyContent='flex-end'>
            <Grid item><Link to='/'><IconButton id={styles.media} className={classes.root} color="inherit">Главная</IconButton></Link></Grid>
            <Grid item><Link to={`/profile/${user?.id}`}><IconButton id={styles.media} className={classes.root} color="inherit">Профиль</IconButton></Link></Grid>
            <Grid item><Link to="/auth"><IconButton id={styles.media} onClick={signOutHandler} className={classes.root} color="inherit" >Выйти</IconButton></Link></Grid>
          </Grid>}
          
          
        </Toolbar>
          </Grid>

        </AppBar>
    </React.Fragment>
  );
}
