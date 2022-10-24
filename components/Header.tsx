import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Social } from '../typings'

type Props = {
    // socials: Social[]
}

const Header = () => {
    return (
        <header className=' sticky p-5 top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div initial={{ x: -500, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }} className=' flex flex-row items-center'>
                <SocialIcon url='https://www.youtube.com/channel/UCRfCF6455D8bysDrUixxVhw' target='_blank' fgColor='gray' bgColor='transparent' />
                <SocialIcon url='https://www.instagram.com/derekprieur/' target='_blank' fgColor='gray' bgColor='transparent' />
                <SocialIcon url='https://twitter.com/derekprieur_' target='_blank' fgColor='gray' bgColor='transparent' />
                <SocialIcon url='https://www.linkedin.com/in/derek-prieur-b23b67226/' target='_blank' fgColor='gray' bgColor='transparent' />
            </motion.div>
            <Link href='#contact'>
                <motion.div initial={{ x: 10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }} className=' flex flex-row items-center text-gray-300 cursor-pointer'>
                    <SocialIcon className=' cursor-pointer' network='email' fgColor='gray' bgColor='transparent' />
                    <p className=' uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
                </motion.div>
            </Link>
        </header>
    )
}

export default Header