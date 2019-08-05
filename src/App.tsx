import * as React from 'react';
import { render } from 'react-dom';

 import NavBar from './Navbar';
import Home from './components/Home';
import { Router } from "@reach/router";


const App = () => {
    return (
        <div>
            <Router>
                <Home path="/"/>
            </Router>
        </div>
    )
}

render(
[<NavBar key="nav"/>, <App key="App"/> ], document.getElementById('app')
);