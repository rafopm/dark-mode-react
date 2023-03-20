
import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"

function AppRouter() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path="/" element={<Layout />} />
            <Route index element={ <Home /> } />
            <Route path="about" element={<About />} />  
            <Route path="contact" element={<Contact />} />
         
                          
        </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
