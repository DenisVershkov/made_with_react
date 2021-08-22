import { useParams} from 'react-router-dom'
import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Avatar, IconButton, TextField} from '@material-ui/core';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import {setComment} from "../../redux/actions/comment.ac"
import { Divider, Paper } from "@material-ui/core";
import CommentCard from './CommentCard'
import {getAllComments} from '../../redux/actions/comment.ac'


const useStyles = makeStyles(theme => ({
  margin: {
    marginTop: 50,
  },  
}));

export default function Comment() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const comments = useSelector((state) => state.comment)
  const currentUser = useSelector(state => state.user)
  const error = useSelector((state) => state.error)
  const user = useSelector((state) => state.user)
  const [input, setInput] = useState('')
  const [showInput, setShowInput] = useState(false)
  const { projectId } = useParams()
  

  useEffect(() => {
    dispatch(getAllComments(projectId))
  }, [])
  
  const clickHandler = (e) => {
    e.stopPropagation()
    if(input.length > 0 ){
      if(e.currentTarget.dataset.id === "head-input"){
        let parentId;
        dispatch(setComment(projectId, user?.id, input, parentId, error))
        setInput('')
      } else{
        const parentId = e.currentTarget.dataset.id;
        dispatch(setComment(projectId, user?.id, input, parentId, error))
        setInput('')
      }
    }
}

  const hadleChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} style={{width: '100%', maxWidth: '600px'}} method="POST" className={classes.margin} >
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
          <Avatar alt="Remy Sharp"  src={currentUser?.image}/>
          </Grid>
          <Grid item>
            <TextField onChange={(e) => hadleChange(e)} value={input} id="input-with-icon-grid" label="Прокомментировать" />
          </Grid>
        <IconButton onClick={clickHandler} data-id="head-input" type="submit" color="secondary">
          <ChevronRightOutlinedIcon />
        </IconButton>
        <Grid container direction='column'>
        <div style={{ padding: 14 }} className="App">
      <h1>Comments</h1>
      <Paper style={{ padding: " 0 20px", width: '100%' }}>
        
      {
        comments.length && user ?
          comments.map(comment => 
        <CommentCard key={comment?._id} isRoot clickHandler={clickHandler} hadleChange={hadleChange} comment={comment}/> )
        : <p>Данный проект еще никто не комментировал</p>
        
        }

      </Paper>
      </div>
        </Grid>
        </Grid>
      </form>
      </>
  );
}
