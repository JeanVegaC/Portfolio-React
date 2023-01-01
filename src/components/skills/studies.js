import { BiCodeAlt } from 'react-icons/bi';
import { MdOutlineDesignServices } from 'react-icons/md';
import { BsLightbulb } from 'react-icons/bs';
export default function Studies() {
    return (
        // <div className="studies">
        //     <div className="content">
        //         <nav>
        //             <ul className='ul-studies'>
        //                 <li className='li-study'>
        //                     <MdOutlineDesignServices />
        //                     <span>Design</span>
        //                 </li>
        //                 <li className='li-study'>
        //                     <BiCodeAlt />
        //                     <span>Frontend</span>
        //                 </li>
        //                 <li className='li-study'>
        //                     <BsLightbulb />
        //                     <span>Backend</span>
        //                 </li>
        //             </ul>
        //         </nav>
        //         <div className="info">

        //         </div>
        //     </div>
        // </div>
        <div className='studies'>
            <header>Years Experience</header>
            <ul className='ul-studies'>
                <li className='li-study'>
                    <MdOutlineDesignServices className='icon'/>
                    <span data-span="1 year">Design</span>
                </li>
                <li className='li-study'>
                    <BiCodeAlt className='icon'/>
                    <span data-span="2 years">Frontend</span>
                </li>
                <li className='li-study'>
                    <BsLightbulb className='icon'/>
                    <span data-span="1 year">Backend</span>
                </li>
            </ul>
        </div>
    )
}