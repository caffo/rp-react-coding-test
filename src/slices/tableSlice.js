import axios from 'axios';

const LOAD = 'table/load';
const LOAD_COMPLETE = 'table/loadComplete';
const LOAD_ERROR = 'table/loadError';

export const initialState = {
  isLoading: false,
  error: null,
  table: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        isLoading: true,
      };
    case LOAD_COMPLETE:
      return {
        isLoading: false,
        table: action.payload,
      };
    case LOAD_ERROR:
      return {
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export function load() {
  return {
    type: LOAD,
  };
}

export function loadError(error) {
  return {
    type: LOAD_ERROR,
    payload: error,
  }
}

export function loadComplete(table) {
  return {
    type: LOAD_COMPLETE,
    payload: table,
  };
}

export function loadTable(id) {
  return (dispatch) => {
    dispatch(load());
    return axios.get(`https://storage.googleapis.com/replaypoker-dummy-api/tables/${id}.json`)
      .then(response => dispatch(loadComplete(response.data)))
      .catch(error => dispatch(loadError(error.message)));
  }
}
