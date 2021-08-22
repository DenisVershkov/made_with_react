import { PROJECT_EDIT, PROJECT_CREATE, PROJECT_ONE, PROJECT_LIKE, SET_PROJECT_IMG, PROJECT_VIEWS } from "../types/projectsTypes";

const projectReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case PROJECT_ONE: {
      const { project } = payload;
      return project;
    }
    case PROJECT_LIKE: {
      const { project } = payload;
      return project;
    }
    case PROJECT_VIEWS: {
      const { project } = payload;
      return project;
    }
    case PROJECT_CREATE: {
      const { project } = payload;
      const newState = [...state, project];
      return newState
    }
    case PROJECT_EDIT: {
      const { project } = payload;
      return project;
    }

    case SET_PROJECT_IMG:
      return {...state, image: action.payload.url}
    default: {
      return state;
    }
  }
}

export default projectReducer;
