import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Films from './components/Films';
import SingleFilm from './components/SingleFilm';
import People from './components/People';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
            <Route exact path="/People">
                    <People />
                </Route>
            <Route exact path="/SingleFilm">
                    <SingleFilm />
                </Route>
                <Route exact path="/Films">
                    <Films />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};


export default App;