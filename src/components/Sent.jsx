import React from 'react'
import './sent.css'
import Pill from './Pill'

export default function Sent() {
  return (
    <div className='sent'>
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
        <Pill rotation={90} bottom='10%' left='25vw'>
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
        <Pill rotation={122} top='25%' right='5vw'>
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
        <Pill rotation={340} bottom='10%' right='50vw'>
          <div className='s'>
              <div className='top' style={{backgroundColor: '#0A1D33'}}/>
              <div className='bottom' style={{backgroundColor: '#791233'}}/>
          </div>
        </Pill>
        <Pill rotation={237} bottom='10%' right='25vw'>
          <div className='l'>
              <div className='top' style={{backgroundColor: '#748EC7'}}/>
              <div className='bottom' style={{backgroundColor: '#791233'}}/>
          </div>
        </Pill>
        <div className='contact-content'>
          <h1><span style={{color: "#0A1D33"}}>Thank</span> <span style={{color: "#791233"}}>You!</span></h1>
          <h4>We will get back to you as soon as possible through the contact information you provided. Looking forward to embarking on this journey with you!</h4>
        </div>
    </div>
  )
}
