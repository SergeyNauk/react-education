import React, { Component } from 'react';

import Home from './Home.js';
import PTypes from './PTypes';
import RegForm from './RegForm';
import Ref from'./Ref';
import Update from './Update';
import NewTest from './Newtest';

import First from './First';
import Second from './Second';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Newtest from "./Newtest";

const histor = createBrowserHistory();

const someLet = '12';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {xyz: 'xyz'};
    }
    render() {
        return (
            <div>
                <Update />
                <Home homeMess = {this.state.xyz} />
                hello react
                <PTypes message = {someLet} />
                <RegForm />
                <Ref/>
                <hr/>
                <BrowserRouter history={histor}>
                    <div>
                        <ul>

                            <li><Link to="/first">first</Link></li>
                            <li><Link to="/second">second</Link></li>
                            <li><Link to="/form">form</Link></li>
                        </ul>
                        <Route path="/first" component={First}/>
                        <Route path="/second" component={Second}/>
                        <Route path="/form" component={RegForm}/>
                    </div>
                </BrowserRouter>
                <Newtest />
            </div>
        )
    }
}

export default App;
