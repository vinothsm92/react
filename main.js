import React from 'react';
import ReactDOM, {render} from 'react-dom';
import App from './App.js';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import FormOne from './src/files/form1.js';
import FormTwo from './src/files/form2.js';
import FormThreeandFour from './src/files/form3 and form4.js';


render(<BrowserRouter>
    <Switch>
        <Redirect exact path="/" to="/formone" />
        <Route path="/formone" component={FormOne} />
        <Route path="/formtwo" component={FormTwo} />
        <Route path="/formthreeandfour" component={FormThreeandFour} />
        {/* <Route path="/formfive" component={formfive} /> */}


    </Switch>
</BrowserRouter>, document.getElementById('app'));

