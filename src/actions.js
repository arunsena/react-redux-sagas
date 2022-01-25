export const setPostsSuccess = (action) => {
  return { type: "SET_POSTS_SUCCESS", payload: action };
};

export const fetchPosts = () => {
  return { type: "FETCH_POSTS" };
};

export const setPostsError = (action) => {
  return { type: "SET_POSTS_ERROR", payload: action };
};
