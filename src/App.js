import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginForm from "./pages/Login/LoginForm";
import Dashboard from "./pages/Dashboard/Dashboard";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
