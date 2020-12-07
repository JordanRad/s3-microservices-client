import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Container } from "@material-ui/core";
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import './index.css';
import { cartFunctions as cf } from './helpers/cartFunctions';
import ProductList from './components/ProductList';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import CheckoutPage from './pages/CheckoutPage';
import MyProfilePage from './pages/MyProfilePage';
import PrivateRoute from './components/PrivateRoute';
const App = () => {
  let theme = createMuiTheme({
    palette: {
      primary: {
        main: "#C0D6DF",
        light: "#DBE9EE",
        dark: "#365866",
        contrastText: "#00000"
      },
      secondary: {
        main: "#FFBF00",
        dark: "#9b7400",
      },
    },
  });
  theme = responsiveFontSizes(theme);

  const [cart, setCart] = useState(cf.getCart());


  const refreshCartIconHandler = () => {
    setCart(cf.getCart())
  }

  // let user= {name: "Jordan",lastName: "Radushev",address: {},email:"dani.radushev@gmail.com" }
  // localStorage.setItem("user",JSON.stringify(user));
  // localStorage.setItem("order",JSON.stringify([]));

  let user = JSON.parse(sessionStorage.getItem("user"))
  //let content = ();
  //let PrivateRoute = user ? content : <Redirect to={"/login"} />


  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Container className="app">
          <Switch>
            <Route exact strict path={"/"}>
              <NavBar cart={cart} />
              <Container>
                <ProductList refreshCart={refreshCartIconHandler} />
              </Container>
            </Route>
            <Route exact strict path={"/login"}>
              <Login />
            </Route>
            <Route exact strict path={"/register"}>
              <Register />
            </Route>
            <Route exact strict path={"/cart"}>
              <NavBar cart={cart} />
              <Container>
                <Cart refreshCart={refreshCartIconHandler} />
              </Container>
            </Route>
            <PrivateRoute path={'/checkout'} exact={true} component={CheckoutPage} />
            <PrivateRoute path={'/myprofile'} exact={true} component={MyProfilePage} />
            {/* <Route exact strict path={"/checkout"}>
              {PrivateRoute}
            </Route> */}
            <Route path="*">
              <Redirect to={'/'} />
            </Route>
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  );
}
export default App;
