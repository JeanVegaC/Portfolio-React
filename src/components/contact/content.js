import HeaderSection from "../shared/headerSection";
import { MdMinimize } from 'react-icons/md';
import { FiMaximize2, FiLink2 } from 'react-icons/fi';
import { AiOutlineClose, AiFillCaretDown } from 'react-icons/ai';
import { RxLetterCaseCapitalize } from 'react-icons/rx';
import { BsPaperclip, BsThreeDotsVertical } from 'react-icons/bs';
import { RiDriveLine } from 'react-icons/ri';
import { IoMdHappy } from 'react-icons/io';
import { BiImageAlt } from 'react-icons/bi';
import { HiOutlineLockClosed } from 'react-icons/hi';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useEffect, useState, useRef } from "react";

export default function Content() {
    const [message, setMessage] = useState(null);

    const messageHeader = useRef();
    const business = useRef();
    const addressee = useRef();
    const messageText = useRef();

useEffect(() => {
if(message){
    messageHeader.current.innerHTML = 'Work together';
    business.current.innerHTML = 'Work together';
    business.current.setAttribute('style','color:rgb(34,34,34)');
    addressee.current.querySelectorAll('span')[0].innerHTML = 'Para';
    addressee.current.querySelectorAll('span')[1].hidden = false;
    messageText.current.innerHTML = message.message;
}
}, [message]);

    useEffect(() => {
        const options = {
            // treshold: 1,
            rootMargin: "-140px",
        };

        const observer = new IntersectionObserver(setClassFocus, options);
        const sectionContact = document.getElementById("contact");
        sectionContact && observer.observe(sectionContact);
    }, []);

    const setClassFocus = (entries) => {
        const entry = entries[0];

        const Contact = document.getElementById("contact");
        !entry.isIntersecting && Contact.classList.remove("focus");
        entry.isIntersecting && Contact.classList.add("focus");
    };

    return (
        <div className="content">
            <HeaderSection section={'Contact'}></HeaderSection>
            <div className="container">
                <div className="message-preview">
                    <header>
                        <span ref={messageHeader}>Mensaje nuevo</span>
                        <ul className="ul-icons">
                            <li className="li-icon">
                                <MdMinimize />
                            </li>
                            <li className="li-icon">
                                <FiMaximize2 />
                            </li>
                            <li className="li-icon">
                                <AiOutlineClose />
                            </li>
                        </ul>
                    </header>
                    <div className="message-body">
                        <div ref={addressee} className="addressee">
                            <span>Destinatario</span>
                            <span hidden>Jhean Vega</span>
                        </div>
                        <div ref={business} className="business">
                            <span>Asunto</span>
                        </div>
                        <div className="message">
                            <p ref={messageText}>Here is the message</p>
                        </div>
                        <div className="buttons">
                            <ul className="ul-buttons">
                                <li className="li-button">
                                    <div className="btn-send">
                                        <span>Enviar</span>
                                        <AiFillCaretDown className="icon" />
                                    </div>
                                </li>
                                <li className="li-button">
                                    <RxLetterCaseCapitalize />
                                </li>
                                <li className="li-button">
                                    <BsPaperclip />
                                </li>
                                <li className="li-button">
                                    <FiLink2 />
                                </li>
                                <li className="li-button">
                                    <IoMdHappy />
                                </li>
                                <li className="li-button">
                                    <RiDriveLine />
                                </li>
                                <li className="li-button">
                                    <BiImageAlt />
                                </li>
                                <li className="li-button">
                                    <HiOutlineLockClosed />
                                </li>
                                <li className="li-button">
                                    <BsThreeDotsVertical />
                                </li>
                                <li className="li-button">
                                    <FaRegTrashAlt />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <ul className="ul-inputs">
                    <li className="li-input">
                        <input
                            required={true}
                            type="text"
                            name="image"
                            placeholder="url"
                            id="img"
                            hidden
                        ></input>
                    </li>
                    <li className="li-input">
                        <input
                            required={true}
                            autoComplete="off"
                            type="text"
                            id="name"
                            onChange={(e)=>{setMessage({name:e.target.value})}}
                        ></input>
                        <label>Name</label>
                    </li>
                    <li className="li-input">
                        <input
                            required={true}
                            autoComplete="off"
                            type="text"
                            id="lastName"
                            onChange={(e)=>{setMessage({...message, 'lastName':e.target.value})}}
                        ></input>
                        <label>LastName</label>
                    </li>
                    <li className="li-input">
                        <input
                            required={true}
                            autoComplete="off"
                            type="text"
                            id="email"
                            onChange={(e)=>{setMessage({...message, 'email':e.target.value})}}
                        ></input>
                        <label>Email</label>
                    </li>
                    <li className="li-input">
                        <input
                            required={true}
                            autoComplete="off"
                            type="text"
                            id="message"
                            onChange={(e)=>{setMessage({...message, 'message':e.target.value})}}
                        ></input>
                        <label>Message</label>
                    </li>
                    <li className="">
                        <button
                            className="button-send"
                        >
                            Send
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}