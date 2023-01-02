import {motion} from 'framer-motion';
export default function Project({ title, tecs, img }) {
    return (
        <motion.div layout className="li-project" >
            <img src={img}></img>
            <div className="overlay-project"></div>
            <h3>{title}</h3>
            <div className="tecs">
                <span>Made with</span>
                {tecs.map(e => e)}
            </div>
        </motion.div>
    )
}