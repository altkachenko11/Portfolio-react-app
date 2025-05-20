import "./styles/main.css";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer";
import Projekts from "./pages/Projekts";
import Project from "./pages/Project";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";


import ScrollToTop from "./components/utils/ScrollToTop"






function App() {
  return (
    <div className="App">
    <Router>
      <ScrollToTop></ScrollToTop>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projekts" element={<Projekts />} />
        <Route path="/projekt/:id" element={<Project />}/>
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  </div>
  );
}

export default App;
