import { disableLoader, enableLoader } from './loader.ac'
import { setError, deleteError } from './errors.ac'
import {PROJECTS_INIT,PROJECT_DELETE,PROJECT_EDIT,PROJECT_CREATE, PROJECT_ONE, PROJECT_LIKE, SET_PROJECT_IMG, PROJECT_VIEWS} from '../types/projectsTypes'
import ProjectsService from '../../services/ProjectsService'
import axios from 'axios'

const projectOne = (project) => ({
    type: PROJECT_ONE,
    payload: { project },
})


const projectsInit = (projects) => ({
    type: PROJECTS_INIT,
    payload: { projects },
})

const projectLike = (project) => ({
    type: PROJECT_LIKE,
    payload: { project },
})

const projectViews = (project) => ({
    type: PROJECT_VIEWS,
    payload: { project },
})

const projectEdit = (project) => ({
    type: PROJECT_EDIT,
    payload: { project },
})


export const projectCreate = (project) => ({
    type: PROJECT_CREATE,
    payload: { project },
})

export const setProjectImg = (url) => ({
    type: SET_PROJECT_IMG,
    payload: {url},
})


export const likeProject = (id, user, errors) => async (dispatch) => {
    dispatch(enableLoader())
    try {
        const response = await ProjectsService.getLikeProjects(id, user)
        dispatch(projectLike(response.data))
        if (errors) dispatch(deleteError())
    } catch (error) {
        const message = error?.response?.data?.message
        message
            ? dispatch(setError(message))
            : dispatch(setError('Возникли технические проблемы на сервере'))
    } finally {
        dispatch(disableLoader())
    }
}


export const viewsProject = (projectId, errors) => async (dispatch) => {
  dispatch(enableLoader())
  
  try {
        const responseIp = await axios.get('https://api.ipify.org/?format=json')
        const response = await ProjectsService.updateViewsProject({projectId, userIp: responseIp.data.ip})
        dispatch(projectViews(response.data))
        if (errors) dispatch(deleteError())
  } catch (error) {
      const message = error?.response?.data?.message
      message
          ? dispatch(setError(message))
          : dispatch(setError('Возникли технические проблемы на сервере'))
  } finally {
      dispatch(disableLoader())
  }
}

export const createProject = (payload, errors) => async (dispatch) => {
    dispatch(enableLoader())
    try {
        const response = await ProjectsService.createProject(payload)
        dispatch(projectCreate({ project: response.data }))
        if (errors) dispatch(deleteError())
    } catch (error) {
        const message = error?.response?.data?.message
        message
            ? dispatch(setError(message))
            : dispatch(setError('Возникли технические проблемы на сервере'))
    } finally {
        dispatch(disableLoader())
    }
}

export const getOneProjects = (id, errors) => async (dispatch) => {
    dispatch(enableLoader())
    try {
        const response = await ProjectsService.getOneProjects(id)
        dispatch(projectOne(response.data.project))
        dispatch(projectsInit(response.data.projects))
        if (errors) dispatch(deleteError())
    } catch (error) {
        const message = error?.response?.data?.message
        message
            ? dispatch(setError(message))
            : dispatch(setError('Возникли технические проблемы на сервере'))
    } finally {
        dispatch(disableLoader())
    }
}

export const getAllProjects = (errors) => async (dispatch) => {
    dispatch(enableLoader())
    try {
        const response = await ProjectsService.getAllProjects()
        if (errors) dispatch(deleteError())
        dispatch(projectsInit(response.data))
    } catch (error) {
        const message = error?.response?.data?.message
        message
            ? dispatch(setError(message))
            : dispatch(setError('Возникли технические проблемы на сервере'))
    } finally {
        dispatch(disableLoader())
    }
}

export const editProject = (payload, errors) => async (dispatch) => {
    dispatch(enableLoader())
    try {
        const response = await ProjectsService.editProject(payload)
        dispatch(projectEdit({ project: response.data }))
        if (errors) dispatch(deleteError())
    } catch (error) {
        const message = error?.response?.data?.message
        message
            ? dispatch(setError(message))
            : dispatch(setError('Возникли технические проблемы на сервере'))
    } finally {
        dispatch(disableLoader())
    }
}


