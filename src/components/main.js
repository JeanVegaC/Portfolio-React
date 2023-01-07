import Nav from './nav/nav';
import Home from "./home/home";
import About from './about/about';
import Skills from './skills/skills';
import Contact from './contact/contact';
import './main.css'
import Projects from './projects/projects';
export default function Main() {

    return (
        <main className="main" id='#'>
            <Nav></Nav>
            <Home></Home>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </main>
    )
}