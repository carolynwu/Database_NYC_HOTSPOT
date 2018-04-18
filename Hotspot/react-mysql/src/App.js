import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    state={
        account:[]
    }
    renderAccount=({ObjectID,Type}) => <div key={ObjectID}>{Type}</div>
  render() {
      const {account}=this.state;
    return (
      <div className="App">
          {account.map(this.renderAccount)}
      </div>
    );
  }
}

export default App;
