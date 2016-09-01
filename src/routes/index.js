import React from 'react';
import { Route } from 'react-router';
import App from 'COMPONENT/App';
import ListContainer from 'COMPONENT/ListContainer';

export default (
    <Route component={App}>
        <Route path="/" component={ListContainer} />
    </Route>
);
