import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Outlet, ScrollRestoration, useRouteError } from "react-router-dom";
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
    <Route path="/" element={<Layout />} errorElement={<ErrorBoundary/>}>
        <Route index element={<Home />} />
        <Route path="regulatory-support" element={<WWD />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
    </Route>
  )
)

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  return <ErrorPage error={error}/>;
}

function Layout() {
  return (
      <>
        <Nav/>
        <div className="outlet">
          <Outlet/>
        </div>
        <footer>
          <div className="footer-logo">
            <img src={logosm} alt="CONSULTANTCR, LLC" width="82px"/>
            <div className="footer-info">
              <p>aguzman@consultantcr.com</p>
              <p>(617) 669-3566</p>
              <p>Cambridge MA, 02139</p>
            </div>
          </div>
          <div className="footer-info right">
            <p>CONSULTANTCR, LLC</p>
            <p>Minority owned and operated business</p>
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
