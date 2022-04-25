import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/page/Home';
import Company from './components/page/Company';
import Contact from './components/page/Contact';
import NewProject from './components/page/NewProject';
import Projects from './components/page/Projects';

import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Container customClass='min-height'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
