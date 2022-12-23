import { useEffect, useState } from "react";
import {AiFillGithub, AiOutlineWhatsApp, AiFillLinkedin} from "react-icons/ai";
import About from "../../assets/svg/About.svg";
import Figure4 from '../../assets/svg/figure-4.svg';
import Figure5 from '../../assets/svg/figure-5.svg';
import HeaderSection from "../shared/headerSection";

export default function Content() {
    

    // useEffect(() => {
    //     console.log('asdads');
    // }, [window.screen]);

    useEffect(() => {

        const options = {
            // treshold: 1,
            rootMargin: "-140px",
        };

        // if(window.screen.width<500) options.rootMargin = '-140px';

        const observer = new IntersectionObserver(setClassFocus, options);
        const sectionABout = document.getElementById("about");
        sectionABout && observer.observe(sectionABout);
    }, []);

    const setClassFocus = (entries) => {
        const entry = entries[0];
        const About = document.getElementById("about");
        !entry.isIntersecting && About.classList.remove("focus");
        entry.isIntersecting && About.classList.add("focus");
    };

    return (
        <div className="content">
            <HeaderSection section={'About'}/>
            <div className="container">
                <div className="img">
                    <img src={About}></img>
                </div>
                <div className="info">
                    <p>
                        My name is Jhean Carlos Vega Casimiro, i'm ingenier of Sistem and
                        study web developer, i'm from Perú and i'm 20 years old
                    </p>
                    <ul className="ul-social">
                        <li>
                            <a href="https://www.facebook.com">
                                <AiFillGithub className="icon" title="JeanVegaC" />
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/+51967216577">
                                <AiOutlineWhatsApp className="icon" title="+51967216577" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/jean-vega-7a846b21b/">
                                <AiFillLinkedin className="icon" title="JeanVega" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <img src={Figure4} className="figure"></img>
            <img src={Figure5} className="figure"></img>
        </div>
    );
}
