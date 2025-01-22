
import './App.css'
import Home from './components/FunctionalComponents/Home';
import About from './components/FunctionalComponents/About';
import Gallery from './components/FunctionalComponents/gallery';
import Contact from './components/FunctionalComponents/Contact';
import Navbar from './components/FunctionalComponents/Navbar';
import Signup from './components/Functionalcomponents/Signup';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import UseState from './components/Functionalcomponents/Hooks/useState';
import UseEffect from './components/Functionalcomponents/Hooks/UseEffect';
import UseEffectApi from './components/Functionalcomponents/Hooks/UseEffectAPI';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/about" element={<About />} ></Route>
      <Route path="/gallery" element={<Gallery page="Gallery" img ="time"/>} ></Route>
      <Route path="/contact" element={<Contact />} ></Route>
      <Route path="/usestate" element={<UseState />} ></Route>
      <Route path="/useeffect" element={<UseEffect/>}> </Route>
      <Route path="/useapi" element={<UseEffectApi/>}> </Route>
      <Route path="/signup" element={<Signup />} ></Route>
      
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App