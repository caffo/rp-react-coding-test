import axios from 'axios';

const LOAD = 'poker-table/table/LOAD';
const LOAD_COMPLETE = 'poker-table/table/LOAD_COMPLETE';
const LOAD_ERROR = 'poker-table/table/LOAD_ERROR';

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

export function fetchTable(id) {
  return (dispatch) => {
    dispatch(load());
    return axios.get(`https://storage.googleapis.com/replaypoker-dummy-api/tables/${id}.json`)
      .then(response => dispatch(loadComplete(parseTable(response.data))))
      .catch(error => dispatch(loadError(error.message)));
  }
}

function parseTable(table) {
  if (table.currentHand) {
    table.currentHand.players = table.currentHand.players.map(player => {
      const seat = table.seats.find(seat => seat.id === player.seatId);
      return {
        ...player,
        allIn: seat.chips === 0 && table.currentHand.pots.some(pot => pot.seatIds.includes(player.seatId)),
      };
    });
  }
  return table;
}
