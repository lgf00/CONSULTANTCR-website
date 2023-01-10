import React from 'react'
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import './styles/wwd.css'
import { Helmet } from 'react-helmet';

export default function WWD() {
  return (
    <div className='content'>
      <Helmet>
        <title>What We Do - CONSULTANTCR</title>
        <meta name="description" content="With more than 15 Years of professional working experience in regulatory operations and regulatory affairs we are proud to be able to help our clients to the fullest ability.
          Listed below are areas we have helped our clients with for countless years. From regulatory operations to eCTD publishing support, we got your covered."/>
      </Helmet>
      <div className='section'>
        <h1><span style={{color: "#0A1D33"}}>What</span><span style={{color: "#748EC7"}}> We </span><span style={{color: "#0A1D33"}}>Do</span></h1>
        <div className='numbers'>
          {/* IND, NDA, BLA, MAA, NDS */}
          <div className='counter RBgrad'>
            <CountUp
              className='IND'
              end={3816}
              duration={4}
              useEasing={true}
              easingFn={(t, b, c, d) => (t===d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b}
              separator=","
              suffix="+"
              >
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
            <p>INDs</p>
          </div>
          <div className='counter BLgrad'>
            <CountUp
              className='NDA'
              end={2180}
              duration={4}
              useEasing={true}
              easingFn={(t, b, c, d) => (t===d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b}
              separator=","
              suffix="+"
              >
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
            <p>NDAs</p>
          </div>
          <div className='counter LRgrad'>
            <CountUp
              className='BLA'
              end={1902}
              duration={4}
              useEasing={true}
              easingFn={(t, b, c, d) => (t===d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b}
              separator=","
              suffix="+"
              >
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
            <p>BLAs</p>
          </div>
          <div className='counter RBgrad'>
            <CountUp
              className='MAA'
              end={873}
              duration={4}
              useEasing={true}
              easingFn={(t, b, c, d) => (t===d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b}
              separator=","
              suffix="+"
              >
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
            <p>MAAs</p>
          </div>
          <div className='counter BLgrad'>
            <CountUp
              className='NDS'
              end={528}
              duration={4}
              useEasing={true}
              easingFn={(t, b, c, d) => (t===d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b}
              separator=","
              suffix="+"
              >
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
            <p>NDSs</p>
          </div>
        </div>
        <p>
          With more than 15 Years of professional working experience in regulatory operations and regulatory affairs we are proud to be able to help our clients to the fullest ability.
          Listed below are areas we have helped our clients with for countless years. From regulatory operations to eCTD publishing support, we got your covered.
        </p>
        <p>
          Have questions specific to what CONSULTANTCR can do for you?
        </p>
        <Link to="/contact">
          <button className='wwd-button red-white-grad'>
            Reach Out
            <span className='material-symbols-outlined'>
              arrow_forward
            </span>
          </button>
        </Link>
      </div>
      <div className='section' id='regulatory-experience'>
        <h2>
          <span style={{color: "#0A1D33"}}>Regulatory</span> <span style={{color: "#791233"}}>Experience and Expertise</span> 
        </h2>
        <ul>
          <li>
            Extensive Experience in Management of Dossier for Investigational and Marketed products
          </li>
          <li>
            Expert Knowledge and Experience in Regulatory Submission Management and Dossier Compilation, Validation, Publishing and Dispatch
          </li>
          <li>
            Profound Knowledge of Regulatory Requirements and Procedures in the US and ROW throughout the Products Life Cycle
          </li>
          <li>
            Profound Knowledge of regulatory information management, including technical requirements and systems used in regulatory operations, such as document management systems
          </li>
          <li>
            Federal Food and Drug Agency Agent (US Agent)
          </li>
          <li>
            Experience in Regulatory Operations Strategy Services
          </li>
          <li>
            Strong Project Management Skills with Regulatory Projects
          </li>
          <li>
            Expeditious Submission Document Preparation
          </li>
          <li>
            Strong Familiarity with Metadata Management and Associated Processes
          </li>
          <li>
            Strong Understanding of Relational Data Structures, Principles, and Practices
          </li>
          <li>
            Working Knowledge of Pharmaceutical Industry-Related Laws, Regulations and Submission Guidance
          </li>
          <li>
            Experience Implementing Enterprise Data Management Processes, Procedures, and Decision Support
          </li>
          <li>
            Working Knowledge of Pharmaceutical Organizations, Including Interrelationships of Functional Areas
          </li>
          <li>
            Expert Knowledge of ICH guidelines
          </li>
          <li>
            Expert Knowledge of deploying Document Management Systems
          </li>
          <li>
            Expert RIM systems (Veeva Vault) Administration
          </li>
        </ul>
      </div>
      <div className='section' id='ectd-publishing'>
        <h2><span style={{color: "#0A1D33"}}>eCTD</span> <span style={{color: "#791233"}}>Publishing</span> <span style={{color: "#0A1D33"}}>Support</span></h2>
        <ul>
          <li>
            Regulatory Publishing Expertise
          </li>
          <li>
            Regulatory Publishing Submission Management
          </li>
          <li>
            Submission-level Publishing in CTD/eCTD Formats
          </li>
          <li>
            Publishing of Regulatory Documents: Clinical, Non-clinical, and CMC
          </li>
          <li>
            Preparation of Complient Applications and Life Cycle Dossier for Investigational and Marketed Products
          </li>
          <li>
            Conversion of Legacy Documents for eCTD
          </li>
          <li>
            Document Formatting and Stylistics
          </li>
          <li>
            Document Submission to FDA, EMEA and Successful Management of Regulatory Review Processes.
          </li>
        </ul>
      </div>
    </div>
  )
}
