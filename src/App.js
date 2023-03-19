import logo from './logo.svg';
import './App.css';

import ReactSwitch from 'react-switch';
import { useThemeContext } from './context/ThemeContext';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Layout from './pages/Layout';

function App() {
  const {contextTheme, setContextTheme} = useThemeContext()
  const [checked, setChecked] = useState(false);

  const handleSwitch = (nextChecked) => {       
    setContextTheme((state) => (state === 'Light' ? 'Dark':'Light'))       
    setChecked(nextChecked);
    //console.log(nextChecked)
  }
   
  return (
    <div className="App">      
      <header className="App-header" id={contextTheme} > 
      <div><div>      <Routes>
          <Route path="/" element={<Layout/>} >
            <Route index element={ <Home /> } />
            <Route path="about" element={<About />} />  
            <Route path="contact" element={<Contact />} />
          </Route>    
                          
        </Routes></div><div>   </div></div>

      
        <h2>{contextTheme} Mode</h2>
        <img src={logo} className="App-logo" alt="logo" />                  

      </header>
    </div>
  );
}
   
export default App;