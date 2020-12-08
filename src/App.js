import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from './components/Table';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tableData:null
    };
  }

  static propTypes = {
    tableId: PropTypes.number.isRequired,
  }

  

  componentDidMount(){
    fetch(`https://storage.googleapis.com/replaypoker-dummy-api/tables/${this.props.tableId}.json`)
    .then((res)=>res.json())
      .then((data)=>{
        //TODO: check if API should be able to return data.currentHand as undefined
        // and find what is the desired behaviour when it happens

        //TODO: check if omaha_hilo game type should be supported or if the API is 
        // returning the wrong value
        this.setState({tableData:data});
    }).catch(()=>{});
  }

  render() {
    const table = this.state.tableData;
    
    if(!table){
      //TODO: check with UX for a proper loading asset
      return (<div className="loading"> Loading... </div>);
    }
    return (
      <div className="App">
        <Table table={this.state.tableData} />
      </div>
    );
  }
}

export default App;
