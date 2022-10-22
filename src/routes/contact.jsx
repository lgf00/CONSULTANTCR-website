import React, { useState } from 'react';
import './styles/contact.css';

export default function Contact() {
  const [FN, setFN] = useState();
  const [LN, setLN] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [comp, setComp] = useState();
  const [help, setHelp] = useState();
  const [hear, setHear] = useState()

  return (
    <>
    <div className="content contact-content">
      <h1><span style={{color: "#0A1D33"}}>Get In</span> <span style={{color: "#791233"}}>Touch</span></h1>
      <h4>Ready to expedite your development journey? Have any questions on what we can do for you? Reach out! Let's get to know one another.</h4>
      <form className="contact-form">
        <div className="small">
          <label>
            First name
            <input type="text" value={FN} onChange={(e) => {setFN(e.target.value)}}/>
          </label>
          <label>
            Last Name
            <input type="text" value={LN} onChange={(e) => {setLN(e.target.value)}}/>
          </label>
        </div>
        <div className="small">
          <label>
            Email
            <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
          </label>
          <label>
            Phone
            <input type="tel" value={phone} onChange={(e) => {setPhone(e.target.value)}}/>
          </label>
        </div>
        <label className="med">
          Company
          <input type="text" value={comp} onChange={(e) => {setComp(e.target.value)}}/>
        </label>
        <label className="large">
          How Can We Help?
          <textarea type="text" value={help} onChange={(e) => {setHelp(e.target.value)}}/>
        </label>
        <label className="large">
          How Did You Hear About Us?
          <textarea type="text" value={hear} onChange={(e) => {setHear(e.target.value)}}/>
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
    </>
  )
}
