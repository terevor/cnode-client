import React from 'react';
import { Route } from 'react-router';
import App from 'COMPONENT/App';
import ListContainer from 'COMPONENT/ListContainer';
import TopicDetail from 'COMPONENT/TopicDetail';

export default (
    <Route component={App}>
        <Route path="/" component={ListContainer} />
        <Route path="/detail/:id" component={TopicDetail} />
    </Route>
);
