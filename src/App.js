import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './pages/Login/LoginForm';
import Dashboard from './pages/Dashboard/Dashboard';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LoginForm/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </div>
    
  );
}

export default App;
