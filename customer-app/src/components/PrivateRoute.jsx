import React from 'react';
import {Redirect,Route} from 'react-router-dom';
const PrivateRoute = ({ component: Component, handleChildFunc, ...rest }) => {
    
    let user = JSON.parse(sessionStorage.getItem("user"))
    console.log(user)
    return <Route {...rest} render={(props) => (
        user === null
            ? <Component {...props} user={user}/>
            : <Redirect to='/login' />
        )} 
    />
}

export default PrivateRoute;