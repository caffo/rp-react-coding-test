import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Table from './components/Table';
import { loadTable } from './slices/tableSlice';
import { appShape } from './types';

class App extends Component {
  componentDidMount() {
    this.props.loadTable();
  }

  render() {
    const { isLoading, error, table } = this.props;

    return (
      <div className="App">
        { isLoading && 'Loading...' }
        { error && 'Error...' }
        { table && <Table table={table} /> }
      </div>
    );
  }
}

App.propTypes = appShape.isRequired;

const mapStateToProps = (state) => {
  return {
    isLoading: state.table.isLoading,
    error: state.table.error,
    table: state.table.table,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadTable: () => {
      dispatch(loadTable(8));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
