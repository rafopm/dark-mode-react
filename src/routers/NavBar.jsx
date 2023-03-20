import { useState } from "react";
import { Link } from "react-router-dom";
import { useThemeContext } from "../context/ThemeContext";
import ReactSwitch from "react-switch";

const Navigator = () => {
  const {contextTheme, setContextTheme} = useThemeContext()
  const [checked, setChecked] = useState(false);

  const handleSwitch = (nextChecked) => {       
    setContextTheme((state) => (state === 'Light' ? 'Dark':'Light'))       
    setChecked(nextChecked);
    //console.log(nextChecked)
  }

  return (
    <nav >
    <ul id="#top-menu" className="navBar">
    <li><Link to="/" >Home</Link></li>
    <li><Link to="/about" >About</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    <li><ReactSwitch 
  onChange={handleSwitch}
  checked={checked}
  onColor="#86d3ff"
  onHandleColor="#2693e6"
  handleDiameter={30}
  uncheckedIcon={false}
  checkedIcon={false}
  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
  height={20}
  width={48}
  className="react-switch"
  id="material-switch"
/></li>
</ul>
</nav>
  );
};

export default Navigator;
