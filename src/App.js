// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Compare from './components/Comparison';
import ReactChart from './Testings/ReactChart';
import LineChart from './Testings/ReactLine';

function App() {
  return (
    <Routes>
        <Route path='/' element= {<Compare/>} />
        <Route path='/chart' element = {<ReactChart/>} />
        <Route path='/line' element = {<LineChart/>} />
    </Routes>
  );
}

export default App;
