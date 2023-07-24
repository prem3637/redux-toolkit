import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import UserDetails from './components/UserDetails';
function App() {
  return (
    <div className="text-center">
     <BrowserRouter>
        <NavBar/>
      <Routes>
        <Route path='/' element={<UserDetails/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
