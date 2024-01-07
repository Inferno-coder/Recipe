import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Home} from './pages/Home.js'
import {Auth} from './pages/Auth.js'
import {CreateRecipe} from './pages/CreateRecipe.js'
import {SavedRecipe} from './pages/SavedRecipe.js'
import { Navbar } from './components/Navbar.js';
function App() {
  return (
    <div >
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/create-recipe' element={<CreateRecipe/>}/>
        <Route path='/saved-recipe' element={<SavedRecipe/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
