import React from 'react';
import './App.css';
import ProjectPage from './component/ProjectPage';
import ProjectsPage from './component/ProjectsPage';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from "./component/home/HomePage/HomePage";
import AboutMePage from "./component/home/AboutMe/AboutMePage";
import ContactPage from "./component/home/Contact/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <header className='sticky'>
        <NavLink to='/' className="button rounded">
          <span className='icon-home'></span>
          Home
        </NavLink>

        <NavLink to='/projects' className="button rounded">
          Menu Makanan
        </NavLink>

        <NavLink to='/about' className="button rounded">
          About Me
        </NavLink>

        <NavLink to='/contact' className="button rounded">
          Kontak
        </NavLink>
      </header>

      <div className='container'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:id" element={<ProjectPage />} />
          <Route path="about" element={<AboutMePage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
