import { PROJECT_COMMENT, INIT_PROJECT_COMMENT } from "../types/projectsTypes";

const commentReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case PROJECT_COMMENT: {
      const { comment } = payload;
      return comment;
    }
    case INIT_PROJECT_COMMENT: {
      const { comment } = payload;
      console.log(comment)
    }
    default: {
      return state;
    }
  }
}

export default commentReducer;
