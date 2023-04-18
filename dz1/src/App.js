import {Routes,Route} from "react-router-dom";
import HeaderPage from "./pages/Header";
import NavbarPage from "./pages/Navbar";
import MainPage from "./pages/Main";
import AboutPage from "./pages/About";
import FooterPage from "./pages/Footer";

function App() {
  return <>
    <HeaderPage/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/navbar" element={<NavbarPage/>}/>
        <Route path="/Footer" element={<FooterPage/>}/>
      </Routes>
  </>
}

export default App;
