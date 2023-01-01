import Nav from './nav/nav';
import Home from "./home/home";
import About from './about/about';
import Skills from './skills/skills';
import './main.css'
import Projects from './projects/projects';
export default function Main() {

    return (
        <main className="main" id='Home'>
            <Nav></Nav>
            <Home></Home>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <div className="asda">
                HOLI
            </div>
        </main>
    )
}