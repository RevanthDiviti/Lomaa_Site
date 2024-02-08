import './App.css';
import Header from './Components/Header';
import {  Route, Routes } from 'react-router-dom'; // Corrected import statement
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Blog from './Pages/Blog';
import Client from './Pages/Client';
import Contact from './Pages/Contact';
import Img1con from './blog/Img1cont';
import Img2con from './blog/Img2con';
import Footer from './Components/Footer';
;

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/blog/digitalmarketing' element={<Img1con/>}/>
      <Route path='/blog/customersupport' element={<Img2con/>}/>
      <Route path='/client' element={<Client/>}/>
      <Route path='/contact' element={<Contact/>}/>

    </Routes>
    <Footer/>
    </>
  );
}

export default App;
