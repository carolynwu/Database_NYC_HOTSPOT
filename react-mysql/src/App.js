import React, { Component } from 'react';
import './App.css';
import Chart from "./components/Chart";


class App extends Component {
/* initialize the state to an empty array
    state = {
        accounts: []
    }

    componentDidMount() {
        fetch("http://localhost:8080/chart")
            .then(response => response.json())
            .then(response => this.setState({accounts:response.data}))
            .catch(err=> console.error(err))
    }
    */

    render() {
        return (
            <div>
                <h2> The Distribution of NYC Free WIFI Hotspot </h2>
                <section>
                    <Chart />
                </section>


            </div>
        );
    }
}

export default App;

//{this.state.accounts.map(account=>
   // <li key={account.brooklyn_wifi}> {account.brooklyn_wifi} {account.queens_wifi} {account.Manhattan_wifi}</li>

//)}
