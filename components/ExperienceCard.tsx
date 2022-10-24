import React from 'react'
import optionsoft from '../images/optionsoft.jpg'
import { motion } from 'framer-motion'
import sanity from '../images/sanity.jpg'

type Props = {}

const ExperienceCard = (props: Props) => {
    return (
        <article className=' mt-16 xl:mt-32 flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 
        hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img initial={{ y: -100, opacity: 0 }} transition={{ duration: 1.2 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}
                className=' w-32 h-32 rounded-full xl:w-[170px] xl:h-[170px] object-cover object-center ' src={optionsoft.src} alt="" />
            <div className=' px-0 md:px-10'>
                <h4 className=' text-4xl font-light'>Quality Assurance Analyst</h4>
                <p className=' font-bold text-2xl mt-1'>OptionSoft Technologies</p>
                <div className=' flex space-x-2 mt-2'>
                    {/* <img src={sanity.src} alt="" className=' h-10 w-10 rounded-full' />
                    <img src={sanity.src} alt="" className=' h-10 w-10 rounded-full' />
                    <img src={sanity.src} alt="" className=' h-10 w-10 rounded-full' /> */}
                </div>
                <p className=' uppercase py-2 text-gray-300'>August 2018 - PRESENT</p>
                <ul className=' list-disc space-y-4 ml-5 text-lg'>
                    <li className=' text-base'>Key contributor in analyzing functional, user experience and technical requirements for entire catalog of company products</li>
                    <li className=' text-base'>Testing software to ensure it meets company specifications</li>
                    <li className=' text-base'>Documenting issues in a well-written and easy to reproduce format</li>
                    <li className=' text-base'>Working directly with other developers on issues/improvements to our programs</li>
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard