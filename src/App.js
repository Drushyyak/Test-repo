import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div classNameName="App">
      <Router>
<Navbar/>
<Routes>
<Route  exact path="/" element={<Home/>}/>
  </Routes>
  <Home/>
</Router>



      
    </div>
    
  );
}

export default App;
