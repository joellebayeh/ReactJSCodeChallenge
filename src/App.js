import React from "react";
import { Route, BrowserRouter,Switch } from "react-router-dom";
import "./App.css";

import LoginForm from "./screens/Login/LoginForm";
import Dashboard from "./screens/Dashboard/Dashboard";



const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LoginForm} exact/>
          <Route path="/dashboard" component={Dashboard} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
