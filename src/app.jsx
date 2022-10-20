import React from 'react'
import { Routes, Route, Outlet } from "react-router-dom";
import './app.css'
import Home from './routes/home';
import WWD from './routes/wwd';
import About from './routes/about';
import Contact from './routes/contact';
import ErrorPage from './routes/error-page';
import Nav from './components/nav';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="what-we-do" element={<WWD />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  )
}

function Layout() {
    return (
        <>
          <Nav/>
          <div className="outlet">
            <Outlet/>
          </div>
          <footer>
            <img src="/logo-sm.png" alt="logo" width="82px"/>
            <div className="footer-info">
              <p>E:aguzman@consultantcr.com</p>
              <p>M: (617) 949-0786</p>
              <p>Cambridge MA, 02139</p>
            </div>
          </footer>
        </>
    );
}
