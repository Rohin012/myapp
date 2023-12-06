import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Login from './axios/logIn';
import ListAccounts from './axios/ListAccounts';
import RegistrationForm from './axios/registration';

function App() {
  return (
    <div className='App'>
    <Routes>
    <Route path='/' element={<RegistrationForm/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
o      <Route path='/ListAccounts' element={<ListAccounts/>}></Route>
    </Routes>

    </div>
  );
}

export default App;
