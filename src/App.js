import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import News from './pages/News'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {
  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/about' element={<About></About>}/>
        <Route path='/news' element={<News></News>}/>
        <Route path='/contact' element={<Contact></Contact>}/>
        <Route path='/shop' element={<Shop></Shop>}/>
      </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
