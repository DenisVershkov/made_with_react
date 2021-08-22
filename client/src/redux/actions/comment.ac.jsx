import {PROJECT_COMMENT} from '../types/projectsTypes'
import { disableLoader, enableLoader } from './loader.ac'
import { setError, deleteError } from './errors.ac'
import ProjectsService from '../../services/ProjectsService'

const projectComment = (comment) => ({
  type: PROJECT_COMMENT,
  payload: {comment},
})

export const setComment = (projectId, authorId, text, parentId = null, errors) => async (dispatch) => {
  dispatch(enableLoader())
  try {
      const response = await ProjectsService.setCommenttForProject({projectId, authorId, text, parentId})
      dispatch(projectComment(response.data))
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

export const getAllComments = (projectId, errors) => async (dispatch) => {
  dispatch(enableLoader())
  try {
      const response = await ProjectsService.getAllComments({projectId})
      dispatch(projectComment(response.data))
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

