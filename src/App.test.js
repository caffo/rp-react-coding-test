import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from './App';

it('renders without crashing', () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({
    table: {
      isLoading: false,
      error: null,
      table: null,
    },
  });
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
