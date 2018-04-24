import React, { Component } from 'react';
import './App.css';

class App extends Component {

    state = {
        accounts: []
    }

    componentDidMount() {
        fetch("http://localhost:8080/chart")
            .then(response => response.json())
            .then(accounts => this.setState({accounts}));
    }

    render() {
        return (
            <div>
                {this.state.accounts.map(account=>
                    <li key={account.id}> {account.username}</li>

                    )}
            </div>
        );
    }
}

export default App;
