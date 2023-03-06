// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
// import ReactChart from './Testings/ReactChart';
// import LineChart from './Testings/ReactLine';
// import BarChart from './Testings/ReactBar';
// import Compare from './components/Comparison';


import Landing from './Pages/Landing';


function App() {
  return (
    <div className="App">
    <Routes>
        <Route path='/' element= {<Landing />} />





        {/* Just Practicing to display graphs */}
        {/* <Route path='/compare' element= {<Compare/>} /> */}
        {/* <Route path='/chart' element = {<ReactChart/>} />
        <Route path='/line' element = {<LineChart/>} />
        <Route path='/bar' element = {<BarChart/>} /> */}
    </Routes>
    </div>
  );
}

export default App;
