import { useState } from 'react';
import './App.css';
import Home from './components/Functionalcomponents/Home';
import About from './components/Functionalcomponents/About';
import Gallery from './components/Functionalcomponents/Gallery';
import Contact from './components/Functionalcomponents/Contact';
import Navbar from './components/Functionalcomponents/Navbar';
import Signup from './components/Functionalcomponents/Signup';
import Login from './components/Functionalcomponents/Login';
import UseState from './components/Functionalcomponents/Hooks/UseState';
import UseEffect from './components/Functionalcomponents/Hooks/UseEffect';
import UseEffectAPI from './components/Functionalcomponents/Hooks/UseEffectAPI';
import UseReducer from './components/Functionalcomponents/Hooks/UseReducer';
import UseEffectAPIimage from './components/Functionalcomponents/Hooks/UseEffectAPIimage'
import UseRef from './components/Functionalcomponents/Hooks/UseRef'
import UseMemo from './components/Functionalcomponents/Hooks/UseMemo'
import UseCallback from './components/Functionalcomponents/Hooks/UseCallback';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactLifecycleMethods from './components/classComponents/ReactLifecycleMethods';
import Student from './components/Functionalcomponents/Hooks/Student';
import Memo from './components/Functionalcomponents/Memoization/Memo';
import ClassCompEG from './components/classComponents/ClassCompEG';
import LazyLoadingWithSuspense from './components/Functionalcomponents/Memoization/LazyLoadingWithSuspense';
import UseLocalStorage from './components/Functionalcomponents/Hooks/UseLocalStorage';
import HoC from './components/Functionalcomponents/HoC/HoC';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({ username: '', password: '' }); 

  const handleSignup = (username, password) => {
    setUser({ username, password }); 
    alert('Signup successful! Please log in.');
  };

  const handleLogin = (username, password) => {
    if (username === user.username && password === user.password) {
      setIsAuthenticated(true);
    } else {
      alert('Invalid username or password!');
    }
  };

  return (
    <>
      <BrowserRouter>
       {isAuthenticated ? (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery page="Gallery" img="time" />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/react-life-cycle" element={<ReactLifecycleMethods/>}></Route>
              <Route path="/usestate" element={<UseState />} />
              <Route path="/useeffect" element={<UseEffect />} />
              <Route path="/useapi" element={<UseEffectAPI/>}/>
              <Route path="/usered" element={<UseReducer />} />
              <Route path="/useimg" element={<UseEffectAPIimage/>} />
              <Route path="/useref" element={<UseRef/>}/>
              <Route path="/usememo" element={<UseMemo/>} />
              <Route path="/usecall" element={<UseCallback/>} />
              <Route path="/student" element={<Student/>}></Route>
              <Route path="/memo" element={<Memo/>}></Route>
              <Route path="/lazy" element={<LazyLoadingWithSuspense/>}></Route>
              <Route path="/classcompeg" element={<ClassCompEG/>}></Route>
              <Route path="/use-custom" element={<UseLocalStorage />}></Route>
              <Route path="/hoc" element={<Hoc/>}></Route>
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;