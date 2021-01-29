import React from 'react';


import backend from '../../assets/icons/backend.svg'
import algo from '../../assets/icons/algo.svg'
import computer from '../../assets/icons/computer.svg'
import repair from '../../assets/icons/repair.svg'
import puzzle from '../../assets/icons/puzzle.svg'


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

export default skills;