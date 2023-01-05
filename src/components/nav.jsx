import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import './nav.css'
import logosm from '../images/logo-sm.png'

export default function Nav() {
    const [expanded, setExpanded] = useState(false)

    function checklink() {
        if (expanded) {
            setExpanded(!expanded)
        }
    }

    return (
        <nav>
            <Link to={'/'}>
                <img src={logosm} alt="CONSULTANTCR, LLC" width="82px"/>
            </Link>
            <div
                className="hamburger"
                onClick={() => {
                    setExpanded(!expanded);
                }}
            >
                <span className="material-symbols-outlined">
                menu
                </span>
            </div>
            <div
                className={expanded ? "expanded" : ""}
            >
                <ul>
                    <li>
                        <NavLink end to=''
                        className={({ isActive }) =>
                            isActive ? 'active' : undefined
                        } 
                        onClick={() => {checklink();}}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='regulatory-support' className={({ isActive }) =>
                            isActive ? 'active' : undefined
                        } 
                        onClick={() => {checklink();}}
                        >
                            Regulatory Support
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='about' className={({ isActive }) =>
                            isActive ? 'active' : undefined
                        } 
                        onClick={() => {checklink();}}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='contact' className={({ isActive }) =>
                            isActive ? 'active' : undefined
                        } 
                        onClick={() => {checklink();}}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
