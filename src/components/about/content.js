import { useEffect, useState } from "react";
import {
    AiFillGithub,
    AiOutlineWhatsApp,
    AiFillLinkedin,
} from "react-icons/ai";
import About from "../../assets/svg/About.svg";
import Figure4 from "../../assets/svg/figure-6.svg";
import Figure5 from "../../assets/svg/figure-7.svg";
import HeaderSection from "../shared/headerSection";

export default function Content() {
    // let tmp = window.scrollY;

    //     document.addEventListener('scroll', (e) => {

    //         if(tmp != window.scrollY){
    //             console.log('Scrolling');

    //         }else{
    //             console.log('Is stop');
    //         }
    //         tmp = window.scrollY;

    //     })

    // useEffect(() => {

    //     const stopAnimation = ()=>{
    //         console.log('is stop');
    //             figure.classList.remove('scrolling');
    //     }
    //     const figure = document.getElementById('figure')
    //     document.addEventListener('scroll',(e)=>{
    //         figure.classList.add('scrolling');
    //         setTimeout(async () => {
    //             await stopAnimation();
    //         }, 1000);

    //     })

    // }, []);

    useEffect(() => {
        const figures = document.querySelectorAll(".figure");
        console.log(figures);
        function scrollStop(callback, refresh = 66) {
            // Make sure a valid callback was provided
            if (!callback || typeof callback !== "function") return;

            // Setup scrolling variable
            let isScrolling;

            // Listen for scroll events
            window.addEventListener(
                "scroll",
                function (event) {
                    figures[0].classList.add("scrolling");
                    figures[1].classList.add("scrolling");

                    // Clear our timeout throughout the scroll
                    window.clearTimeout(isScrolling);

                    // Set a timeout to run after scrolling ends
                    isScrolling = setTimeout(callback, refresh);
                },
                false
            );
        }

        scrollStop(function () {
            figures[0].classList.remove("scrolling");
            figures[1].classList.remove("scrolling");
        });
    }, []);

    useEffect(() => {
        const options = {
            // treshold: 1,
            rootMargin: "-140px",
        };

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
            <HeaderSection section={"About"} />
            <div className="container">
                <div className="img">
                    <img src={About}></img>
                </div>
                <div className="info">
                    <p>
                        Hello how are you! My name is Jean Carlos Vega Casimiro, I am 19
                        years old and I am a FrontEnd developer, I am currently studying
                        systems engineering, I am also a self-taught student and I am
                        looking to participate in projects with you
                    </p>
                    <ul className="ul-social">
                        <li>
                            <a href="https://github.com/JeanVegaC">
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
            <img src={Figure4} className="figure" id="figure"></img>
            <img src={Figure5} className="figure"></img>
        </div>
    );
}
