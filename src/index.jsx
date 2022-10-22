import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Outlet, ScrollRestoration } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './routes/home';
import WWD from './routes/wwd';
import About from './routes/about';
import Contact from './routes/contact';
import ErrorPage from './routes/error-page';
import Nav from './components/nav';
import logosm from './images/logo-sm.png'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/consultantcr-website/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="what-we-do" element={<WWD />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
    </Route>
  )
)

function Layout() {
  return (
      <>
        <Nav/>
        <div className="outlet">
          <Outlet/>
        </div>
        <footer>
          <img src={logosm} alt="logo" width="82px"/>
          <div className="footer-info">
            <p>E:aguzman@consultantcr.com</p>
            <p>M: (617) 949-0786</p>
            <p>Cambridge MA, 02139</p>
          </div>
        </footer>
        <ScrollRestoration/>
      </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
