import { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/Nav.css";

const Navbar = () => {
  const [dropDown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown((prevState) => !prevState);
  };

  return (
    <header>
      <nav>
        <ol>
          <li><Link to="/" className="link">Home</Link></li>
          <li><Link to="/about" className="link">About</Link></li>
          <li><Link to="/gallery" className="link">Gallery</Link></li>
          <li><Link to="/contact" className="link">Contact</Link></li>
          <li
            className="dropdown"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <span className="link">Hooks</span>
            {dropDown && (
              <ul className="dropdown-box">
                <li><Link to="/usestate" className="link">useState</Link></li>
                <li><Link to="/useeffect" className="link">useEffect</Link></li>
                <li><Link to="/useapi" className="link">useAPI</Link></li>
                <li><Link to="/usered" className="link">useReducer</Link></li>
                <li><Link to="/useimg" className="link">useAPIimg</Link></li>
                <li><Link to="/useref" className="link">useRef</Link></li>
                <li><Link to="/usememo" className="link">useMemo</Link></li>
                <li><Link to="/usecall" className="link">useCall</Link></li>
              </ul>
            )}
          </li>
        </ol>
      </nav>
    </header>
  );
};

export default Navbar;
