import './App.css';
import Home from './Components/Home'
import {HashRouter, Route} from 'react-router-dom'
import MemorizePI from './Components/PI/MemorizePI';
import ChallangePI from './Components/PI/ChallangePI';
import MemorizeGOLD from './Components/GOLDENRATIO/MemorizeGOLD';
import ChallangeGOLD from './Components/GOLDENRATIO/ChallangeGOLD';
import MemorizeEuler from './Components/EULER/MemorizeEuler';
import ChallangeEuler from './Components/EULER/ChallangeEuler';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="cont">
      <HashRouter>
        <Navbar/>
      <div className="App">
          <Route exact path="/" component={Home}/>
          <Route path="/memorizePI" component={MemorizePI}/>
          <Route path="/challangePI" component={ChallangePI} />
          <Route path="/memorizeGOLD" component={MemorizeGOLD}/>
          <Route path="/challangeGOLD" component={ChallangeGOLD}/>
          <Route path="/memorizeEULER" component={MemorizeEuler}/>
          <Route path="/challangeEULER" component={ChallangeEuler}/> 
      </div>
      </HashRouter>
        
    </div>
  );
}

export default App;
