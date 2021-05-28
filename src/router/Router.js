import React from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import DashBoard from '../pages/DashBoard';


export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={DashBoard}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
