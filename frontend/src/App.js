import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/home' element={<Home/ >} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
