import logo from './logo.svg';
import './App.css';

import { useThemeContext } from './context/ThemeContext';

import AppRouter from './routers/AppRouter';

function App() {
  const {contextTheme, setContextTheme} = useThemeContext()
   
  return (
    <div className="App">      
      <header className="App-header" id={contextTheme} > 
      <div><div>
        <AppRouter />
        </div><div>   </div></div>

      
        <h2>{contextTheme} Mode</h2>
        <img src={logo} className="App-logo" alt="logo" />                  

      </header>
    </div>
  );
}
   
export default App;