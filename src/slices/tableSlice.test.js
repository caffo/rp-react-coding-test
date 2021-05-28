import tableReducer, { initialState, load, loadComplete, loadError } from './tableSlice';

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
