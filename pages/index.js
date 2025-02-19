import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import {
  AiFillFacebook,
  AiFillFilePdf,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineComment
} from 'react-icons/ai'
import {
  BiArrowFromLeft,
  BiLogoBootstrap,
  BiLogoCss3,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoPhp,
  BiLogoSpringBoot,
  BiLogoTailwindCss,
  BiTime
} from 'react-icons/bi'
import { BsTrello } from 'react-icons/bs'
import { GiBrain } from 'react-icons/gi'
import { MdSyncProblem } from 'react-icons/md'
import {
  RiReactjsFill,
  RiTeamLine,
  RiVuejsFill
} from 'react-icons/ri'
import {
  SiAiqfome,
  SiLeaflet,
  SiMysql,
  SiPostgresql,
  SiSourcetree
} from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import ScrollToTop from 'react-scroll-to-top'
import { TypeAnimation } from 'react-type-animation'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import design from '../public/design.png'
import shyrly from '../public/rabit.jpeg'
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'

export default function Home() {
  // Untuk Mode Dark
  const [darkMode, setDarkMode] = useState(false)

  // Set Request Contact
  const [name, setName]                           = useState("")
  const [email, setEmail]                         = useState("")
  const [message, setMessage]                     = useState("")

  // Set Progress Bar Animation
  const [css, setCSS]                             = useState(0)
  const [javascript, setJavascript]               = useState(0)
  const [bootstrap, setBootstrap]                 = useState(0)
  const [tailwind, setTailwind]                   = useState(0)
  const [reactjs, setReactjs]                     = useState(0)
  const [vuejs, setVuejs]                         = useState(0)
  const [nextjs, setNextjs]                       = useState(0)
  const [php, setPhp]                             = useState(0)
  const [java, setJava]                           = useState(0)
  const [spring, setSpring]                       = useState(0)
  const [mysql, setMysql]                         = useState(0)
  const [postgresql, setPostgresql]               = useState(0)
  const [leafletjs, setLeafletjs]                 = useState(0)
  const [github, setGithub]                       = useState(0)
  const [sourcetree, setSourcetree]               = useState(0)
  const [trello, setTrello]                       = useState(0)
  const [communication, setCommunication]         = useState(0)
  const [problemSolved, setProblemSolved]         = useState(0)
  const [teamWork, setTeamWork]                   = useState(0)
  const [manageTime, setManageTime]               = useState(0)
  const [criticalThinking, setCriticalThinking]   = useState(0)

  // Send Request With API
  const send = async () => {
    if (name && email && message) {
      // Discord
      const discordSend = {
        content: "Pesan baru dari formulir kontak portofolio.",
        embeds: [{
          color: 3447003,
          title: "Data Kontak Baru",
          fields: [
            { name: "Name:", value: name, inline: false },
            { name: "Email:", value: email, inline: false },
            { name: "Message", value: message, inline: false }
          ],
          footer: { text: "Pesan dikirim melalui formulir kontak." },
          timestamp: new Date().toISOString()
        }]
      }

      // Discord POST
      const discordPOST = "https://discord.com/api/webhooks/1016571556220121158/4ZSI3CJKVExQzuNZE2-K-SlW0q6amoKbW-2gA7JSj3CWDVt8_eMAh_VBAhlrH4NgShCG"
      try {
        await fetch(discordPOST, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(discordSend)
        })

        alert("Pesan berhasil dikirim ke discord")
      } catch (err) {
        alert("Pesan gagal dikirim ke discord")
        return
      }

      // Email
      const emailSend = {
        to: email,
        subject: "Pesan baru dari formulir kontak portofolio.",
        body: `Halo, Anda menerima pesan baru dari formulir kontak:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
      }

      // Email POST
      const emailPOST = "#"
      try {
        await fetch(emailPOST, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(emailSend)
        })

        alert("Pesan berhasil dikirim ke email")
      } catch (err) {
        alert("Pesan gagal dikirim ke email")
        return
      }

      // Reset Form
      setName("")
      setEmail("")
      setMessage("")
    } else {
      alert("Harap lengkapi semua field sebelum mengirim.")
    }
  }

  // Progress Bar Animation
  useEffect(() => {
    setTimeout(() => {
      setCSS(70),
      setJavascript(55),
      setBootstrap(75),
      setTailwind(40),
      setReactjs(50),
      setVuejs(50),
      setNextjs(5),
      setPhp(75),
      setJava(70),
      setSpring(70),
      setMysql(80),
      setPostgresql(80),
      setLeafletjs(35),
      setGithub(70),
      setSourcetree(70),
      setTrello(50),
      setCommunication(70),
      setProblemSolved(80),
      setTeamWork(70),
      setManageTime(80),
      setCriticalThinking(85)
    }, 1000)
  })

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
        {/* Section Profile*/}
        <section id='home' className='min-h-screen'>
          {/* Navbar */}
          <div className='relative bg-gray-50 dark:bg-slate-900 pattern'>
            <nav className='z-20 flex justify-around gap-4 border-t border-gray-200 bg-white/50 p-2.5 shadow-lg backdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50 fixed bottom-5 left-5 right-5 md:bottom-5 md:left-80 md:right-80 min-h-[auto] flex-row rounded-lg border'>
              {/* Home */}
              <a href='#home' className='flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-[#f01c58] hover:bg-white/30 dark:text-white dark:hover:bg-[#f01c58]'>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='w-6 h-6'>
                  <path stroke-linecap='round' stroke-linejoin='round' d='M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819' />
                </svg>
                <small className='text-xs font-medium'> Home </small>
              </a>

              {/* Skill & Experience */}
              <a href='#skill' className='flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-[#f01c58] hover:bg-white/30 dark:text-white dark:hover:bg-[#f01c58]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 shrink-0">
                  <path stroke-linecap='round' stroke-linejoin='round' d='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z' />
                </svg>
                <small className='text-center text-xs font-medium'> Skill </small>
              </a>
              

              {/* Portofolio */}
              <a href='#portofolio' className='flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-[#f01c58] hover:bg-white/30 dark:text-white dark:hover:bg-[#f01c58]'>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='w-6 h-6 shrink-0'>
                    <path stroke-linecap='round' stroke-linejoin='round' d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z' />
                    <path stroke-linecap='round' stroke-linejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                  </svg>
                  <small className='text-center text-xs font-medium'> Portofolio </small>
              </a>

              {/* Contact */}
              <a href='#contact' className='flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-[#f01c58] hover:bg-white/30 dark:text-white dark:hover:bg-[#f01c58]'>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className="w-6 h-6 shrink-0">
                  <path stroke-linecap='round' stroke-linejoin='round' d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' />
                </svg>
                <small className='text-center text-xs font-medium'> Contact </small>
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
                <a className='bg-[#bf1b47] hover:bg-[#f01c58] text-white px-4 py-2 rounded-md ml-8 flex items-center' href='../Sidik_Mulyana_Curriculum_Vitae.pdf' target='_blank'>
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
              Hello, I’m Sidik Mulyana, a Web Developer with a passion for creating engaging and functional digital solutions. I have considerable experience and a broad understanding of various aspects of web development and programming.
            </p>
          </div>

          {/* Social Media */}
          <div className='text-5xl flex justify-center gap-8 text-gray-600 dark:text-white'>
            <a href="https://web.facebook.com/C.Ber.MG/" target="_blank"><AiFillFacebook /></a>
            <a href="https://www.linkedin.com/in/sidik-mulyana-0247a524b/" target="_blank"><AiFillLinkedin /></a>
            <a href="https://github.com/sidik219/" target="_blank"><AiFillGithub /></a>
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
                Skills and experience in web development across various fields. On the front-end, I commonly use <span className='text-[#bf1b47] font-medium'>CSS</span>, <span className='text-[#bf1b47] font-medium'>JavaScript</span>, <span className='text-[#bf1b47] font-medium'>Bootstrap</span>, and <span className='text-[#bf1b47] font-medium'>Tailwind</span> to create engaging user interfaces. 
                
                I am also becoming familiar with <span className='text-[#bf1b47] font-medium'>React.js</span> and <span className='text-[#bf1b47] font-medium'>Vue.js</span> for modern web applications. On the back-end, I have knowledge of programming languages such as <span className='text-[#bf1b47] font-medium'>PHP</span> and <span className='text-[#bf1b47] font-medium'>Spring</span>. 
                
                I can also manage databases using <span className='text-[#bf1b47] font-medium'>MySQL</span> and <span className='text-[#bf1b47] font-medium'>PostgreSQL</span>. Additionally, I have experience with the <span className='text-[#bf1b47] font-medium'>Leaflet.js</span> library for interactive map integration and use tools like <span className='text-[#bf1b47] font-medium'>GitHub</span>, <span className='text-[#bf1b47] font-medium'>Sourcetree</span>, and <span className='text-[#bf1b47] font-medium'>Trello</span> for project management.
            </p>
          </div>

          {/* Skill */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 py-10'>
            {/* Bagian Kiri Data Frontend & Backend */}
            <div className='p-11 rounded-xl my-10 border-4 border-[#bf1b47]' style={{ boxShadow: '0 8px 30px rgb(0,0,0,0.12)' }}>
              {/* Deskripsi Hard Skill */}
              <div>
                <h3 className='text-4xl pb-10 text-[#bf1b47] font-medium text-center drop-shadow-md'>Hard Skill</h3>
              </div>

              {/* Frontend */}
              <div className='text-center'>
                <Image className='mx-auto' src={code} width={100} height={100} alt="" />
                <h3 className='text-2xl font-medium pt-16 pb-8 drop-shadow-md dark:text-white'>Frontend</h3>
              </div>
              <div className='flex items-center'>
                <BiLogoCss3 className='text-blue-500 w-10 h-10 mr-3' /><p className='w-40 mx-auto text-gray-800 font-medium py-1 dark:text-white'>CSS</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: `${css}%`, transition: 'width 1s ease-in-out' }}>{css}%</div>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <BiLogoJavascript className='text-yellow-500 w-10 h-10 mr-3' /><p className='w-40 mx-auto text-gray-800 font-medium py-1 dark:text-white'>Javascript</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: `${javascript}%`, transition: 'width 1s ease-in-out' }}>{javascript}%</div>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <BiLogoBootstrap className='text-purple-800 w-10 h-10 mr-3' /><p className='w-40 mx-auto text-gray-800 font-medium py-1 dark:text-white'>Bootstrap</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: `${bootstrap}%`, transition: 'width 1s ease-in-out' }}>{bootstrap}%</div>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <BiLogoTailwindCss className='text-blue-500 w-10 h-10 mr-3' /><p className='w-40 mx-auto text-gray-800 font-medium py-1 dark:text-white'>Tailwind</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: `${tailwind}%`, transition: 'width 1s ease-in-out' }}>{tailwind}%</div>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <RiReactjsFill className='text-blue-500 w-10 h-10 mr-3' /><p className='w-40 mx-auto text-gray-800 font-medium py-1 dark:text-white'>React.JS</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: `${reactjs}%`, transition: 'width 1s ease-in-out' }}>{reactjs}%</div>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <RiVuejsFill className='text-green-500 w-10 h-10 mr-3' /><p className='w-40 mx-auto text-gray-800 font-medium py-1 dark:text-white'>Vue.JS</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: `${vuejs}%`, transition: 'width 1s ease-in-out' }}>{vuejs}%</div>
                  </div>
                </div>
              </div>

              {/* Backend */}
              <div className='text-center'>
                <h3 className='text-2xl font-medium pt-16 pb-8 drop-shadow-md dark:text-white'>Backend</h3>
              </div>
              <div className='flex items-center'>
                <TbBrandNextjs className='text-black w-10 h-10 mr-3' /><p className='w-40 mx-auto text-gray-800 font-medium py-1 dark:text-white'>Next.JS</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: `${nextjs}%`, transition: 'width 1s ease-in-out' }}>{nextjs}%</div>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <BiLogoPhp className='text-indigo-800 w-10 h-10 mr-3' /><p className='w-40 mx-auto text-gray-800 font-medium py-1 dark:text-white'>PHP</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: `${php}%`, transition: 'width 1s ease-in-out' }}>{php}%</div>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <BiLogoJava className='text-blue-500 w-10 h-10 mr-3' /><p className='w-40 mx-auto text-gray-800 font-medium py-1 dark:text-white'>Java</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: `${java}%`, transition: 'width 1s ease-in-out' }}>{java}%</div>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <BiLogoSpringBoot className='text-green-500 w-10 h-10 mr-3' /><p className='w-40 mx-auto text-gray-800 font-medium py-1 dark:text-white'>Spring</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: `${spring}%`, transition: 'width 1s ease-in-out' }}>{spring}%</div>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <SiMysql className='text-blue-500 w-10 h-10 mr-3' /><p className='w-40 mx-auto text-gray-800 font-medium py-1 dark:text-white'>MYSQL</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: `${mysql}%`, transition: 'width 1s ease-in-out' }}>{mysql}%</div>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <SiPostgresql className='text-blue-500 w-10 h-10 mr-3' /><p className='w-40 mx-auto text-gray-800 font-medium py-1 dark:text-white'>POSTGRESQL</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: `${postgresql}%`, transition: 'width 1s ease-in-out' }}>{postgresql}%</div>
                  </div>
                </div>
              </div>

              {/* Library */}
              <div className='text-center'>
                <h3 className='text-2xl font-medium pt-16 pb-8 drop-shadow-md dark:text-white'>Library</h3>
              </div>
              <div className='flex items-center'>
                <SiLeaflet className='text-green-500 w-10 h-10 mr-3' /><p className='w-40 mx-auto text-gray-800 font-medium py-1 dark:text-white'>Leaflet.JS</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: `${leafletjs}%`, transition: 'width 1s ease-in-out' }}>{leafletjs}%</div>
                  </div>
                </div>
              </div>

              {/* Software Tools */}
              <div className='text-center'>
                <h3 className='text-2xl font-medium pt-16 pb-8 drop-shadow-md dark:text-white'>Software Tools & Platform </h3>
              </div>
              <div className='flex items-center'>
                <AiFillGithub className='text-gray-800 w-10 h-10 mr-3 dark:text-white' /><p className='w-40 mx-auto text-gray-800 font-medium py-1 dark:text-white'>Github</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: `${github}%`, transition: 'width 1s ease-in-out' }}>{github}%</div>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <SiSourcetree className='text-blue-500 w-10 h-10 mr-3' /><p className='w-40 mx-auto text-gray-800 font-medium py-1 dark:text-white'>Sourcetree</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: `${sourcetree}%`, transition: 'width 1s ease-in-out' }}>{sourcetree}%</div>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <BsTrello className='text-blue-800 w-10 h-10 mr-3' /><p className='w-40 mx-auto text-gray-800 font-medium py-1 dark:text-white'>Trello</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: `${trello}%`, transition: 'width 1s ease-in-out' }}>{trello}%</div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Bagian Kiri */}

            {/* Bagian Kanan Data Soft Skill */}
            {/* Bagian Atas */}
            <div className='p-11 rounded-xl my-10 border-4 border-[#bf1b47]' style={{ boxShadow: '0 8px 30px rgb(0,0,0,0.12)' }}>
              {/* Bagian Atas */}
              {/* Deskripsi Soft Skill */}
              <div>
                <h3 className='text-4xl pb-10 text-[#bf1b47] font-medium text-center drop-shadow-md'>Soft Skill</h3>
              </div>
              
              {/* List Skill */}
              <div className='text-center'>
                <Image className='mx-auto' src={consulting} width={100} height={100} alt="" />
                <h3 className='text-2xl font-medium pt-16 pb-8 drop-shadow-md dark:text-white'>List Skill</h3>
              </div>
              <div className='flex items-center'>
                <AiOutlineComment className='text-blue-500 w-10 h-10 mr-3' /><p className='w-40 mx-auto text-gray-800 font-medium py-1 dark:text-white'>Communication</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: `${communication}%`, transition: 'width 1s ease-in-out' }}>{communication}%</div>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <MdSyncProblem className='text-orange-500 w-10 h-10 mr-3' /><p className='w-40 mx-auto text-gray-800 font-medium py-1 dark:text-white'>Problem Solved</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: `${problemSolved}%`, transition: 'width 1s ease-in-out' }}>{problemSolved}%</div>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <RiTeamLine className='text-green-500 w-10 h-10 mr-3' /><p className='w-40 mx-auto text-gray-800 font-medium py-1 dark:text-white'>Team Work</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: `${teamWork}%`, transition: 'width 1s ease-in-out' }}>{teamWork}%</div>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <BiTime className='text-gray-800 w-10 h-10 mr-3 dark:text-white' /><p className='w-40 mx-auto text-gray-800 font-medium py-1 dark:text-white'>Manage Time</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: `${manageTime}%`, transition: 'width 1s ease-in-out' }}>{manageTime}%</div>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <GiBrain className='text-red-500 w-10 h-10 mr-3'/><p className='w-40 mx-auto text-gray-800 font-medium py-1 dark:text-white'>Critical Thinking</p>
                <div className='w-3/4'>
                  <div className='h-6 bg-gray-200 rounded-lg'>
                    <div className='h-full text-center text-white bg-[#bf1b47] rounded-lg' style={{ width: `${criticalThinking}%`, transition: 'width 1s ease-in-out' }}>{criticalThinking}%</div>
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
                <h3 className='text-2xl font-medium pt-16 pb-8 drop-shadow-md dark:text-white'>Seminar & Workshop</h3>
              </div>
              <div className='flex items-center'>
                <BiArrowFromLeft className='text-gray-800 w-10 h-10 mr-3 dark:text-white' /><p className='w-44 mx-auto text-gray-800 font-medium py-1 dark:text-white'>Workshop Humanizing Technology with UX Research</p>
                <div className='w-7/12'>
                  <p className="mt-1 text-md text-gray-500 dark:text-white">27 Febuari 2021 – Sebagai Audience</p>
                </div>
              </div>
              <div className='flex items-center'>
                <BiArrowFromLeft className='text-gray-800 w-10 h-10 mr-3 dark:text-white' /><p className='w-44 mx-auto text-gray-800 font-medium py-1 dark:text-white'>Seminar Aplikasi GoKarang</p>
                <div className='w-7/12'>
                  <p className="mt-1 text-md text-gray-500 dark:text-white">12 April 2021 – Sebagai Web Developer & Presentator</p>
                </div>
              </div>
              <div className='flex items-center'>
                <BiArrowFromLeft className='text-gray-800 w-10 h-10 mr-3 dark:text-white' /><p className='w-44 mx-auto text-gray-800 font-medium py-1 dark:text-white'>Workshop Teknologi Masa Depan dalam Intervensi Dini Anak Down Syndrome</p>
                <div className='w-7/12'>
                  <p className="mt-1 text-md text-gray-500 dark:text-white">18 Desember 2021 – Sebagai Panitia Workshop</p>
                </div>
              </div>

              {/* List Experience */}
              <div className='text-center'>
                <h3 className='text-2xl font-medium pt-16 pb-8 drop-shadow-md dark:text-white'>Working</h3>
              </div>
              <div className='flex items-center'>
                <BiArrowFromLeft className='text-gray-800 w-10 h-10 mr-3 dark:text-white' /><p className='w-44 mx-auto text-gray-800 font-medium py-1 dark:text-white'>Training pemrograman Java with JDBC, JPA, Spring Framework, Database PostgreSQL</p>
                <div className='w-7/12'>
                  <p className="mt-1 text-md text-gray-500 dark:text-white">Agustus 2023 – Programmer Trainee</p>
                </div>
              </div>
              <div className='flex items-center'>
                <BiArrowFromLeft className='text-gray-800 w-10 h-10 mr-3 dark:text-white' /><p className='w-44 mx-auto text-gray-800 font-medium py-1 dark:text-white'>BTPN ARMS, BTPNS Jaga Online, Internal Project</p>
                <div className='w-7/12'>
                  <p className="mt-1 text-md text-gray-500 dark:text-white">November 2023 – Fullstack Developer</p>
                </div>
              </div>
              <div className='flex items-center'>
                <BiArrowFromLeft className='text-gray-800 w-10 h-10 mr-3 dark:text-white' /><p className='w-44 mx-auto text-gray-800 font-medium py-1 dark:text-white'>Ticketing Website, Orca Website, Career Website, Indobeauty Website and ESS APK</p>
                <div className='w-7/12'>
                  <p className="mt-1 text-md text-gray-500 dark:text-white">Juli 2023 – QA</p>
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
              The following are some of the results from projects carried out either in teams or as personal projects.
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
              {/* Img Project */}
              <div className="relative w-full hover:scale-105 duration-300">
                {/* Gambar */}
                <Image
                  src={web1}
                  className="rounded-lg object-cover border-4 border-[#bf1b47] mb-4"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  alt=""
                />
                
                {/* Tombol */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-[#bf1b47] hover:bg-[#f01c58] text-white px-4 py-3 rounded-lg mx-4">
                    <a href="#" target="_blank">Live View</a>
                  </button>
                  <button className="bg-[#bf1b47] hover:bg-[#f01c58] text-white px-4 py-3 rounded-lg mx-4">
                    <a href="https://github.com/sidik219/terumbu_karang" target="_blank">Code View</a>
                  </button>
                </div>
              </div>
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
              <div className="relative w-full hover:scale-105 duration-300">
                {/* Gambar */}
                <Image
                  src={web2}
                  className="rounded-lg object-cover border-4 border-[#bf1b47] mb-4"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  alt=""
                />
                
                {/* Tombol */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-[#bf1b47] hover:bg-[#f01c58] text-white px-4 py-3 rounded-lg mx-4">
                    <a href="#" target="_blank">Live View</a>
                  </button>
                  <button className="bg-[#bf1b47] hover:bg-[#f01c58] text-white px-4 py-3 rounded-lg mx-4">
                    <a href="https://github.com/sidik219/wisata_bahari" target="_blank">Code View</a>
                  </button>
                </div>
              </div>
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
              <div className="relative w-full hover:scale-105 duration-300">
                {/* Gambar */}
                <Image
                  src={web3}
                  className="rounded-lg object-cover border-4 border-[#bf1b47] mb-4"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  alt=""
                />
                
                {/* Tombol */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-[#bf1b47] hover:bg-[#f01c58] text-white px-4 py-3 rounded-lg mx-4">
                    <a href="https://sidik219.github.io/sphinx-tof/" target="_blank">Live View</a>
                  </button>
                  <button className="bg-[#bf1b47] hover:bg-[#f01c58] text-white px-4 py-3 rounded-lg mx-4">
                    <a href="https://github.com/sidik219/sphinx-tof" target="_blank">Code View</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Contact */}
        <section id='contact' className='pt-20'>
          {/* Deskripsi Contact */}
          <div className='text-center'>
            <h3 className='text-5xl pb-10 text-[#bf1b47] font-medium drop-shadow-md'>Contact Us</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-5xl mx-auto dark:text-white'>
              Contact me if you are interested.
            </p>
          </div>
          
          <div className='relative w-auto my-2 mx-auto py-10'>
            <div className='rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none border-4 border-[#bf1b47]'>
              {/*header*/}
              <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
                  <h3 className='text-2xl font-semibold text-[#19212a] my-1'></h3>
              </div>
              {/*body*/}
              <div className='relative p-6 flex-auto'>
                  <form>
                      {/* Telpon */}
                      <div className='-mx-3 md:flex mb-2'>
                          <div className='md:w-full px-3'>
                              <label className='uppercase tracking-wide text-black text-xs font-bold mb-2' htmlFor='name'>
                                  Name
                              </label>
                              <input className='w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3' id='name' type='text' value={name} onChange={e => setName(e.target.value)} placeholder='Name' required/>
                          </div>
                      </div>

                      {/* Email */}
                      <div className='-mx-3 md:flex mb-2'>
                          <div className='md:w-full px-3'>
                              <div className='flex'>
                                  <label className='uppercase tracking-wide text-black text-xs font-bold mb-2 mr-2' htmlFor='email'>
                                      Email
                                  </label>
                              </div>
                              <input className='w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3' id='email' type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' required/>
                          </div>
                      </div>
                      
                      {/* Message */}
                      <div className='-mx-3 md:flex mb-2'>
                          <div className='md:w-full px-3 mb-6 md:mb-0'>
                              <label className='uppercase tracking-wide text-black text-xs font-bold mb-2' htmlFor='message'>
                                  Message
                              </label>
                              <textarea className='w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3' id='message' type='text' value={message} onChange={e => setMessage(e.target.value)} placeholder='Message' required/>
                          </div>
                      </div>
                  </form>
              </div>
              <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                  <button
                      className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                      type='button'
                      onClick={send}
                  >
                    Send Message
                  </button>
              </div>
              <div>
                  <label htmlFor='label'></label>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <div className='w-full py-6 px-4 dark:bg-[#19212a] text-gray-800 md:text-xl max-w-5xl mx-auto dark:text-white'>
              <div className='max-w-[1450px] max-auto grid lg:grid-cols-2'>
                  <div className='lg:col-span-2 mx-auto'>
                      <div className='flex'>
                          <p>Copyright © {new Date().getFullYear()}</p>
                      </div>
                  </div>
                  <div className='lg:col-span-2 mx-auto'>
                      <div className='flex'>
                          <p>Made By. Shyrly</p>
                          {/* <img className='w-[25px] mx-px bg-transparent' src={Logo} alt="/" />
                          <p>{process.env.REACT_APP_COPYRIGHT_SACRIFICE}</p> */}
                      </div>
                  </div>
              </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
