// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
// import ReactChart from './Testings/ReactChart';
// import LineChart from './Testings/ReactLine';
// import BarChart from './Testings/ReactBar';
// import Compare from './components/Comparison';

// Pages
import Landing from './Pages/Landing';
import Compare from './Pages/Compare';
import Time from './Pages/Time';
import SignedOut from './Pages/SignedOut';


// Components
import { ApiCall } from './API/ApiCall';
import NavBar from './components/Navbar';
import Header from './components/Header';
// import LandingContent from './components/LandingContent';
import Footer from './components/Footer';
import ButtonDarkExample from './components/Dropdown';
import LeagueLeadersData from './API/leagueLeadersData';
// Charts
import PolarAreaChart from './components/Charts/PolarAreaChart';
import BarChart from './components/Charts/BarChart';
import PieChart from './components/Charts/PieChart';
// Practice
import OneAxiosForLoop from './Testings/OneAxiosForLoop';
import OneAxiosPartTwo from './Testings/OneAxiosPartTwo';
import DropdownTwo from './components/DropdownTwo';


function App() {
  return (
    <div className="App">
    <Header />
    <NavBar />
    <Routes>
        <Route path='/' element= {<Landing />} />
        <Route path='/compare' element= {<><Compare /></>} />
        <Route path='/time' element= {<Time />} />
        <Route path='/signedout' element= {<SignedOut />} />
        <Route path='/data' element = {<LeagueLeadersData/>}/>

        {/* Charts */}
        <Route path='/polar' element = {<PolarAreaChart/>}/>
        <Route path='/bar' element = {<BarChart/>}/>
        <Route path='/pie' element = {<PieChart/>}/>
        <Route path='/playground' element = {<OneAxiosForLoop/>} />
        <Route path='/sandbox' element={<OneAxiosPartTwo/>}/>
        <Route path='/api' element={<ApiCall/>}/>
        <Route path='/dropdown' element={<DropdownTwo/>}/>


        {/* Just Practicing to display graphs */}
        {/* <Route path='/compare' element= {<Compare/>} /> */}
        {/* <Route path='/chart' element = {<ReactChart/>} />
        <Route path='/line' element = {<LineChart/>} />
        <Route path='/bar' element = {<BarChart/>} /> */}
    </Routes>
    <Footer/>

    </div>
  );
}

export default App;
