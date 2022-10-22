import React from 'react';
import { Link } from 'react-router-dom';
import Pill from '../components/Pill'
import './styles/home.css';
import logo from '../images/logo.png'
import mersana from '../images/mersana.png'
import novartis from '../images/novartis.png'
import papivax from '../images/papivax.png'
import rhythm from '../images/rhythm.png'
import takeda from '../images/takeda.png'

export default function Home() {
  return (
    <div className='home-content'>
      <div className='hero'>
        <Pill rotation={192} top='15%' left='28vw'>
          <div className='s'>
            <div className='top' style={{backgroundColor: '#791233'}}/>
            <div className='bottom' style={{backgroundColor: '#748EC7'}}/>
          </div>
        </Pill>
        <Pill rotation={180} top='42%' left='18vw'>
          <div className='m'>
            <div className='top' style={{backgroundColor: '#0A1D33'}}/>
            <div className='bottom' style={{backgroundColor: '#DDA638'}}/>
          </div>
        </Pill>
        <Pill rotation={363} top='0' left='10vw'>
          <div className='m'>
            <div className='top' style={{backgroundColor: '#0A1D33'}}/>
            <div className='bottom' style={{backgroundColor: '#748EC7'}}/>
          </div>
        </Pill>
        <Pill rotation={90} bottom='0' left='25vw'>
          <div className='m'>
            <div className='top' style={{backgroundColor: '#748EC7'}}/>
            <div className='bottom' style={{backgroundColor: '#791233'}}/>
          </div>
        </Pill>
        <Pill rotation={270} bottom='20%' left='5vw'>
          <div className='l'>
            <div className='top' style={{backgroundColor: '#DDA638'}}/>
            <div className='bottom' style={{backgroundColor: '#748EC7'}}/>
          </div>
        </Pill>
        <Pill rotation={122} top='25%' right='35vw'>
          <div className='m'>
            <div className='top' style={{backgroundColor: '#0A1D33'}}/>
            <div className='bottom' style={{backgroundColor: '#791233'}}/>
          </div>
        </Pill>
        <Pill rotation={28} top='40%' right='20vw'>
          <div className='s'>
            <div className='top' style={{backgroundColor: '#DDA638'}}/>
            <div className='bottom' style={{backgroundColor: '#748EC7'}}/>
          </div>
        </Pill>
        <Pill rotation={200} top='0' right='10vw'>
          <div className='l'>
            <div className='top' style={{backgroundColor: '#748EC7'}}/>
            <div className='bottom' style={{backgroundColor: '#791233'}}/>
          </div>
        </Pill>
        <Pill rotation={130} bottom='20%' right='10vw'>
          <div className='m'>
            <div className='top' style={{backgroundColor: '#0A1D33'}}/>
            <div className='bottom' style={{backgroundColor: '#791233'}}/>
          </div>
        </Pill>
        <Pill rotation={315} top='0' right='25vw'>
          <div className='l'>
            <div className='top' style={{backgroundColor: '#DDA638'}}/>
            <div className='bottom' style={{backgroundColor: '#791233'}}/>
          </div>
        </Pill>
        <Pill rotation={54} top='0' right='45vw'>
          <div className='s'>
              <div className='top' style={{backgroundColor: '#DDA638'}}/>
              <div className='bottom' style={{backgroundColor: '#791233'}}/>
          </div>
        </Pill>
        <Pill rotation={263} top='0' left='38vw'>
          <div className='m'>
              <div className='top' style={{backgroundColor: '#DDA638'}}/>
              <div className='bottom' style={{backgroundColor: '#0A1D33'}}/>
          </div>
        </Pill>
        <Pill rotation={340} bottom='0' right='50vw'>
          <div className='s'>
              <div className='top' style={{backgroundColor: '#0A1D33'}}/>
              <div className='bottom' style={{backgroundColor: '#791233'}}/>
          </div>
        </Pill>
        <Pill rotation={237} bottom='0' right='25vw'>
          <div className='l'>
              <div className='top' style={{backgroundColor: '#748EC7'}}/>
              <div className='bottom' style={{backgroundColor: '#791233'}}/>
          </div>
        </Pill>
        <img src={logo} alt='full logo'></img>
      </div>
      <div className='welcome-info'>
        <p className='content'>Cambridge based Regulatory Affairs Specialist helping pharmaceutical companies worldwide to gain approval for their medicines in a timely and cost-effective manner.</p>
        <Link to='contact'>
          <button>
            Work With Us
            <span className='material-symbols-outlined'>
                arrow_forward
            </span>
          </button>
        </Link>
        <div className="custom-shape-divider-top-1666375630">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
            </svg>
        </div>
        <div className="custom-shape-divider-bottom-1666376713">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
            </svg>
        </div>
      </div>
      <div className='companies content'>
        <h1>Who We Work With</h1>
        <div className='logos'>
          <img className='logo' src={takeda} alt='takeda'/>
          <img className='logo' src={mersana} alt='mersana'/>
          <img className='logo' src={novartis} alt='novartis'/>
          <img className='logo' src={papivax} alt='papivax'/>
          <img className='logo' src={rhythm} alt='rhtyhm'/>
        </div>
      </div>
    </div>   
  )
}
