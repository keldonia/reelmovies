import axios from "axios";
import {
  UPDATE_MOVIES,
  FETCH_POPULAR,
  FETCH_GENRES
} from "./../constants/actionTypes";

const urls = {
  baseUrl: "http://localhost:8080",
  api: "/api",
  popular: "/popular",
  genres: "/genres"
};

function composeUrl (extension) {
  return urls.baseUrl +
    urls.api +
    urls[extension];
}

export function updateMovies (payload) {
  return { type: UPDATE_MOVIES, payload };
}

export const fetchPopularReturn = payload => ({
  type: FETCH_POPULAR,
  payload
});

export const fetchPopular = (page) => {
  return dispatch => {
    let url = composeUrl("popular");

    axios.get(url, {
      params: {
        page: page
      }
    }).then((res) => {
      console.log(res);
      dispatch(fetchPopularReturn(res.data));
    });
  };
};

export const fetchGenresReturn = payload => ({
  type: FETCH_GENRES,
  payload
});

export const fetchGenres = () => {
  return dispatch => {
    let url = composeUrl("genres");

    axios.get(url)
      .then(res => {
        dispatch(fetchGenresReturn(res.data));
      });
  };
};