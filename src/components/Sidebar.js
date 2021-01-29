import React from 'react'

import facebook from '../assets/icons/facebook.svg'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import Me from '../assets/Capture.JPG'
import resume from '../assets/resume.pdf'
import { motion } from 'framer-motion'

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mohamed.assaad.10@gmail.com")
    }
    const sidebar_variant = {
        hidden: {
            x: '-20vw',

        },
        visible: {
            x: 0,

            transition: {
                delay: 0.1, duration: 0.5, type: 'spring'
            }
        }
    }


    return (
        <motion.div className="sidebar"
            variants={sidebar_variant}
            initial='hidden'
            animate="visible"

        >
            <img src={Me} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">M'hammed <span>El Asaad</span> </div>
            <div className="sidebar__item sidebar__title">Full stack Developer</div>
            <a href={resume} download="resume.pdf">
                <div className="sidebar__item sidebar__resume">
                    <img src={tie} alt="resume" className="sidebar__icon" />Download Resume
                </div>
            </a>
            <figure className="sidebar__social-icons my-2">
                <a href="https://www.facebook.com/mohamed.assaad.7549/"><img src={facebook} alt="facebook" className="sidebar__icon mr-3" /></a>
                
            </figure>
            <div className="sidebar__contact">
                <div className="sidebar__item sidebar__github">
                    <a href="https://github.com/elasaadGrillMsater"><img src={github} alt="github" className="sidebar__icon mr-3" />github</a>
                </div>
                <div className="sidebar__location">
                    <img src={pin} alt="location" className="sidebar__icon mr-3" />
                    Safi, Morocco</div>
                <div className="sidebar__item">mohamed.assaad.10@gmail.com</div>
                <div className="sidebar__item">0623327317/0702677900</div>
            </div>
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>email me</div>
        </motion.div>
    )
}

export default Sidebar;