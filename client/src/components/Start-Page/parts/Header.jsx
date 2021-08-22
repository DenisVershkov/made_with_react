import React, { useState, useEffect } from "react";
import {makeStyles, IconButton,
   Collapse} from "@material-ui/core";
   import { Link as Scroll } from 'react-scroll';
   import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
   import Navbar from '../../Navbar/Navbar'

const useStyles = makeStyles((theme) => ({
  media: {
    height:70,
    width: 70,
    borderRadius: "50px",
  },
  head: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    overflow: 'hidden',
    position: 'relative',
    fontFamily: 'Nunito',
  },
  row: {
    display: "flex",
    justifyContent: "space-between"
  },
  list: {
    width: 200,
  },
  fullList: {
    width: 'auto',
  },
  colorText: {
    fontFamily: "Arial",
    color: '#0f217d',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#0f217d',
    fontSize: '4.5rem',
    fontFamily: "Arial",
    position: 'relative'
  },
  goDown: {
    color: '#0f217d',
    fontSize: '4rem',
  },
  video: {
    position: 'absolute',
    opacity: '0.5',
    width: '100%',
    top: '0',
    height: '100%',
    objectFit: 'cover'
  }
}));

export default function Header({changeHandler, searchText}) {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  const classes = useStyles();

  return (
      <div className={classes.head} id="header">
        <Navbar changeHandler={changeHandler} searchText={searchText} />
        <video className={classes.video} src="https://elbrusboot.camp/images/index.mp4" muted loop autoPlay>
          </video>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            <span className={classes.colorText}>Made with React.</span>
          </h1>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
      </div>
  );
}
