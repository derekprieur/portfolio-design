import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import Contact from '../components/Contact'
import WorkExperience from '../components/WorkExperience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { ChevronDoubleUpIcon } from '@heroicons/react/24/solid'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocials } from '../utils/fetchSocials'

type Props = {
  // pageInfo: PageInfo
  // experiences: Experience[]
  // skills: Skill[]
  // projects: Project[]
  // socials: Social[]
}


const Home = ({ }: Props) => {
  return (
    <div className=' bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scrollbar 
    scrollbar-track-gray-400/20 scrollbar-thumb-cyan-500/80' >
      <Head>
        <title>Dereks Portfolio</title>
      </Head>
      <Header />
      <section id='hero' className=' snap-start'>
        <Hero />
      </section>
      <section id='about' className=' snap-center'>
        <About />
      </section>
      <section id='experience' className=' snap-center'>
        <WorkExperience />
      </section>
      <section id='skills' className=' snap-start'>
        <Skills />
      </section>
      <section id='projects' className=' snap-start'>
        <Projects />
      </section>
      <section id='contact' className=' snap-start'>
        <Contact />
      </section>
      <Link href='#hero'>
        <footer className=' sticky bottom-5 w-full cursor-pointer'>
          <div className=' flex items-center justify-center'>
            <ChevronDoubleUpIcon className=' h-10 w-10 rounded-full filter text-cyan-500 grayscale hover:grayscale-0 cursor-pointer transition duration-300 ease-in-out' />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  // const pageInfo: PageInfo = await fetchPageInfo()
  //   const experiences: Experience[] = await fetchExperiences()
  //   const skills: Skill[] = await fetchSkills()
  //   const projects: Project[] = await fetchProjects()
  //   const socials: Social[] = await fetchSocials()

  return {
    props: {
      // pageInfo,
      //       experiences,
      //       skills,
      //       projects,
      //       socials,
    },
    // next.js will attempt to re-generate the page: 
    // - when a request comes in
    // - at most once every 10 seconds
    revalidate: 10,
  }
}
