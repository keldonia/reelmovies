import {
  UPDATE_MOVIES,
  FETCH_POPULAR,
  FETCH_GENRES
} from "./../constants/actionTypes";

const initialState = {
  page: 1,
  totalMovies: 0,
  totalPages: 0,
  results: [],
  genres: {}
};

function movieReducer (state = initialState, action) {
  switch (action.type) {
    case UPDATE_MOVIES:
      state.push(action.payload);
      break;
    case FETCH_POPULAR:
      console.log(action);
      return Object.assign({}, state, action.payload);
      // state.push(action.payload);
    case FETCH_GENRES:
      console.log(action);
      return Object.assign({}, state, mapGenres(action.payload.genres));
  }

  return state;
}

function mapGenres (genres) {
  let genreMap = {};
  let returnObj = {};

  genres.forEach(genre => {
    genreMap[genre.id] = genre.name;
    genreMap[genre.name] = genre.id;
  });

  returnObj.genres = genreMap;

  return returnObj;
}

export default movieReducer;