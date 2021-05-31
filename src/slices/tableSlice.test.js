import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import tableReducer, { fetchTable, initialState, load, loadComplete, loadError } from './tableSlice';

const data = {
  id: 1,
  state: 'open',
  game: 'holdem',
  blinds: {
    small: 10,
    big: 20,
  },
  seats: [
    { id: 0, state: 'available' },
    { id: 1, state: 'occupied', username: 'MCA', chips: 0 },
    { id: 2, state: 'available' },
    { id: 3, state: 'occupied', username: 'Mike D', chips: 57465 },
    { id: 4, state: 'occupied', username: 'Ad-Rock', chips: 62860 },
    { id: 5, state: 'available' },
  ],
  currentHand: {
    id: 56829,
    communityCards: [],
    players: [
      { seatId: 1, cards: ['X', 'X'], bet: 0 },
      { seatId: 3, cards: ['X', 'X'], bet: 10 },
      { seatId: 4, cards: ['Ac', '9d'], bet: 20 },
    ],
    pots: [
      { chips: 100, seatIds: [ 1 ] },
    ],
  },
};

jest.mock('axios');

const mockStore = configureMockStore([thunk]);

describe('fetchTable', () => {
  it('should fetch table data and parse it', () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data }));

    const parsedData = { ...data};
    parsedData.seats[1].player = { seatId: 1, bet: 0, cards: ['X', 'X'], allIn: true };
    parsedData.seats[3].player = { seatId: 3, bet: 10, cards: ['X', 'X'] };
    parsedData.seats[4].player = { seatId: 4, bet: 20, cards: ['Ac', '9d'] };

    const expectedActions = [
      { type: 'poker-table/table/LOAD' },
      { type: 'poker-table/table/LOAD_COMPLETE', payload: parsedData },
    ];

    const store = mockStore({});
    return store.dispatch(fetchTable(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('tableReducer', () => {
  it('should start loading table data', () => {
    const newState = tableReducer(initialState, load());
    expect(newState.isLoading).toEqual(true);
    expect(newState.error).toBeUndefined();
    expect(newState.table).toBeUndefined();
  });

  it('should set error message', () => {
    const newState = tableReducer(initialState, loadError('An error occurred'));
    expect(newState.isLoading).toEqual(false);
    expect(newState.error).toEqual('An error occurred');
    expect(newState.table).toBeUndefined();
  });

  it('should set table data', () => {
    const newState = tableReducer(initialState, loadComplete({ id: 1 }));
    expect(newState.isLoading).toEqual(false);
    expect(newState.error).toBeUndefined();
    expect(newState.table).toEqual({ id: 1 });
  });
});
