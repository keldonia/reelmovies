import {
  FETCH_MOVIE,
  FETCH_POPULAR,
  FETCH_GENRES,
  SEARCH_MOVIES,
  FETCH_CAST
} from "./../constants/actionTypes";

const initialState = {
  movie: {},
  cast: [],
  crew: [],
  page: 1,
  totalMovies: 0,
  totalPages: 0,
  results: [],
  genres: {}
};

function movieReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIE:
      // Deliberate fall-through
    case FETCH_CAST:
      return Object.assign({}, state, action.payload);
    case SEARCH_MOVIES:
      // Deliberate fall-through
    case FETCH_POPULAR:
      return handlePagination(state, action.payload);
    case FETCH_GENRES:
      return Object.assign({}, state, mapGenres(action.payload.genres));
  }

  return state;
}

function handlePagination (state, payload) {
  if (payload && payload.page === 1) {
    return Object.assign({}, state, payload);
  }

  let results = state.results.concat(payload.results);

  payload.results = filterMovies(results);

  return Object.assign({}, state, payload);
}

function filterMovies (movies) {
  let seen = {};
  let output = [];

  movies.forEach(movie => {
    if (!seen[movie.id]) {
      seen[movie.id] = true;
      output.push(movie);
    }
  });

  return output;
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