import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from './App';
import ErrorMessage from './components/ErrorMessage';
import Loading from './components/Loading';
import Table from './components/Table';
import data from './data/table-1';

const mockStore = configureStore([thunk]);

function mountApp(table) {
  const store = mockStore({
    table,
  });
  const div = document.createElement('div');
  return mount(
    <Provider store={store}>
      <App/>
    </Provider>,
    div
  );
}

describe('App', () => {
  it('renders Loading', () => {
    const wrapper = mountApp({
      isLoading: true,
    });
    expect(wrapper.find(Loading).length).toEqual(1);
    expect(wrapper.find(ErrorMessage).length).toEqual(0);
    expect(wrapper.find(Table).length).toEqual(0);
  });

  it('renders ErrorMessage', () => {
    const wrapper = mountApp({
      error: 'An error occurred.',
    });
    expect(wrapper.find(Loading).length).toEqual(0);
    expect(wrapper.find(ErrorMessage).length).toEqual(1);
    expect(wrapper.find(Table).length).toEqual(0);
  });

  it('renders Table', () => {
    const wrapper = mountApp({
      table: data,
    });
    expect(wrapper.find(Loading).length).toEqual(0);
    expect(wrapper.find(ErrorMessage).length).toEqual(0);
    expect(wrapper.find(Table).length).toEqual(1);
  });
});
