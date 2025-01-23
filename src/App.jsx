import './App.css'
import Home from './components/FunctionalComponents/Home';
import About from './components/FunctionalComponents/About';
import Gallery from './components/FunctionalComponents/gallery';
import Contact from './components/FunctionalComponents/Contact';
import Navbar from './components/Functionalcomponents/Navbar';
import Signup from './components/Functionalcomponents/Signup';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import UseState from './components/Functionalcomponents/Hooks/useState';
import UseEffect from './components/Functionalcomponents/Hooks/UseEffect';
import UseEffectApi from './components/Functionalcomponents/Hooks/UseEffectAPI';
import UseReducer from './components/Functionalcomponents/Hooks/UseReducer';
import UseRef from './components/Functionalcomponents/Hooks/UseRef';
import UseEffectAPIimage from './components/Functionalcomponents/Hooks/UseEffectAPIimage';
import UseMemo from './components/Functionalcomponents/Hooks/UseMemo';
import UseCallback from './components/Functionalcomponents/Hooks/UseCallback';
import ListItems from './components/Functionalcomponents/Hooks/list';
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
      <Route path="/usereducer" element={<UseEffectApi/>}></Route>
      <Route path="/useeffectimg" element={<UseEffectAPIimage/>}></Route>
      <Route path="/useref" element={<UseRef/>}> </Route>
      <Route path="/usememo" element={<UseMemo/>}></Route>
      <Route path="/signup" element={<Signup />} ></Route>
      <Route path="/usecallback" element={<UseCallback/>}></Route>
      <Route path="/listitem" element={<ListItems/>}></Route>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App