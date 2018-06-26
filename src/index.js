import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import Complete from './components/Complete/complete';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/complete' component={Complete}/>
        </Switch>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();