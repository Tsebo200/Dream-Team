// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Compare from './components/Comparison';

function App() {
  return (
    <Routes>
        <Route path='/' element= {<Compare/>} />
    </Routes>
  );
}

export default App;
