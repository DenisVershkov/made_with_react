import React from "react";
import {Link} from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import Grid from "@material-ui/core/Grid";
import { grey, indigo} from '@material-ui/core/colors'


const useStyles = makeStyles({
  root: {
    background: indigo[400],
    margin: "20px",
    borderRadius: '20px',
    minHeight: "505px",
    flexGrow: 1,
  },
  title: {
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#fff",
  },
  desc: {
    fontFamily: "Arial",
    fontSize: "1.1rem",
    color: "#ddd",
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    lineClamp: '2',
    boxOrient: 'vertical',
  },
  media: {
    minHeight: '300px',
  },
  link: {
    fontFamily: "Arial",
    fontSize: "1.1rem",
    color: "#ddd",
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  head: {
    '&:nth-child(-n+3)': {
      marginTop: '100px'
    }
  },
  content:{
    width: "100%",
    height: '100%',
    display: "flex",
    flexDirection: "column",
  },
  cardcontent:{
    marginTop: "auto",
  },
  linkContent: {
    display: 'flex',
     height: '100%',
      width: '100%',
      flexDirection: "column",
  }
});

export default function ImageCard({payload, handleClick, checked}) {
  const classes = useStyles();

  return (
      <Card className={classes.root}>
        <Link className={classes.linkContent} to={`/projects/${payload._id}`}>
        <CardMedia
          className={classes.media}
          image={payload?.image[0]}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            {payload.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {payload.description}
          </Typography>
          <Grid
            container
            className={classes.cardcontent}
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.desc}
            >
              {payload?.hashtags.map((el)=> <Link to='' className={classes.link}>{`#${el} \t`}</Link>)}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.desc}
            >
            </Typography>
          </Grid>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.desc}
            >
            <Typography style={{display: "flex",justifyContent: "space-between", alignItems: "center"}}>
            <Typography>{payload?.date}</Typography>
            <Typography>
              <IconButton>
                <VisibilityOutlinedIcon fontSize="large" style={{color:grey[200]}} />
              </IconButton>{payload?.views?.length}</Typography>
            </Typography>

            </Typography>
        </CardContent>
        </Link>
      </Card>
  );
}
