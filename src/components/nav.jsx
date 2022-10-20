import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './nav.css'

export default function Nav() {
    const [expanded, setExpanded] = useState(false)

    return (
        <nav>
            <Link to={'/'}>
                <img src="/logo-sm.png" alt="logo" width="82px"/>
            </Link>
            <button
                className="hamburger"
                onClick={() => {
                    setExpanded(!expanded);
                }}
            >
                {/* https://icons8.com/license */}
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="24" height="24"
                viewBox="0 0 50 50"
                ><path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 L 0 7.5 z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 L 0 22.5 z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 L 0 37.5 z"></path></svg>
            </button>
            <div
                className={expanded ? "expanded" : ""}
            >
                <ul>
                    <li>
                        <Link to={'/'} onClick={() => {setExpanded(!expanded);}}>Home</Link>
                    </li>
                    <li>
                        <Link to={'what-we-do'} onClick={() => {setExpanded(!expanded);}}>What We Do</Link>
                    </li>
                    <li>
                        <Link to={'about'} onClick={() => {setExpanded(!expanded);}}>About</Link>
                    </li>
                    <li>
                        <Link to={'contact'} onClick={() => {setExpanded(!expanded);}}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
