import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App';
import Presskit from './components/Presskit';

const Routes = () => (
    <Router >
        <div>
            <Route exact path ="/" component = {App} />
            <Route path = "/presskit" component = {Presskit} />
        </div>
    </Router>
)

export default Routes;