import { useState, useEffect } from "react";

import HeaderSection from "../shared/headerSection";
import Cards from "./cards";
import Studies from "./studies";
export default function Content() {
    useEffect(() => {
        const options = {
            rootMargin: "-140px",
        };

        let observer = new IntersectionObserver(setClassFocusSection, options);
        let sectionSkills = document.getElementById("skills");
        sectionSkills && observer.observe(sectionSkills);

        observer = new IntersectionObserver(setClassFocusBars, options);
        // sectionSkills = document.getElementById("bars");
        sectionSkills && observer.observe(sectionSkills);
    }, []);

    const setClassFocusSection = (entries) => {
        const entry = entries[0];
        const Skills = document.getElementById("skills");
        !entry.isIntersecting && Skills.classList.remove("focus");
        entry.isIntersecting && Skills.classList.add("focus");
    };

    const setClassFocusBars = (entries)=>{
        const entry = entries[0];
        const Bars = document.querySelectorAll(".bars");

        const valors = {
            0: 'fill-bar-1',
            1: 'fill-bar-3',
            2: 'fill-bar-3',
            3: 'fill-bar-2',
            4: 'fill-bar-3',
            5: 'fill-bar-2',
            6: 'fill-bar-2',
            7: 'fill-bar-2',
            8: 'fill-bar-2',
        }

        if(!entry.isIntersecting) {
            Object
            .entries(valors)
            .forEach(([bar,points])=>{
                setTimeout(() => {
                    Bars[bar].classList.remove(points);    
                }, bar * 100);
            })

        }else{
            Object
            .entries(valors)
            .forEach(([bar,points])=>{
                setTimeout(() => {
                    Bars[bar].classList.add(points);    
                }, bar * 100);
                
            })


        }
        
    }

    return (
        <div className="content">
            <HeaderSection section={'Skills'} />
            <Cards></Cards>
            <Studies></Studies>

        </div>
    )
}