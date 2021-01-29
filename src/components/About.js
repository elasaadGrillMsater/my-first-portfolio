import React from 'react';
import backend from '../assets/icons/backend.svg'
import algo from '../assets/icons/algo.svg'
import computer from '../assets/icons/computer.svg'
import repair from '../assets/icons/repair.svg'
import puzzle from '../assets/icons/puzzle.svg'

import Skillcard from './Skillcard';
import { motion } from 'framer-motion'
const skills = [
    {
        icon: computer,
        title: "Frontend Development",
        about: "I can build a well structured, clean and effcient SPA using HTML, CSS and React.js"
    },
    {
        icon: repair,
        title: "Backend  Development",
        about: "servers, handling databases ...",
    },
    {
        icon: backend,
        title: "Desktop development",
        about: "I can develop desktop apps using java, javascript(electron.js) "
    },
    {
        icon: algo,
        title: "Competitive Coder",
        about: "a daily problem solver in Codewars.com (level:5kyu) "
    },
    {
        icon: puzzle,
        title: "Mobile app develoment",
        about: "minimalistic mobile development using react-native "
    },
    {
        icon: computer,
        title: "networking",
        about: "local network management and administration "
    },
]


const About = () => {
    const about_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                dealy: 0.2, duration: 0.6,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }
    return (
        <motion.div className="about"

            variants={about_variants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h6 className="about__intro">
                I see myself as someone who's persistant, a quick learner and loves problem solving and enjoys building simple and detailed projects.
            </h6>
            <div className="container about__container">
                <h6 className="about__heading">What I offer</h6>
                <div className="row">
                    {
                        skills.map(skill =>
                            <Skillcard skill={skill} />

                        )
                    }
                </div>
            </div>
        </motion.div>
    );
};

export default About;