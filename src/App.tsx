import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';

import {Homepage} from './pages/Homepage';
import {Game} from "./pages/Game";

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/play'>
                    <Game />
                </Route>

                <Route path='/'>
                    <Homepage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
