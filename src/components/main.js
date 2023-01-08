import Nav from './nav/nav';
import Home from "./home/home";
import About from './about/about';
import Skills from './skills/skills';
import Contact from './contact/contact';
import Projects from './projects/projects';
import Footer from './footer/footer';
import './main.css'
export default function Main() {

    return (
        <main className="main" id='#'>
            <Nav></Nav>
            <Home></Home>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </main>
    )
}