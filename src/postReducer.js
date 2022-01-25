const initialState = {
  data: [],
  error: "",
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POSTS_SUCCESS":
      return {
        ...state,
        data: action.payload,
      };
    case "SET_POSTS_ERROR":
      return {
        ...state,
        error: action.payload.message,
      };
    default:
      return initialState;
  }
};
