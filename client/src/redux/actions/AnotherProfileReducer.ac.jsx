import { SET_ANOTHER_INFO, PROJECT_DELETE } from '../types/anotherUserTypes'
import { disableLoader, enableLoader } from './loader.ac'
import { setError, deleteError } from './errors.ac'
import UserService from '../../services/UserService';

export const setAnotherUser = (user) => ({
    type: SET_ANOTHER_INFO,
    payload: user,
})

const projectDelete = (id, deletedCard) => ({
    type: PROJECT_DELETE,
    payload: { id, deletedCard },
})

export const AnotherUserInfo = (id, errors) => async (dispatch) => {
    dispatch(enableLoader())
    try {
        const response = await UserService.getUserInfo(id)
        console.log(response.data)
        dispatch(setAnotherUser(response.data))
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

export const deleteProject = (id, errors) => async (dispatch) => {
    dispatch(enableLoader())
    try {
        const response = await UserService.deleteProject(id)
        console.log(response)
        dispatch(projectDelete(id, response.data))
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