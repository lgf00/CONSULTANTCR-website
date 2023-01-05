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
          <div className="footer-waves">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                  <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                  <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
              </svg>
          </div>
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
