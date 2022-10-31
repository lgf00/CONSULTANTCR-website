import React from 'react';
import { Link } from 'react-router-dom';
// import Pill from '../components/Pill'
import './styles/home.css';
import logo from '../images/logo.png'
import mersana from '../images/mersana.png'
import aobiome from '../images/aobiome.png'
import papivax from '../images/papivax.png'
import rhythm from '../images/rhythm.png'
import takeda from '../images/takeda.png'
import hillhurst from '../images/hillhurst.png'
import tanvex from '../images/tanvex.png'
import wmackin from '../images/wmackin.png'
import dan from '../images/dan.jpg'
import sharon from '../images/sharon.jpg'
import kelsey from '../images/kelsey.jpg'

export default function Home() {
  return (
    <div className='home-content'>
      <div className='hero'>
        <img src={logo} alt='full logo'/>
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
        <div className='custom-shape-divider-top-1666375630'>
            <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
                <path d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25' className='shape-fill'></path>
                <path d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' opacity='.5' className='shape-fill'></path>
                <path d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z' className='shape-fill'></path>
            </svg>
        </div>
        <div className='custom-shape-divider-bottom-1666376713'>
            <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
                <path d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25' className='shape-fill'></path>
                <path d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' opacity='.5' className='shape-fill'></path>
                <path d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z' className='shape-fill'></path>
            </svg>
        </div>
      </div>
      <div className='companies content'>
        <h1>Current Customers</h1>
        <div className='logos'>
          <a className='logo' href="https://www.aobiome.com/" target="_blank" rel="noreferrer">
            <img  src={aobiome} alt='aobiome'/>
          </a>
          <a className='logo' href="https://www.takeda.com/en-us/" target="_blank" rel="noreferrer">
            <img  src={takeda} alt='takeda'/>
          </a>
          <a className='logo' href="https://hillhurstbio.com/" target="_blank" rel="noreferrer">
            <img  src={hillhurst} alt='hillhurst'/>
          </a>
          <a className='logo' href="https://www.mersana.com/" target="_blank" rel="noreferrer">
            <img src={mersana} alt='mersana'/>
          </a>
          <a className='logo' href="https://www.linkedin.com/company/wmackin-&-associates/about/" target="_blank" rel="noreferrer">
            <img src={wmackin} alt='wmackin'/>
          </a>
          <a className='logo' href="https://www.tanvex.com/" target="_blank" rel="noreferrer">
            <img src={tanvex} alt='tanvex'/>
          </a>
          <a className='logo' href="https://papivax.com/" target="_blank" rel="noreferrer">
            <img src={papivax} alt='papivax'/>
          </a>
          <a className='logo' href="https://www.rhythmtx.com/" target="_blank" rel="noreferrer">
            <img src={rhythm} alt='rhtyhm'/>
          </a>
        </div>
      </div>
      <div className='reviewsec'>
        <h1>What People Have Said</h1>
        <div className='reviews content'>
          <div className='review'>
            <div className='person'>
              <img src={sharon} alt='person' className='person'/>
            </div>
            <div>
              <h3 className='name'>Sharon Bowen</h3>
              <h4 className='assoc'>Senior Director, Regulatory Affairs, Merus N.V.</h4>
              <p className='text'>
                During the time I worked with Alonso, I was impressed by his ability to work under extremely tight timelines and still be able to get large submissions out the door on time. A 20 volume paper IND is not an easy thing to publish and compile in a small company; Alonso was extremely well-organized and worked tirelessly to ensure that the document was of the utmost quality. He maintained a positive, cheerful attitude, regardless of the situation and it was a pleasure to work with him.
              </p>
            </div>
          </div>
          <div className='review'>
            <div className='person'>
              <img src={dan} alt='person' className='person'/>
            </div>
            <div>
              <h3 className='name'>Dan Linkie</h3>
              <h4 className='assoc'>Managing Director at ARRENDEE LLC</h4>
              <p className='text'>Alonso has consistently provided the support needed in fulfilling client demands in a professional manner and with the utmost expediency. He is a most dependable colleague.</p>
            </div>
          </div>
          <div className='review'>
            <div className='person'>
              <img src={kelsey} alt='person' className='person'/>
            </div>
            <div>
              <h3 className='name'>Kelsey LeBlanc</h3>
              <h4 className='assoc'>President of McCormick LifeScience Consultants, LLC</h4>
              <p className='text'>
                Alonso is a true pleasure to work with! His determination, organization, eagerness to learn and ability to provide high quality work to his colleagues/clients is commendable. In addition to his superb work ethic, Alonso's friendliness and humor is a great asset to have in the workplace. I would recommend his services to any company, as they would be lucky to have him as a part of their team!
              </p>
            </div>
          </div>
        </div>
        <div className="custom-shape-divider-top-1666499501">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
        </div>
        <div class="custom-shape-divider-bottom-1667243333">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
            </svg>
        </div>
      </div>
    </div>   
  )
}
