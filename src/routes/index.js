import React from 'react';
import { Route } from 'react-router';
import AppContainer from '../containers/AppContainer';
import ListContainer from '../containers/ListContainer';

export default (
    <Route component={AppContainer}>
        <Route path="/" component={ListContainer} />
    </Route>
);
