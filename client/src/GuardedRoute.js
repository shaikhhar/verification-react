import React from 'react';
import { Route, Redirect } from "react-router-dom";
import auth from './Auth';

const GuardedRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={(props) => (
        auth.isAuthenticated
            ? <Component {...props} />
            : <Redirect to='/' />
    )} />   
}

export default GuardedRoute;
