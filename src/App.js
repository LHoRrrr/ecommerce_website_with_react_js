import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import News from './pages/News'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from "./pages/Header"
import Footer from "./pages/Footer"



function App() {
  return (
   <>
    <Header></Header>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/about' element={<About></About>}/>
          <Route path='/news' element={<News></News>}/>
          <Route path='/contact' element={<Contact></Contact>}/>
          <Route path='/shop' element={<Shop></Shop>}/>
        </Routes>
    </BrowserRouter>
    <Footer></Footer>
   </>
   
  );
}
export default App;
