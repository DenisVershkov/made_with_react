import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Avatar, IconButton, TextField} from '@material-ui/core';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import {useState} from 'react';
import { useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {setComment} from "../../redux/actions/comment.ac"

const useStyles = makeStyles(theme => ({
  margin: {
    marginTop: 50,
  },
  rootCommentCard: {
    paddingTop: 20,
    width: '100%',
    position: 'relative',
    borderBottom: '1px solid #bdbdbd'
  },
  commentCard: {
    paddingTop: 20,
    width: '100%',
    position: 'relative',
  },
  childComment: {
    marginLeft: 100,
    marginBottom: 24
  }
  
}));

const CommentCard = ({comment, type,isRoot = false}) => {
  const [input, setInput] = useState('')
  const [showInput, setShowInput] = useState(false)
  const classes = useStyles();
  const dispatch = useDispatch()
  const error = useSelector((state) => state.error)
  const user = useSelector((state) => state.user)
  const { projectId } = useParams()

const hadleChange = (e) => {
  setInput(e.target.value);
}

const clickHandler = (e) => {
  e.stopPropagation()
  if(input.length > 0 ){
      setShowInput(true)
      const parentId = e.currentTarget.dataset.id;
      dispatch(setComment(projectId, user?.id, input, parentId, error))
      setInput('')
      setShowInput(false)
  } else{
    setShowInput(true)
  }
}

  const nestedComments = (comment?.children || []).map(childComment => {
    return <CommentCard key={childComment._id} hadleChange={hadleChange} clickHandler={clickHandler} comment={childComment} type="childComment" input={input}/>
  })

    return (
        <div className={`${isRoot ? classes.rootCommentCard : classes.commentCard} ${classes[type]}`}>
        <Grid container wrap="nowrap" spacing={2} direction='column'>
          <Grid item>
            <Avatar alt="Remy Sharp" src={comment?.authorId?.image} />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth >
            <h4 style={{ margin: 0, textAlign: "left" }}>{comment?.authorId?.username}</h4>
            <p style={{ textAlign: "left" }}>
   {comment?.text}
            </p>
            <p style={{ textAlign: "left", color: "gray"}}>
              
            </p>
            {user?.id !== comment?.authorId?._id &&
            <a style={{cursor: 'pointer'}} onClick={clickHandler} >
              Ответить
        </a>
}
          </Grid>
          <Grid container item xs style={{display: 'flex'}}>
            {showInput &&
            <>
        <TextField  onChange={(e) => hadleChange(e)} value={input} style={{flexGrow: 1}} id="outlined-basic" label='ответ' variant="outlined"  multiline />
        <IconButton data-id={comment?._id} onClick={clickHandler} type="submit" color="secondary">
          <ChevronRightOutlinedIcon />
        </IconButton>
        </>
}
        {nestedComments}
        </Grid>
        </Grid>
      </div>
    )
}

export default CommentCard