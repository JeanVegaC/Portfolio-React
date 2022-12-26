import { useState, useEffect } from "react";
import {BiCodeAlt} from 'react-icons/bi';
import {MdOutlineDesignServices} from 'react-icons/md';
import {BsLightbulb} from 'react-icons/bs';
import HeaderSection from "../shared/headerSection";
export default function Content() {
    useEffect(() => {
        const options = {
            // treshold: 1,
            rootMargin: "-140px",
        };

        const observer = new IntersectionObserver(setClassFocus, options);
        const sectionSkills = document.getElementById("skills");
        sectionSkills && observer.observe(sectionSkills);
    }, []);

    const setClassFocus = (entries) => {
        const entry = entries[0];
        const Skills = document.getElementById("skills");
        !entry.isIntersecting && Skills.classList.remove("focus");
        entry.isIntersecting && Skills.classList.add("focus");
    };

    return (
        <div className="content">
            <HeaderSection section={'Skills'} />
            <ul className="ul-cards">
                <li className="li-card">
                    <header data-card="DESIGN">
                        <MdOutlineDesignServices className="icon"/>
                        <h3>Web Desing</h3>
                    </header>
                    <ul className="ul-skills">
                        <li className="li-skill">
                            <span>Figma</span>
                            <div className="bars">
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"> </div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </div>
                            <span>Básico</span>
                        </li>
                        {/* <li className="li-skill">
                            <span>CSS3</span>
                            <div className="bars">
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </div>
                            <span>Intermedio</span>
                        </li>
                        <li className="li-skill">
                            <span>JavaScript</span>
                            <div className="bars">
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </div>
                            <span>Intermedio</span>
                        </li> */}
                    </ul>
                </li>
                <li className="li-card">
                    <header data-card="FRONT">
                    <BiCodeAlt className="icon"/>
                        <h3>Web Development</h3>
                    </header>
                    <ul className="ul-skills">
                        <li className="li-skill">
                            <span>HTML5</span>
                            <div className="bars">
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </div>
                            <span>Intermedio</span>
                        </li>
                        <li className="li-skill">
                            <span>CSS3</span>
                            <div className="bars">
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </div>
                            <span>Intermedio</span>
                        </li>
                        <li className="li-skill">
                            <span>Tailwind</span>
                            <div className="bars">
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </div>
                            <span>Básico</span>
                        </li>
                        <li className="li-skill">
                            <span>JavaScript</span>
                            <div className="bars">
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </div>
                            <span>Intermedio</span>
                        </li>
                        <li className="li-skill">
                            <span>ReactJs</span>
                            <div className="bars">
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </div>
                            <span>Básico</span>
                        </li>
                    </ul>
                </li>
                <li className="li-card">
                    <header data-card="BACK">
                        <BsLightbulb className="icon"/>
                        <h3>App Development</h3>
                    </header>
                    <ul className="ul-skills">
                        <li className="li-skill">
                            <span>Java</span>
                            <div className="bars">
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </div>
                            <span>Básico</span>
                        </li>
                        <li className="li-skill">
                            <span>NodeJs</span>
                            <div className="bars">
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </div>
                            <span>Básico</span>
                        </li>
                        <li className="li-skill">
                            <span>SQL</span>
                            <div className="bars">
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </div>
                            <span>Básico</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}