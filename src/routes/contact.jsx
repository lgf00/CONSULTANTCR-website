import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './styles/contact.css';
import Sent from '../components/Sent';

export default function Contact() {
  const form = useRef();
  const [ sending, setSending ] = useState(false)
  const [ sent, setSent ] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true)
    emailjs.sendForm('service_jz8ssw4', 'template_a65m2ac', form.current, 'gMV75W7yi5PsJBDjv')
      .then((result) => {
          console.log(result.text);
          setSent(true)
      }, (error) => {
          console.log(error.text);
          setSent(false)
      });
  };

  return (
    <>
    <div className="content">
      {sent ? <Sent/> : <div className='contact-content'>
        <h1><span style={{color: "#0A1D33"}}>Get In</span> <span style={{color: "#791233"}}>Touch</span></h1>
        <h4>Ready to expedite your development journey? Have any questions on what we can do for you? Reach out! Let's get to know one another.</h4>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="small">
            <label>
              First name
              <input type="text" name='firstname' />
            </label>
            <label>
              Last Name
              <input type="text" name='lastname' />
            </label>
          </div>
          <div className="small">
            <label>
              Email
              <input type="email" name='email' />
            </label>
            <label>
              Phone
              <input type="tel" name='phone' />
            </label>
          </div>
          <label className="med">
            Company
            <input type="text" name='comp' />
          </label>
          <label className="large">
            How Can We Help?
            <textarea type="text" name='help' />
          </label>
          <label className="large">
            How Did You Hear About Us?
            <textarea type="text" name='hear' />
          </label>
          <div className="sub">
            <button type="submit">Send</button>
            {sending ? 
            <div className="loading">
              <div className="top"/>
              <div className="bottom"/>
            </div>
            : ''}
          </div>
        </form>
      </div>}
    </div>
    </>
  )
}
