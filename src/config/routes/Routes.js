import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Home, LandingPage, Profile, Subscribe, NotFound, DetailBook, ReadBook, Admin, AddBook } from '../../pages/pages';
 
const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <LandingPage/>
                </Route>
                <Route exact path="/home">
                    <Home/>
                </Route>
                <Route exact path="/profile">
                    <Profile/>
                </Route>
                <Route exact path="/subscribe">
                    <Subscribe/>
                </Route>
                <Route exact path="/detail-book">
                    <DetailBook/>
                </Route>
                <Route exact path="/read-book">
                    <ReadBook/>
                </Route>
                <Route exact path="/admin">
                    <Admin/>
                </Route>
                <Route exact path="/add-book">
                    <AddBook/>
                </Route>
                <Route exact path="*">
                    <NotFound/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;
