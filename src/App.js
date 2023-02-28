// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Compare from './components/Comparison';
import ReactChart from './Testings/ReactChart';

function App() {
  return (
    <Routes>
        <Route path='/' element= {<Compare/>} />
        <Route path='/chart' element = {<ReactChart/>} />
    </Routes>
  );
}

export default App;
