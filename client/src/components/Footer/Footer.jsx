import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(2, 0),
    marginTop: '200px',
    // marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
      <footer className={classes.footer}>
        <Container >
        <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Made by DDVK
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
        </Container>
      </footer>
  );
}
