import React from 'react';
import {ThemeProvider} from "styled-components";
import {Header} from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Overall } from './pages/Overall';
import { Retail } from './pages/Retail';

export const theme = {
  color: {
    white: '#FFFFFF',
    primary: '#323232'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route exact={true} path="/">
            <Overall />
          </Route>
          <Route exact={true} path="/retail">
            <Retail />
          </Route>
          <Route exact={true} path="/banking">
            banking
          </Route>
          <Route>
            Not found route
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;