import { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/Nav.css";

const Navbar = () => {
  const [dropDown1, setDropdown1] = useState(false);
  const [dropDown2,setDropdown2]=useState(false);

  const toggleDropdown1 = () => {
    setDropdown1((prevState) => !prevState);
  };
  const toggleDropdown2 = () => {
    setDropdown2((prevState) => !prevState);
  };

  return (
    <header>
      <nav>
        <ol>
          <li><Link to="/" className="link">Home</Link></li>
          <li><Link to="/about" className="link">About</Link></li>
          <li><Link to="/gallery" className="link">Gallery</Link></li>
          <li><Link to="/hoc" classname="link">HoC</Link></li>
          <li><Link to="/contact" className="link">Contact</Link></li>
          
        
          <li
            className="dropdown"
            onMouseEnter={toggleDropdown1}
            onMouseLeave={toggleDropdown1}
          >
            <span className="link">Hooks</span>
            {dropDown1 && (
              <ul className="dropdown-box">
                <li><Link to ="/react-life-cycle" className="link">React lifecycle</Link></li>
                <li><Link to="/usestate" className="link">useState</Link></li>
                <li><Link to="/useeffect" className="link">useEffect</Link></li>
                <li><Link to="/useapi" className="link">useAPI</Link></li>
                <li><Link to="/usered" className="link">useReducer</Link></li>
                <li><Link to="/useimg" className="link">useAPIimg</Link></li>
                <li><Link to="/useref" className="link">useRef</Link></li>
                <li><Link to="/usememo" className="link">useMemo</Link></li>
                <li><Link to="/usecall" className="link">useCall</Link></li>
                <li><Link to="/student" className="link">Student</Link></li>
                <li><Link to="/use-custom" className="link">Custom Hook</Link></li>
              </ul>
            )}
          </li>
          <li
            className="dropdown"
            onMouseEnter={toggleDropdown2}
            onMouseLeave={toggleDropdown2}
          >
            <span className="link">Memo</span>
            {dropDown2 && (
              <ul className="dropdown-box">
                <li><Link to="/lazy" className="link">LazyLoading with sus</Link></li>
                <li><Link to ="/memo" className="link">React Memo</Link></li>
                </ul>
            )}
          </li>
        </ol>
      </nav>
    </header>
  );
};

export default Navbar;
