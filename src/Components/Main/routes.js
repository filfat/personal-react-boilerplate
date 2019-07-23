import React from 'react';
import { Route } from 'react-router';

import Home from '../../Views/Home';

export default (
    <>
        <Route exact path='/' component={Home}/>
    </>
);
