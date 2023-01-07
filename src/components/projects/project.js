import {motion} from 'framer-motion';
import {AiOutlinePlus} from 'react-icons/ai';

export default function Project({ title, tecs, img, id, setShowModal,setIdProject}) {


    return (
        <>        
        <motion.div layout className="li-project" >
            <img src={img}></img>
            <div className="overlay-project"></div>
            <h3>{title}</h3>
                <AiOutlinePlus className='plus' onClick={()=>{setShowModal(true);setIdProject(id)}}></AiOutlinePlus>
            <div className="tecs">
                <span>Made with</span>
                {tecs.map(e => e)}
            </div>
        </motion.div>
        </>
    )
}