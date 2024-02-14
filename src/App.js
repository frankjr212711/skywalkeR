import { Navbar } from "./Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from './components/Home';
import { Skywalker } from './components/Skywalker';
import { Gjr } from './components/Gjr';
import { Librex } from './components/Librex';
import { Fifthstar } from './components/Fifthstar';

import { About } from './components/About';
import { Contact } from './components/Contact';
import { Careers } from './components/Careers';






function App() {
  return (
    <Router>
      <Navbar />
      <div className="main_content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skywalker" element={<Skywalker />} />
          <Route path="/gjr" element={<Gjr />} />
          <Route path="/librex" element={<Librex />} />
          <Route path="/fifthstar" element={<Fifthstar />} />


          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;









