import Nav from './nav/nav';
import Home from "./home/home";
import About from './about/about';
import './main.css'
export default function Main() {

    return (
        <main className="main" id='Home'>
            <Nav></Nav>
            <Home></Home>
            <About></About>
            <About></About>
            <div className="asda">
                HOLI
            </div>
        </main>
    )
}