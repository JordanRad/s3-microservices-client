import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,Redirect
} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Login from './components/Login';
import NavBar from './components/NavBar';
import ProductDashBoardPage from './pages/ProductDashboardPage';
import UsersDashBoardPage from './pages/UsersDashboardPage';
function App() {
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
  return (
    <div className="h">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            {/* <Route exact path="/dashboard">
              <NavBar>
                <Typography variant="h6">
                  Welcome to Webshop Admin Panel
                  </Typography>
              </NavBar>
            </Route> */}
            <Route exact path="/users">
              <UsersDashBoardPage/>
            </Route>
            <Route exact path="/products">
              <ProductDashBoardPage/>
            </Route>
            <Route exact path="/orders">
              <NavBar>
                <Typography variant="h6">
                  Current Orders Dashboard
                  </Typography>
              </NavBar>
            </Route>
            <Route exact path="/ordersarchive">
              <NavBar>
                <Typography variant="h6">
                  Orders Archive
                  </Typography>
              </NavBar>
            </Route>
            <Route path="*">
              <Redirect to={'/'} />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  )
}

export default App;
