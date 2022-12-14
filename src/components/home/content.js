import React, { useState, useEffect, useRef } from 'react';
import Profile from "../../assets/img/Profile.png";
import ProfileOverlay from "../../assets/img/ProfileOverlay.png";
import Cv from "../../assets/pdf/CVJheanVega.pdf";
import Typed from 'typed.js';

export default function Content() {
const [onlyOne, setOnlyOne] = useState(true);
const refSpan = useRef();


useEffect(() => {
    if(onlyOne){
        console.log('asd')
        refSpan.innerHTML = '';
        const typed = new Typed(refSpan.current,{
            strings:['Frontend Developer', 'Autodidact'],
            startDelay:300,
            typeSpeed:75,
            backDelay:1500,
            backSpeed:75,
            showCursor:true,
            loop:true
        })
        setOnlyOne(false);
    }
    
},[]);

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
