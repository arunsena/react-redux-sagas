import { call, put, takeLatest, all } from "redux-saga/effects";

import { setPostsSuccess, setPostsError } from "./actions";

const fetchPosts = () => {
  return new Promise(function (resolve, reject) {
    const url = "https://jsonplaceholder.typicode.com/posts/";
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => console.log(error));
  });
};

function* getPostsFromApi(action) {
  try {
    const data = yield call(fetchPosts, { response: action.type });

    yield put(setPostsSuccess(data));
  } catch (e) {
    yield put(setPostsError(e));
  }
}

function* getPosts() {
  yield takeLatest("FETCH_POSTS", getPostsFromApi);
}

export default function* rootSaga() {
  yield all([getPosts()]);
}
