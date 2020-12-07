import React from 'react';
import {Redirect,Route} from 'react-router-dom';
const PrivateRoute = ({ component: Component, handleChildFunc, ...rest }) => {
    const user =JSON.parse(sessionStorage.getItem("user"));
    return <Route {...rest} render={(props) => (
        user !== null
            ? <Component {...props} user={user}/>
            : <Redirect to='/login' />
        )} 
    />
}
export default PrivateRoute;