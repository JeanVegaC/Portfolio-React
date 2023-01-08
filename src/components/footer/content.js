import { AiOutlinePhone, AiOutlineMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

export default function Footer() {
    return (
        <div className="container">
            <div className="info">
                <ul className="ul-links">
                    <li className="li-link">
                        <AiOutlinePhone className='icon' />
                        <span>+51967216577</span>
                    </li>
                    <li className="li-link">
                        <AiOutlineMail className='icon' />
                        <span>jhonivegacasimiro@gmail.com</span>
                    </li>
                </ul>
                <ul className="ul-social">
                    <li className="li-social">
                        <AiFillLinkedin className='icon' alt="asd"/>
                        <a href='https://www.linkedin.com/in/jheanvega/'>Jean Vega</a>
                    </li>
                    <li className="li-social">
                        <AiFillGithub className="icon" />
                        <a href='https://github.com/JeanVegaC'>JeanVegaC</a>
                    </li>
                </ul>
            </div>
            <div className="rights">
                <p>Designed and developed by Jhean Vega</p>
            </div>
        </div>
    )
}