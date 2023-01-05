import React from 'react'
import { Link } from 'react-router-dom';
import './styles/wwd.css'

export default function WWD() {
  return (
    <div className='content'>
      <div className='section'>
        <h1><span style={{color: "#0A1D33"}}>CONSULTANT</span><span style={{color: "#748EC7"}}>CR</span><span style={{color: "#0A1D33"}}>, LLC</span></h1>
        <p>
          With more than 15 Years of professional working experience in regulatory operations and regulatory affairs we are proud to be able to help our clients to the fullest ability.
          Listed below are areas we have helped our clients with for countless years. From regulatory operations to eCTD publishing support, we got your covered.
        </p>
        <p>
          Have questions specific to what CONSULTANTCR can do for you?
        </p>
        <Link to="/contact">
          <button className='wwd-button'>
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
