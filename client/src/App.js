import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import AddBlog from './Components/AddBlog';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/add' element={<AddBlog/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
