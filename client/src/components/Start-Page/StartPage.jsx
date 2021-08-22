import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import Projects from './parts/Projects'
import { getAllProjects } from '../../redux/actions/projects.ac'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Header from './parts/Header'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { checkAuth } from '../../redux/actions/user.ac'


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url()`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
}))

const StartPage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const classes = useStyles()
    const error = useSelector((state) => state.errors)
    const state = useSelector((state) => state.projects)
    const errors = useSelector((state) => state.errors)
  
    useEffect(() => {
      dispatch(checkAuth(history, errors))
        dispatch(getAllProjects(error))
    }, [])

    const [searchText, setSearchText] = useState('')
    const [content, setContent] = useState()
    const [flag, setFlag] = useState('')


    useEffect(() => {
        setContent(state)
    }, [state])

    useEffect(() => {
        if (searchText.length > 0) {
            const sortedContent = state.reduce((acc, item) => {
               const sortedItems = item.hashtags.filter(el => el.toLowerCase().includes(searchText.toLocaleLowerCase()))
               if(sortedItems.length > 0) {
                   acc.push(item)
                   return acc
               } return acc
            }, []) 
            setContent(sortedContent)
        } else {
            setContent(state)
        } 
    }, [searchText])

    useEffect(() => {
        if (flag === 'views') {
            const sortItems = [...content].sort((a, b) => b.views.length - a.views.length)
            setContent(sortItems)
        } else if (flag === 'date') {
            const sortItems1 = [...content].sort((a, b) => b.date - a.date)
            setContent(sortItems1)
        }
    }, [flag])

    function changeHandler(e) {
        if (e.currentTarget.id === 'searchText') {
            setSearchText(e.currentTarget.value)
        } else {
            if (e.target.value === 'views') {
                setFlag('views')
            } else if (e.target.value === 'date') {
                setFlag('date')
            }
        }
    }
    
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header changeHandler={changeHandler} searchText={searchText}  />
            <Projects content={content}/>
        </div>
    )
}

export default StartPage
