import {
  FETCH_MOVIE,
  FETCH_POPULAR,
  FETCH_GENRES,
  SEARCH_MOVIES,
} from "./../constants/actionTypes";

const initialState = {
  movie: {},
  page: 1,
  totalMovies: 0,
  totalPages: 0,
  results: [],
  genres: {}
};

function movieReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIE:
    case SEARCH_MOVIES:
      // Deliberate fall-throughs
    case FETCH_POPULAR:
      return Object.assign({}, state, action.payload);
      // state.push(action.payload);
    case FETCH_GENRES:
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