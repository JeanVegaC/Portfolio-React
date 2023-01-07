import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiReact } from "react-icons/di";
import { SiJavascript } from "react-icons/si";

export default function Icons(){
const HTML = <AiFillHtml5 className="icon" key={1} style={{color: 'rgb(248, 156, 36)'}}/>,
CSS = <DiCss3 className="icon" key={2} style={{color: 'rgb(45, 150, 219)'}} />,
JS = <SiJavascript className="icon" key={3} style={{color: '#fd1'}} />,
REACT = <DiReact className="icon" key={4} style={{color: 'rgb(45, 150, 219)'}}/>

return [HTML,CSS,JS,REACT];
}

