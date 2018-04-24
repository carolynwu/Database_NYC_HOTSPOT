import React, { Component } from 'react';
import './App.css';

class App extends Component {

    state = {
        accounts: []
    }

    componentDidMount() {
        fetch("http://localhost:8080/chart")
            .then(response => response.json())
            .then(response => this.setState({accounts:response.data}))
            .catch(err=> console.error(err))
    }

    render() {
        return (
            <div>
                {this.state.accounts.map(account=>
                    <li key={account.brooklyn_wifi}> {account.brooklyn_wifi} {account.queens_wifi} {account.Manhattan_wifi}</li>

                    )}
            </div>
        );
    }
}

export default App;
