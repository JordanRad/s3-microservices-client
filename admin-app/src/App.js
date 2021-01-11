import React from 'react';
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
import PrivateRoute from './components/PrivateRoute';
import CurrentOrdersPage from './pages/CurrentOrdersPage';
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
            <PrivateRoute exact path="/products" component={ProductDashBoardPage}/>
            <PrivateRoute exact path="/orders" component={CurrentOrdersPage}/>
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
