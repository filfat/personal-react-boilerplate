import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Routes from './routes';

class Main extends Component {
    render () {
        return (
            <main>
                <Switch>
                    {Routes}
                </Switch>
            </main>
        );
    }
}
export default Main;
