import { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import LibreriaBg from "../../assets/projects/libreria-portada.PNG";
import AnimeBg from "../../assets/projects/anime-portada.PNG";
import PokedexBg from "../../assets/projects/pokedex-portada.PNG";
import LibraryLogin from "../../assets/projects/Library/Login.PNG"
import LibrarySearch from "../../assets/projects/Library/Search.PNG"
import LibraryCrud from "../../assets/projects/Library/Crud.PNG"
import AnimeDirectory from "../../assets/projects/Anime/Directory.PNG"
import AnimeEmision from "../../assets/projects/Anime/Emision.PNG"
import AnimeNotices from "../../assets/projects/Anime/Notices.PNG"
import AnimePresentation from "../../assets/projects/Anime/Presentation.PNG"
import PokedexDirectory from "../../assets/projects/Pokedex/Directory.PNG"
import PokedexAbout from "../../assets/projects/Pokedex/About.PNG"
import PokedexBase from "../../assets/projects/Pokedex/Base.PNG"
import PokedexEvolutions from "../../assets/projects/Pokedex/Evolutions.PNG"
import { motion } from 'framer-motion'
import { AiOutlineClose } from 'react-icons/ai';
import Icons from "./icons";
export default function ModalProject({ id, setShowModal }) {
    const [HTML, CSS, JS, REACT] = Icons();
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    const projectJson = [
        {
            id: 1,
            title: "Librería - CRUD",
            img: LibreriaBg,
            type: "page",
            tecs: [
                HTML,
                CSS,
                JS,
                REACT,
            ],
            images: [LibraryLogin,
                LibrarySearch,
                LibraryCrud]
        },
        {
            id: 2,
            title: "Página Anime",
            img: AnimeBg,
            type: "page",
            tecs: [
                HTML,
                CSS,
                JS,
            ],
            images: [AnimeDirectory,
                AnimeEmision,
                AnimeNotices,
                AnimePresentation]
        },
        {
            id: 3,
            title: "Pokedex",
            img: PokedexBg,
            type: "page",
            tecs: [
                HTML,
                CSS,
                JS,
                REACT,
            ],
            images: [
                PokedexDirectory,
                PokedexAbout,
                PokedexBase,
                PokedexEvolutions
            ]
        },
    ]

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return ReactDOM.createPortal(
        <>
            <div className='modal-overlay'>
            </div>
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} className='modal'>
                <AiOutlineClose className='icon' onClick={() => setShowModal(false)} />
                <header>
                    <h2>{projectJson[id].title}</h2>
                </header>
                <div className='project-info'>
                    <div className='info'>
                        <div className='img'>
                            <img src={projectJson[id].img}></img>
                        </div>
                        <div className='detail'>
                            <p>This projects was development by me, using the next technologies.
                                Basiccaly is a library with system of crud when the user can create,
                                read, update and delete info of books in localhost, it has conection with nodeJs basic</p>
                            <ul className='tecs'>
                                {projectJson[id].tecs.map((e, i) => (
                                    <li key={i}>{e}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <motion.div className='project-preview' ref={carousel}>
                    <motion.ul drag="x" dragConstraints={{ right: 0, left: -width }} className='ul-images'>
                        {projectJson[id].images.map((e, i) => (
                            <motion.li className='li-img' key={i}>
                                <img src={e}></img>
                            </motion.li>
                        ))}

                    </motion.ul>
                </motion.div>
            </motion.div>
        </>
        , document.getElementById('modals')
    )
}