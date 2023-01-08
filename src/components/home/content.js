import React, { useState, useEffect, useRef } from 'react';
import Profile from "../../assets/img/Profile.png";
import ProfileOverlay from "../../assets/img/ProfileOverlay.png";
import Cv from "../../assets/pdf/CVJheanVega.pdf";
import Typed from 'typed.js';

export default function Content() {
    const refSpan = useRef();


    useEffect(() => {
        refSpan.innerHTML = '';
        const typed = new Typed(refSpan.current, {
            strings: ['Frontend Developer', 'Autodidact'],
            startDelay: 300,
            typeSpeed: 75,
            backDelay: 1500,
            backSpeed: 75,
            showCursor: true,
            loop: true
        })

        let ubicacionPrincipal = window.pageYOffset;

        /* --evento scroll */
        window.addEventListener("scroll", function () {

            let desplazamientoActual = window.pageYOffset;

            if (ubicacionPrincipal <= 500 && ubicacionPrincipal > 0) {
                document.querySelectorAll('.li-link')
                    .forEach(e => { e.classList.remove('link-active') })
                document.querySelectorAll('.li-link')[4].classList.add('link-active');
                document.getElementById('burger').checked = false;
            } else if (ubicacionPrincipal <= 1000 && ubicacionPrincipal > 500) {
                document.querySelectorAll('.li-link')
                    .forEach(e => { e.classList.remove('link-active') })
                document.querySelectorAll('.li-link')[3].classList.add('link-active');
                document.getElementById('burger').checked = false;
            } else if (ubicacionPrincipal <= 1500 && ubicacionPrincipal > 1000) {
                document.querySelectorAll('.li-link')
                    .forEach(e => { e.classList.remove('link-active') })
                document.querySelectorAll('.li-link')[2].classList.add('link-active');
                document.getElementById('burger').checked = false;
            } else if (ubicacionPrincipal <= 2000 && ubicacionPrincipal > 1500) {
                document.querySelectorAll('.li-link')
                    .forEach(e => { e.classList.remove('link-active') })
                document.querySelectorAll('.li-link')[1].classList.add('link-active');
                document.getElementById('burger').checked = false;
            } else if (ubicacionPrincipal <= 2500 && ubicacionPrincipal > 2000) {
                document.querySelectorAll('.li-link')
                    .forEach(e => { e.classList.remove('link-active') })
                document.querySelectorAll('.li-link')[0].classList.add('link-active');
                document.getElementById('burger').checked = false;
            }

            ubicacionPrincipal = desplazamientoActual;
        });

    }, []);

    const setClassFocus = (entries) => {
        const entry = entries[0];

        // const Home = document.getElementById("home");
        // !entry.isIntersecting && Home.classList.remove("focus");
        // entry.isIntersecting && Home.classList.add("focus");
        console.log('home')
        document.querySelectorAll('.li-link')
            .forEach(e => { e.classList.remove('link-active') })
        document.querySelectorAll('.li-link')[4].classList.add('link-active');
        document.getElementById('burger').checked = false;


    };

    return (
        <div className="content">
            <div className="presentation">
                <h1>Jhean Carlos</h1>
                <h2>I'm <span ref={refSpan}></span></h2>
                <p>
                    Frontend developer ready to work with you
                </p>
                <div className="buttons">
                    <div className="btn-cv">
                        <a href={Cv}>Download CV</a>
                    </div>
                    <div className="btn-contact">
                        <a>Contact me</a>
                    </div>
                </div>
            </div>
            <div className="profile">
                <img src={Profile} className="img"></img>
                <img src={ProfileOverlay} className="overlay"></img>
            </div>
        </div>
    );
}
