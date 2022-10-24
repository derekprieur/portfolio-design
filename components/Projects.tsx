import React from 'react'
import sanity from '../images/sanity.jpg'
import { motion } from 'framer-motion'
import lyriks from '../images/lyriks.png'
import youtoob from '../images/youtoob.png'
import tailwind from '../images/tailwind.png'

type Props = {}

const Projects = (props: Props) => {
    const projects = [
        { image: lyriks, name: 'Lyriks', description: 'Spotify music app clone w/ React' },
        { image: youtoob, name: 'Youtoob', description: 'YouTube clone application in React w/ Material UI & API integration' }]
    return (
        <div className=' h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className=' absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
            <div className=' relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 
            scrollbar-thumb-cyan-500/80'>
                {projects.map((project, index) => (
                    <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }}
                        className=' w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                        <motion.img className=' max-w-2xl rounded-lg' initial={{ y: -300, opacity: 0 }} transition={{ duration: 1.2 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            src={project.image.src} alt="" />
                        <div className=' space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className=' text-4xl font-semibold text-center'>
                                <span className=' underline decoration-cyan-500/50'>Project {index + 1} of {projects.length}: </span> {project.name}
                            </h4>
                            {/* <div className=' flex items-center space-x-2 justify-center'>
                                <img className=' h-10 w-10' src={tailwind.src} alt="" />
                            </div> */}
                            <p className=' text-lg text-center md:text-left'>{project.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className=' w-full absolute top-[30%] bg-cyan-500/10 left-0 h-[500px] -skew-y-12'></div>
        </div>
    )
}

export default Projects