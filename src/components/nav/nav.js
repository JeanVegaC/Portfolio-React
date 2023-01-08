import React, { useState, useEffect, useRef } from 'react';
import './nav.css'

export default function Nav() {
    const [showNav, setShowNav] = useState(false);


    useEffect(() => {
        let ubicacionPrincipal = window.pageYOffset;
        let $nav = document.getElementById("nav");
        /* --evento scroll */
        $nav && window.addEventListener("scroll", function () {

            let desplazamientoActual = window.pageYOffset;

            if (ubicacionPrincipal >= desplazamientoActual) {
                $nav.style.top = "0px";
            } else {
                $nav.style.top = "-80px";
            }

            ubicacionPrincipal = desplazamientoActual;
        });
    }, []);

    const handleLinkNav = (e) => {
        document.querySelectorAll('.li-link')
            .forEach(e => { e.classList.remove('link-active') })
        e.target.parentNode.classList.add('link-active');

        document.getElementById('burger').checked = false;
        setShowNav(false);
    }

    useEffect(() => {
        const nav = document.querySelector('.nav');

        if (showNav) {
            nav.classList.add('show-nav')
        } else {
            nav.classList.remove('show-nav')
        }
    }, [showNav]);

    return (
        <nav className="nav" id='nav'>
            <div className="logo">Jhean Carlos</div>
            <ul className="ul-links">
                <li className="li-link" onClick={handleLinkNav}>
                    <a href="#contact">Contact</a>
                </li>
                <li className="li-link" onClick={handleLinkNav}>
                    <a href="#projects">Projects</a>
                </li>
                <li className="li-link" onClick={handleLinkNav}>
                    <a href="#skills">Skills</a>
                </li>

                <li className="li-link" onClick={handleLinkNav}>
                    <a href="#about">About Me</a>
                </li>
                <li className="li-link link-active" onClick={handleLinkNav}>
                    <a href="#">Home</a>
                </li>
            </ul>
            <label htmlFor="burger" className="burger">
                <input id="burger" type="checkbox" onClick={(e) => { setShowNav(e.target.checked) }} />
                <span></span>
                <span></span>
                <span></span>
            </label>
        </nav>
    )
}