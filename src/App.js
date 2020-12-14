import React, { Component } from 'react';
import { tableShape } from './types';

import Table from './components/Table';

import './App.css';

const table_api = 'https://storage.googleapis.com/replaypoker-dummy-api/tables/8.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { table: {}, isLoading: true }
  }

  componentDidMount() {
    fetch(table_api).then(response =>
      response.json()
    ).then(result =>
      this.setState({table: result, isLoading: false})
    )
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>
    }

    return (
      <div className="App">
        <Table table={this.state.table} />
      </div>
    );
  }
}

export default App;
