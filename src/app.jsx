import React from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import './app.css'
import Home from './routes/home';
import WWD from './routes/wwd';
import About from './routes/about';
import Contact from './routes/contact';
import ErrorPage from './routes/error-page'


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
            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'what-we-do'}>What We Do</Link>
                    </li>
                    <li>
                        <Link to={'about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'contact'}>Contact</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
            <footer>
                
            </footer>
        </>
    );
}
