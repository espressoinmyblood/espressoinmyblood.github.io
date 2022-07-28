import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar, Footer } from './components';
import Home from './pages/HomePage/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import ContactMe from './pages/ContactMe/ContactMe';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' exact element={<AboutMe />} />
        <Route path='/skills' exact element={<Skills />} />
        <Route path='/projects' exact element={<Projects />} />
        <Route path='/contact-me' exact element={<ContactMe />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
