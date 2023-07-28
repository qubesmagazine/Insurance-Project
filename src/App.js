import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import Services from './pages/Services';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';




function App() {
  return (
    <>
  
    <Routes>
      <Route  path='/' element={<Home/>}/>
     <Route path='/services' element={<Services/>}/>
     <Route path='/aboutus' element={<About/>}/>
     <Route path='/blog' element={<Blog/>}/>
     <Route path='/contactus' element={<Contact/>}/>
    </Routes>
    <Footer/>
      
    </>
  );
}

export default App;
