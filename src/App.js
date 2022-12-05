import "./App.css";
import { Route, BrowserRouter,Switch } from "react-router-dom";
import LoginForm from "./pages/Login/LoginForm";
import Dashboard from "./pages/Dashboard/Dashboard";

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
