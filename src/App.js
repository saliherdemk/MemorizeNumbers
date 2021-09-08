import './App.css';
import Home from './Components/Home'
import {BrowserRouter, Route} from 'react-router-dom'
import MemorizePI from './Components/MemorizePI';
import ChallangePI from './Components/ChallangePI';
import MemorizeGOLD from './Components/MemorizeGOLD';
import ChallangeGOLD from './Components/ChallangeGOLD';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Route exact path="/" component={Home}/>
        <Route path="/memorizePI" component={MemorizePI}/>
        <Route path="/challangePI" component={ChallangePI} />
        <Route path="/memorizeGOLD" component={MemorizeGOLD}/>
        <Route path="/challangeGOLD" component={ChallangeGOLD}/>
      </BrowserRouter>
      
    </div>
  );
}



export default App;
