import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import sanity from '../images/sanity.jpg'
import css from '../images/css.png'
import firebase from '../images/firebase.png'
import html from '../images/html.png'
import javascript from '../images/javascript.png'
import metamask from '../images/metamask.png'
import mongodb from '../images/mongodb.png'
import next from '../images/next.png'
import node from '../images/node.png'
import react from '../images/react.png'
import tailwind from '../images/tailwind.png'
import typescript from '../images/typescript.png'
import vscode from '../images/vscode.png'

type Props = {
}

const Skills = (props: Props) => {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} className=' h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
            <h3 className=' absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm '>Hover over a skill for current proficiency</h3>
            <div className=' grid grid-cols-4 gap-5'>
                <Skill image={sanity} />
                <Skill image={css} />
                <Skill image={firebase} />
                <Skill image={html} />
                <Skill image={javascript} />
                <Skill image={metamask} />
                <Skill image={mongodb} />
                <Skill image={next} />
                <Skill image={node} directionLeft />
                <Skill image={react} directionLeft />
                <Skill image={tailwind} directionLeft />
                <Skill image={typescript} directionLeft />
                <Skill image={vscode} directionLeft />
            </div>
        </motion.div>
    )
}

export default Skills