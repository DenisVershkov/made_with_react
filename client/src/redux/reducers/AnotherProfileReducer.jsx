import { SET_ANOTHER_INFO, PROJECT_DELETE } from "../types/anotherUserTypes"

const AnotherProfileReducer = (state = {}, action) => {

  switch (action.type) {
    
      case SET_ANOTHER_INFO: {
        const{ payload } = action
        console.log(payload)
        const info = {...state, id: payload._id ,firstName: payload.firstName, middleName: payload.middleName, lastName: payload.lastName, about: payload.about, location: payload.location, job: payload.job, gitHub: payload.gitHub, twitter: payload.twitter, instagram: payload.instagram, facebook: payload.facebook, skills: payload.skills, userProjects: payload.userProjects, image: payload.image, email: payload.email }
        return info
      }
    
      case PROJECT_DELETE: {
        const { id } = action.payload;
        const newState = state.userProjects.filter(item => item._id !== id)
        return {...state, userProjects: newState}
      }

    default:
      return state
  }
}

export default AnotherProfileReducer
