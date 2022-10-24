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
                <Skill image={'https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_96102ac6497377cd53da621075fe828e/sanity.png'} />
                <Skill image={'https://cdn-icons-png.flaticon.com/512/732/732190.png'} />
                <Skill image={'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png'} />
                <Skill image={'https://cdn-icons-png.flaticon.com/512/732/732212.png'} />
                <Skill image={'https://assets.stickpng.com/images/613b64fe30e8530004ba3a03.png'} />
                <Skill image={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png'} />
                <Skill image={'https://www.mongodb.com/community/forums/uploads/default/original/3X/0/1/01d4259c8928db8d3f2370429391688f8622654d.png'} />
                <Skill image={'https://www.openxcell.com/wp-content/uploads/2021/11/dango-inner-2.png'} />
                <Skill image={'https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png'} directionLeft />
                <Skill image={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'} directionLeft />
                <Skill image={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png'} directionLeft />
                <Skill image={'https://cdn-icons-png.flaticon.com/512/919/919832.png'} directionLeft />
                <Skill image={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png'} directionLeft />
            </div>
        </motion.div>
    )
}

export default Skills