import { useEffect, useState } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import HeaderSection from "../shared/headerSection";
import Project from "./project";
import LibreriaBg from "../../assets/projects/libreria-portada.PNG";
import AnimeBg from "../../assets/projects/anime-portada.PNG";
import PokedexBg from "../../assets/projects/pokedex-portada.PNG";
import NavFilter from "./navFilter";
import { motion } from 'framer-motion';

export default function Content() {
    const [projects, setProjects] = useState(null);
    const [filtered, setFiltered] = useState('all');

    const projectsJson = [
        {
            id: 1,
            title: "Librería - CRUD",
            img: LibreriaBg,
            type: "page",
            tecs: [
                <AiFillHtml5 className="icon" key={1} />,
                <DiCss3 className="icon" key={2} />,
                <SiJavascript className="icon" key={3} />,
            ],
        },
        {
            id: 2,
            title: "Página Anime",
            img: AnimeBg,
            type: "page",
            tecs: [
                <AiFillHtml5 className="icon" key={1} />,
                <DiCss3 className="icon" key={2} />,
                <SiJavascript className="icon" key={3} />,
            ],
        },
        {
            id: 3,
            title: "Pokedex",
            img: PokedexBg,
            type: "page",
            tecs: [
                <AiFillHtml5 className="icon" key={1} />,
                <DiCss3 className="icon" key={2} />,
                <SiJavascript className="icon" key={3} />,
            ],
        },
    ];


    useEffect(() => {
        if (filtered) {
            const btnFilters = document.querySelectorAll('.li-filter');
            btnFilters.forEach(e => {
                e.classList.remove('selected');
            })
            if (filtered == 'all') {
                setProjects(projectsJson);
                btnFilters[0].classList.add('selected');
            } else {
                if (filtered == 'page') btnFilters[1].classList.add('selected');
                if (filtered == 'game') btnFilters[2].classList.add('selected');

                let projectsFil = projectsJson.filter(e => {
                    return e.type == filtered;
                }
                );
                setProjects(projectsFil);
            }
        }
    }, [filtered]);

    useEffect(() => {
        if (projects) {
            console.log(projects)
        }
    }, [projects]);

    useEffect(() => {
        setProjects(projectsJson);

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

    return (
        <div className="content">
            <HeaderSection section={"Projects"}></HeaderSection>
            <NavFilter setFiltered={setFiltered} />
            <div className="container">
                <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} layout className="ul-projects">
                    {(projects)? (projects.length == 0) ? <h3>Nothing por now</h3> :
                        projects.map((e) => {
                            return <Project key={e.id} title={e.title} tecs={e.tecs} img={e.img} />
                        }
                        ):' '}
                </motion.div>
            </div>
        </div>
    );
}
