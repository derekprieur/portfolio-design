import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import profilePicture from '../images/profilePicture.jpg'

type Props = {}

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
        words: ['Hi, my name is Derek Prieur', 'the-bald-vegan-guy.jsx', '#AnimeIsPrettyCool', 'solverubikscube.exe',],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className=' h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img src={profilePicture.src} alt="picture of derek"
                className=' relative rounded-full h-32 w-32 mx-auto object-cover' />
            <div className=' z-20'>
                <h2 className=' text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Web Developer</h2>
                <h1 className=' text-5xl lg:text-6xl font-semibold px-10'>
                    <span className=' mr-3'>{text}</span>
                    <Cursor cursorColor='#06B6D4' />
                </h1>
                <div className=' pt-5'>
                    <Link href='#about'>
                        <button className=' heroButton hover:bg-cyan-500/40 hover:text-cyan-500/40 '>About</button>
                    </Link>
                    <Link href='#experience'>
                        <button className=' heroButton hover:bg-cyan-500/40 hover:text-cyan-500/40'>Experience</button>
                    </Link>
                    <Link href='#skills'>
                        <button className=' heroButton hover:bg-cyan-500/40 hover:text-cyan-500/40'>Skills</button>
                    </Link>
                    <Link href='#projects'>
                        <button className=' heroButton hover:bg-cyan-500/40 hover:text-cyan-500/40'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero