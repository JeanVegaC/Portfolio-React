import './nav.css'

const asd = (e) => {
    document.querySelectorAll('.li-link')
        .forEach(e => { e.classList.remove('link-active') })
    e.target.parentNode.classList.add('link-active');

}


export default function Nav() {
    return (
        <nav className="nav">
            <div className="logo">J</div>
            <ul className="ul-links">
                <li className="li-link link-active" onClick={asd}>
                    <a href="#Home">Home</a>
                </li>
                <li className="li-link" onClick={asd}>
                    <a href="#About">About Me</a>
                </li>
                <li className="li-link" onClick={asd}>
                    <a href="#Skills">Skills</a>
                </li>
                <li className="li-link" onClick={asd}>
                    <a href="#Projects">Projects</a>
                </li>
                <li className="li-link" onClick={asd}>
                    <a href="#Contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}