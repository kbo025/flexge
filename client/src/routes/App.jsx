import '@styles/global.css';

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '@pages/Login';
import NotFound from '@pages/NotFound';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import Contract from '@pages/Contract';
import Contracts from '@pages/Contracts';
import teste from '@pages/teste';

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/contracts" component={Contracts} />
                    <Route exact path="/contract" component={Contract} />
                    <Route exact path="/teste" component={teste} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;
