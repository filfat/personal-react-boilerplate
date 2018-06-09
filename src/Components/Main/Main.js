import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../Views/Home';

class Main extends Component {
    render () {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                </Switch>
            </main>
        );
    }
}
export default Main;