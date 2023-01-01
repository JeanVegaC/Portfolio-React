import { useEffect } from "react";
import HeaderSection from "../shared/headerSection";

export default function Content(){

    useEffect(() => {
        const options = {
            // treshold: 1,
            rootMargin: "-140px",
        };

        const observer = new IntersectionObserver(setClassFocus, options);
        const sectionProjects = document.getElementById("projects");
        sectionProjects && observer.observe(sectionProjects);
    }, []);

    const setClassFocus = (entries) => {
        const entry = entries[0];
        const Projects = document.getElementById("projects");
        !entry.isIntersecting && Projects.classList.remove("focus");
        entry.isIntersecting && Projects.classList.add("focus");
    };

    return(
        <div className="content">
            <HeaderSection section={"Projects"}></HeaderSection>
            <div className="container">
                asdasd
            </div>
        </div>
    )
}