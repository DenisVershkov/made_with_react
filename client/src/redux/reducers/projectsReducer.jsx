import { PROJECTS_INIT} from "../types/projectsTypes";

const projectsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case PROJECTS_INIT: {
      const { projects } = payload;
      return projects;
    }
    
    default: {
      return state;
    }
  }
}

export default projectsReducer;
