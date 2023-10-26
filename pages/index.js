import Head from 'next/head'
import React, { useState } from 'react'
import ScrollToTop from "react-scroll-to-top"
import { TypeAnimation } from 'react-type-animation'
import {
  AiFillFilePdf,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineComment
} from 'react-icons/ai'
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoBootstrap,
  BiLogoTailwindCss,
  BiLogoPhp,
  BiLogoJava,
  BiTime,
  BiArrowFromLeft,
  BiLogoSpringBoot
} from 'react-icons/bi'
import {
  SiVite,
  SiMysql,
  SiLeaflet,
  SiAiqfome,
  SiFirebase
} from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import {
  RiReactjsFill,
  RiTeamLine
} from 'react-icons/ri'
import { BsTrello } from 'react-icons/bs';
import { MdSyncProblem } from 'react-icons/md'
import { GiBrain } from 'react-icons/gi'
import Image from 'next/image'
import shyrly from '../public/rabit.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import design from '../public/design.png'
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'

export default function Home() {
  // Untuk Mode Dark
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <ScrollToTop
        smooth
        top='20'
        color='red'
        width='40'
        height='20'
      />
      
      <Head>
        <title>Sidik Portofolio</title>
        <meta name='description' content='Generate by create - A platform for creative minds to showcase their work and ideas.'/>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Main */}
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-[#19212a]'>
        {/* Section Profil*/}
        <section id='home' className='min-h-screen'>
          {/* Navbar */}
          <div className='relative bg-gray-50 dark:bg-slate-900 pattern'>
            <nav className='z-20 flex justify-around gap-4 border-t border-gray-200 bg-white/50 p-2.5 shadow-lg backdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50 fixed bottom-5 left-5 right-5 md:bottom-5 md:left-80 md:right-80 min-h-[auto] flex-row rounded-lg border'>
              {/* Home */}
              <a href='#home' className='flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-[#19212a] hover:bg-white/30 dark:text-white dark:hover:bg-[#f01c58]'>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='w-6 h-6'>
                  <path stroke-linecap='round' stroke-linejoin='round' d='M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819' />
                </svg>
                <small className='text-xs font-medium'> Home </small>
              </a>

              {/* Education */}
              <a href='#education' className='flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-[#19212a] hover:bg-white/30 dark:text-white dark:hover:bg-[#f01c58]'>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className="w-6 h-6 shrink-0">
                  <path stroke-linecap='round' stroke-linejoin='round' d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' />
                </svg>
                <small className='text-center text-xs font-medium'> Education </small>
              </a>

              {/* Skill & Experience */}
              <a href='#skill' className='flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-[#19212a] hover:bg-white/30 dark:text-white dark:hover:bg-[#f01c58]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 shrink-0">
                  <path stroke-linecap='round' stroke-linejoin='round' d='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z' />
                </svg>
                <small className='text-center text-xs font-medium'> Skill </small>
              </a>
              

              {/* Portofolio */}
              <a href='#portofolio' className='flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-[#19212a] hover:bg-white/30 dark:text-white dark:hover:bg-[#f01c58]'>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='w-6 h-6 shrink-0'>
                    <path stroke-linecap='round' stroke-linejoin='round' d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z' />
                    <path stroke-linecap='round' stroke-linejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                  </svg>
                  <small className='text-center text-xs font-medium'> Portofolio </small>
              </a>
              
              <span className='flex text-3xl h-16 w-16 flex-col items-center justify-center gap-1 text-[#f01c58] dark:text-white cursor-pointer animate-bounce'>
                <SiAiqfome onClick={() => setDarkMode(!darkMode)} />
              </span>
            </nav>
          </div>

          {/* Header */}
          <div className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl md:text-2xl font-burtons dark:text-white'>Portofolio Ku</h1>
            <ul className='flex items-center'>
              <li>
                <a className='bg-[#bf1b47] hover:bg-[#f01c58] text-white px-4 py-2 rounded-md ml-8 flex items-center' href='../Sidik_Mulyana_Curriculum_Vitae.pdf'>
                  <AiFillFilePdf className='mr-1 md:mr-2 text-xl md:text-2xl' />My CV
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-[#bf1b47] font-medium drop-shadow-md md:text-6xl'>Sidik Mulyana</h2>
            <TypeAnimation
              sequence={[
                'My Passion',
                1000,
                'Web Developer',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
              className={'dark:text-white'}
            />
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-3xl mx-auto dark:text-white'>
              Halo, saya Sidik Mulyana, seorang Web Developer yang memiliki minat dan semangat dalam mengembangkan solusi digital yang menarik dan fungsional. Saya memiliki pengalaman dan pemahaman yang lumayan luas dalam berbagai aspek pengembangan web dan pemrograman.
            </p>
          </div>

          {/* Social Media */}
          <div className='text-5xl flex justify-center gap-8 text-gray-600 dark:text-white'>
            <a href="https://web.facebook.com/C.Ber.MG/"><AiFillFacebook /></a>
            <a href="https://www.linkedin.com/in/sidik-mulyana-0247a524b/"><AiFillLinkedin /></a>
            <a href="https://github.com/sidik219/"><AiFillGithub /></a>
          </div>

          {/* Profil Image */}
          <div className='relative mx-auto bg-gradient-to-b from-[#eec0a3] rounded-full w-60 h-60 mt-20 overflow-hidden md:w-96 md:h-96' style={{ boxShadow: '5px 5px 5px 0px rgba(191,27,71)' }}>
            <Image src={shyrly} layout='fill' objectFit='cover' alt="" />
          </div>
        </section>

        {/* Section Hard Skill*/}
        <section id='skill' className='pt-20'>
          {/* Deskripsi Skill */}
          <div className='text-center '>
            <h3 className='text-5xl pb-10 text-[#bf1b47] font-medium drop-shadow-md'>Skill & Experience</h3>
              <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-5xl mx-auto dark:text-white'>
              Kemampuan dan pengalaman dalam pengembangan web di berbagai bidang. Di bagian front-end, saya biasa menggunakan <span className='text-[#bf1b47] font-medium'>CSS</span>, <span className='text-[#bf1b47] font-medium'>JavaScript</span>, <span className='text-[#bf1b47] font-medium'>Bootstrap</span>, dan <span className='text-[#bf1b47] font-medium'>Tailwind</span> untuk menciptakan antarmuka pengguna yang menarik. Saya juga mulai terbiasa dalam menggunakan <span className='text-[#bf1b47] font-medium'>React.js</span> untuk aplikasi web modern.

              Sementara di bagian back-end, saya memiliki pengetahuan dalam bahasa pemrograman seperti <span className='text-[#bf1b47] font-medium'>PHP</span> dan <span className='text-[#bf1b47] font-medium'>Java</span>, serta kerja dengan <span className='text-[#bf1b47] font-medium'>Vite.js</span> dan <span className='text-[#bf1b47] font-medium'>Next.js</span>. Saya juga bisa mengelola basis data menggunakan <span className='text-[#bf1b47] font-medium'>Mysql</span>.

              Selain itu, saya memiliki pengalaman dengan pustaka <span className='text-[#bf1b47] font-medium'>Leaflet.js</span> untuk integrasi peta interaktif dan menggunakan alat seperti <span className='text-[#bf1b47] font-medium'>Github</span> dan <span className='text-[#bf1b47] font-medium'>Trello</span> untuk pengelolaan proyek.
            </p>
          </div>

          {/* Skill */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 py-10'>
            {/* Bagian Kiri Data Frontend & Backend */}
            <div className='p-11 rounded-xl my-10 dark:bg-white' style={{ boxShadow: '0 8px 30px rgb(0,0,0,0.12)' }}>
              {/* Deskripsi Hard Skill */}
              <div>
                <h3 className='text-4xl pb-10 text-[#bf1b47] font-medium text-center drop-shadow-md'>Hard Skill</h3>
              </div>

              {/* Frontend */}
              <div className='text-center'>
                <Image className='mx-auto' src={code} width={100} height={100} alt="" />
                <h3 className='text-2xl font-medium pt-16 pb-8 drop-shadow-md'>Frontend</h3>
              </div>
              <div className='flex items-center'>
                <BiLogoCss3 className='text-blue-500 w-10 h-10 mr-3' /><p className='w-40 mx-auto text-gray-800 font-medium py-1'>CSS</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: '70%' }}>70%</div>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <BiLogoJavascript className='text-yellow-500 w-10 h-10 mr-3' /><p className='w-40 mx-auto text-gray-800 font-medium py-1'>Javascript</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: '55%' }}>55%</div>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <BiLogoBootstrap className='text-purple-800 w-10 h-10 mr-3' /><p className='w-40 mx-auto text-gray-800 font-medium py-1'>Bootstrap</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: '75%' }}>75%</div>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <BiLogoTailwindCss className='text-blue-500 w-10 h-10 mr-3' /><p className='w-40 mx-auto text-gray-800 font-medium py-1'>Tailwind</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: '40%' }}>40%</div>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <RiReactjsFill className='text-blue-500 w-10 h-10 mr-3' /><p className='w-40 mx-auto text-gray-800 font-medium py-1'>React.JS</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: '50%' }}>50%</div>
                  </div>
                </div>
              </div>

              {/* Backend */}
              <div className='text-center'>
                <h3 className='text-2xl font-medium pt-16 pb-8 drop-shadow-md'>Backend</h3>
              </div>
              <div className='flex items-center'>
                <BiLogoPhp className='text-indigo-800 w-10 h-10 mr-3' /><p className='w-40 mx-auto text-gray-800 font-medium py-1'>PHP</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: '75%' }}>75%</div>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <BiLogoJava className='text-blue-500 w-10 h-10 mr-3' /><p className='w-40 mx-auto text-gray-800 font-medium py-1'>Java</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: '35%' }}>35%</div>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <SiVite className='text-purple-800 w-10 h-10 mr-3' /><p className='w-40 mx-auto text-gray-800 font-medium py-1'>Vite.JS</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: '35%' }}>35%</div>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <TbBrandNextjs className='text-black w-10 h-10 mr-3' /><p className='w-40 mx-auto text-gray-800 font-medium py-1'>Next.JS</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: '5%' }}>5%</div>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <BiLogoSpringBoot className='text-green-500 w-10 h-10 mr-3' /><p className='w-40 mx-auto text-gray-800 font-medium py-1'>Spring</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: '40%' }}>40%</div>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <SiMysql className='text-blue-500 w-10 h-10 mr-3' /><p className='w-40 mx-auto text-gray-800 font-medium py-1'>MYSQL</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: '75%' }}>75%</div>
                  </div>
                </div>
              </div>

              {/* Library */}
              <div className='text-center'>
                <h3 className='text-2xl font-medium pt-16 pb-8 drop-shadow-md'>Library</h3>
              </div>
              <div className='flex items-center'>
                <SiLeaflet className='text-green-500 w-10 h-10 mr-3' /><p className='w-40 mx-auto text-gray-800 font-medium py-1'>Leaflet.JS</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: '35%' }}>35%</div>
                  </div>
                </div>
              </div>

              {/* Software Tools */}
              <div className='text-center'>
                <h3 className='text-2xl font-medium pt-16 pb-8 drop-shadow-md'>Software Tools & Platform </h3>
              </div>
              <div className='flex items-center'>
                <AiFillGithub className='text-gray-800 w-10 h-10 mr-3' /><p className='w-40 mx-auto text-gray-800 font-medium py-1'>Github</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: '50%' }}>50%</div>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <BsTrello className='text-blue-800 w-10 h-10 mr-3' /><p className='w-40 mx-auto text-gray-800 font-medium py-1'>Trello</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: '50%' }}>50%</div>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <SiFirebase className='text-yellow-500 w-10 h-10 mr-3' /><p className='w-40 mx-auto text-gray-800 font-medium py-1'>Firebase</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: '5%' }}>5%</div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Bagian Kiri */}

            {/* Bagian Kanan Data Soft Skill */}
            {/* Bagian Atas */}
            <div className='p-11 rounded-xl my-10 dark:bg-white' style={{ boxShadow: '0 8px 30px rgb(0,0,0,0.12)' }}>
              {/* Bagian Atas */}
              {/* Deskripsi Soft Skill */}
              <div>
                <h3 className='text-4xl pb-10 text-[#bf1b47] font-medium text-center drop-shadow-md'>Soft Skill</h3>
              </div>
              
              {/* List Skill */}
              <div className='text-center'>
                <Image className='mx-auto' src={consulting} width={100} height={100} alt="" />
                <h3 className='text-2xl font-medium pt-16 pb-8 drop-shadow-md'>List Skill</h3>
              </div>
              <div className='flex items-center'>
                <AiOutlineComment className='text-blue-500 w-10 h-10 mr-3' /><p className='w-40 mx-auto text-gray-800 font-medium py-1'>Communication</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: '70%' }}>70%</div>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <MdSyncProblem className='text-orange-500 w-10 h-10 mr-3' /><p className='w-40 mx-auto text-gray-800 font-medium py-1'>Problem Solved</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: '80%' }}>80%</div>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <RiTeamLine className='text-green-500 w-10 h-10 mr-3' /><p className='w-40 mx-auto text-gray-800 font-medium py-1'>Team Work</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: '70%' }}>70%</div>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <BiTime className='text-gray-800 w-10 h-10 mr-3' /><p className='w-40 mx-auto text-gray-800 font-medium py-1'>Manage Time</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: '80%' }}>80%</div>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <GiBrain className='text-red-500 w-10 h-10 mr-3'/><p className='w-40 mx-auto text-gray-800 font-medium py-1'>Critical Thinking</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: '85%' }}>85%</div>
                  </div>
                </div>
              </div>

              {/* Bagian Bawah */}
              {/* Deskripsi Experience */}
              <div className='mt-16'>
                <h3 className='text-4xl pb-10 text-[#bf1b47] font-medium text-center drop-shadow-md'>Experience</h3>
              </div>

              {/* List Experience */}
              <div className='text-center'>
                <Image className='mx-auto' src={design} width={100} height={100} alt="" />
                <h3 className='text-2xl font-medium pt-16 pb-8 drop-shadow-md'>Seminar & Workshop</h3>
              </div>
              <div className='flex items-center'>
                <BiArrowFromLeft className='text-gray-800 w-10 h-10 mr-3' /><p className='w-44 mx-auto text-gray-800 font-medium py-1'>Workshop Humanizing Technology with UX Research</p>
                <div className='w-7/12'>
                  <p className="mt-1 text-md text-gray-500">27 Febuari 2021 – Sebagai Audience</p>
                </div>
              </div>
              <div className='flex items-center'>
                <BiArrowFromLeft className='text-gray-800 w-10 h-10 mr-3' /><p className='w-44 mx-auto text-gray-800 font-medium py-1'>Seminar Aplikasi GoKarang</p>
                <div className='w-7/12'>
                  <p className="mt-1 text-md text-gray-500">12 April 2021 – Sebagai Web Developer & Presentator</p>
                </div>
              </div>
              <div className='flex items-center'>
                <BiArrowFromLeft className='text-gray-800 w-10 h-10 mr-3' /><p className='w-44 mx-auto text-gray-800 font-medium py-1'>Workshop Teknologi Masa Depan dalam Intervensi Dini Anak Down Syndrome</p>
                <div className='w-7/12'>
                  <p className="mt-1 text-md text-gray-500">18 Desember 2021 – Sebagai Panitia Workshop</p>
                </div>
              </div>
            </div>
            {/* End Bagian Kanan */}
          </div>
        </section>

        {/* Section Soft Skill */}
        <section id='portofolio' className='pt-20'>
          {/* Deskripsi Portofolio */}
          <div className='text-center'>
            <h3 className='text-5xl pb-10 text-[#bf1b47] font-medium drop-shadow-md'>Portofolio</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-5xl mx-auto dark:text-white'>
              Berikut adalah beberapa hasil project yang sudah dikerjakan bersama team ataupun personal project.
            </p>
          </div>

          {/* Image Project */}
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap dark:text-white'>
            {/* Image 1 */}
            <div className='basis-1/3 flex-1'>
              {/* Judul */}
              <h3 className='text-md md:text-2xl font-medium'>Team Project - GoKarang</h3>
              {/* Deskripsi Tech */}
              <p className='mb-4 md:mb-8 text-md'>
                Tech: <span className='text-[#bf1b47]'>CSS</span>, <span className='text-[#bf1b47]'>Javascript</span>, <span className='text-[#bf1b47]'>Bootstrap</span>, <span className='text-[#bf1b47]'>PHP</span>, <span className='text-[#bf1b47]'>MYSQL</span>, <span className='text-[#bf1b47]'>Leaftlet.JS</span>
              </p>
              {/* Informasi */}
              <div className=''>
                <div className=''>
                  <div className=''>
                    <button className='bg-[#bf1b47] hover:bg-[#f01c58] text-white font-bold py-2 px-4 rounded'>Link Project</button>
                  </div>
                </div>
              </div>
              {/* Img Project */}
              <Image src={web1} className='rounded-lg object-cover border border-4 border-[#bf1b47] mb-4' width={'100%'} height={'100%'} layout='reponsive' alt="" />
            </div>

            {/* Image 2 */}
            <div className='basis-1/3 flex-1'>
              {/* Judul */}
              <h3 className='text-md md:text-2xl font-medium'>Personal Project - Tugas Akhir</h3>
              {/* Deskripsi Tech */}
              <p className='mb-4 md:mb-8 text-md'>
                Tech: <span className='text-[#bf1b47]'>CSS</span>, <span className='text-[#bf1b47]'>Javascript</span>, <span className='text-[#bf1b47]'>Bootstrap</span>, <span className='text-[#bf1b47]'>PHP</span>, <span className='text-[#bf1b47]'>MYSQL</span>, <span className='text-[#bf1b47]'>Leaftlet.JS</span>
              </p>
              {/* Img Project */}
              <Image src={web2} className='rounded-lg object-cover border border-4 border-[#bf1b47] mb-4' width={'100%'} height={'100%'} layout='reponsive' alt="" />
            </div>

            {/* Image 2 */}
            <div className='basis-1/3 flex-1'>
              {/* Judul */}
              <h3 className='text-md md:text-2xl font-medium'>Personal Project - Crew Recruitment Purposes</h3>
              {/* Deskripsi Tech */}
              <p className='mb-4 md:mb-8 text-md'>
                Tech: <span className='text-[#bf1b47]'>React.JS</span>, <span className='text-[#bf1b47]'>Vite.JS</span>, <span className='text-[#bf1b47]'>Firebase</span>
              </p>
              {/* Img Project */}
              <Image src={web3} className='rounded-lg object-cover border border-4 border-[#bf1b47]' width={'100%'} height={'100%'} layout='reponsive' alt="" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
