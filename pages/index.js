import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import {
  AiFillFacebook,
  AiFillFilePdf,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineComment,
  AiOutlineMail
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
import { FaWhatsapp } from 'react-icons/fa'
import ScrollToTop from 'react-scroll-to-top'
import { TypeAnimation } from 'react-type-animation'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import design from '../public/design.png'
import shyrly from '../public/rabit.jpeg'
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.JPG'

// --- Komponen SkillBar (menerima ikon JSX) ---
const SkillBar = ({ icon, name, value, darkMode }) => {
  const getLevel = (val) => {
    if (val >= 80) return 'Expert'
    if (val >= 60) return 'Advanced'
    if (val >= 40) return 'Intermediate'
    return 'Beginner'
  }

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 gap-2">
      <div className="flex items-center gap-2 w-full sm:w-44">
        <span className="text-2xl sm:text-3xl">{icon}</span>
        <span className={`text-sm sm:text-base font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>{name}</span>
      </div>
      <div className="w-full sm:flex-1 retro-progress-bg">
        <div className="retro-progress-fill" style={{ width: `${value}%` }}>
          <span className="text-[0.55rem] sm:text-xs">{getLevel(value)}</span>
        </div>
      </div>
    </div>
  )
}

// --- Komponen ProjectCard ---
const ProjectCard = ({ project, image, setSelectedTech, live, code }) => (
  <div className='retro-card flex flex-col'>
    <h3 className='text-sm md:text-xl font-medium mb-3 dark:text-white'>{project.title}</h3>
    <div className='relative w-full hover:scale-105 duration-300'>
      <Image src={image} className='rounded-lg object-cover border-4 border-[#bf1b47] mb-3' width='100%' height='100%' layout='responsive' alt={project.title} />
      <div className='absolute inset-0 flex items-center justify-center gap-2 md:gap-4 opacity-90'>
        <button className='retro-button text-[0.5rem] md:text-[0.65rem]' onClick={() => setSelectedTech(project)}>Tech</button>
        {live !== '#' && <a href={live} target='_blank' className='retro-button text-[0.5rem] md:text-[0.65rem]'>Live</a>}
        <a href={code} target='_blank' className='retro-button text-[0.5rem] md:text-[0.65rem]'>Code</a>
      </div>
    </div>
    <p className='text-sm md:text-base mt-2 text-gray-700 dark:text-gray-200 flex-1'>{project.desc}</p>
  </div>
)

// --- Komponen ExperienceItem ---
const ExperienceItem = ({ title, date }) => (
  <div className='flex items-start mb-3'>
    <BiArrowFromLeft className='text-gray-800 dark:text-white w-6 h-6 md:w-8 md:h-8 mr-2 flex-shrink-0 mt-1' />
    <div>
      <p className='text-sm md:text-base font-medium dark:text-white'>{title}</p>
      <p className='text-xs md:text-sm text-gray-500 dark:text-gray-300'>{date}</p>
    </div>
  </div>
)

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const [css, setCSS] = useState(0)
  const [javascript, setJavascript] = useState(0)
  const [bootstrap, setBootstrap] = useState(0)
  const [tailwind, setTailwind] = useState(0)
  const [reactjs, setReactjs] = useState(0)
  const [vuejs, setVuejs] = useState(0)
  const [nextjs, setNextjs] = useState(0)
  const [php, setPhp] = useState(0)
  const [java, setJava] = useState(0)
  const [spring, setSpring] = useState(0)
  const [mysql, setMysql] = useState(0)
  const [postgresql, setPostgresql] = useState(0)
  const [leafletjs, setLeafletjs] = useState(0)
  const [github, setGithub] = useState(0)
  const [sourcetree, setSourcetree] = useState(0)
  const [trello, setTrello] = useState(0)
  const [communication, setCommunication] = useState(0)
  const [problemSolved, setProblemSolved] = useState(0)
  const [teamWork, setTeamWork] = useState(0)
  const [manageTime, setManageTime] = useState(0)
  const [criticalThinking, setCriticalThinking] = useState(0)

  const [selectedTech, setSelectedTech] = useState(null)

  // Kirim pesan ke Formspree (ganti endpoint)
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

  const techStacks = {
    gokarang: {
      title: 'GoKarang',
      tech: ['CSS', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL', 'Leaflet.js'],
      desc: 'Sistem informasi pemetaan terumbu karang. Memungkinkan input data lokasi, foto, dan kondisi karang. Dipresentasikan dalam seminar kampus.'
    },
    tugasAkhir: {
      title: 'Tugas Akhir',
      tech: ['CSS', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL', 'Leaflet.js'],
      desc: 'Website wisata bahari untuk promosi destinasi. Dilengkapi peta interaktif dan panel admin. Proyek individu untuk tugas akhir.'
    },
    crew: {
      title: 'Crew Recruitment',
      tech: ['React.js', 'Vite', 'Firebase'],
      desc: 'Aplikasi rekrutmen kru untuk event. Menggunakan React + Firebase Auth dan Firestore. Responsif dan real-time.'
    },
    aiDebug: {
      title: 'AI Debugging System',
      tech: {
        backend: ['Java 17', 'Spring Boot 3', 'Spring Security', 'WebSocket'],
        frontend: ['Vue.js 3', 'Vite', 'Pinia', 'Chart.js'],
        ai: ['Groq API', 'OpenAI API', 'Gemini API'],
        notification: ['Discord Webhook', 'Slack Webhook', 'Telegram Bot'],
        testing: ['JUnit 5', 'Mockito', 'MockMvc']
      },
      desc: 'Platform debugging otomatis dengan AI. Menganalisis error log secara real-time dan memberikan solusi. Integrasi multi AI model.'
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setCSS(70)
      setJavascript(55)
      setBootstrap(75)
      setTailwind(40)
      setReactjs(50)
      setVuejs(50)
      setNextjs(5)
      setPhp(75)
      setJava(70)
      setSpring(70)
      setMysql(80)
      setPostgresql(80)
      setLeafletjs(35)
      setGithub(70)
      setSourcetree(70)
      setTrello(50)
      setCommunication(70)
      setProblemSolved(80)
      setTeamWork(70)
      setManageTime(80)
      setCriticalThinking(85)
    }, 1000)
  }, [])

  return (
    <div className={darkMode ? 'dark' : ''}>
      <ScrollToTop smooth top='20' color='red' width='40' height='20' />

      <Head>
        <title>Sidik Portofolio</title>
        <meta name='description' content='Generate by create - A platform for creative minds to showcase their work and ideas.' />
        <link rel='icon' href='/favicon.ico' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>

      <style jsx global>{`
        h1, h2, h3, h4, h5 {
          font-family: 'Press Start 2P', cursive;
          letter-spacing: 1px;
          line-height: 1.4;
        }
        body, p, span, small, button, input, textarea, a {
          font-family: 'VT323', monospace;
        }
        h1 { font-size: clamp(1.5rem, 5vw, 2.5rem); }
        h2 { font-size: clamp(1.3rem, 4vw, 2rem); }
        h3 { font-size: clamp(1.1rem, 3vw, 1.8rem); }
        p, span, small, button, input, textarea { font-size: clamp(1rem, 2vw, 1.3rem); }

        .retro-border {
          border: 4px solid #bf1b47;
          box-shadow: 6px 6px 0px rgba(191,27,71,0.5);
        }
        .dark .retro-border {
          border-color: #f01c58;
          box-shadow: 6px 6px 0px rgba(240,28,88,0.5);
        }
        .retro-card {
          background: #fff;
          border: 4px solid #bf1b47;
          box-shadow: 8px 8px 0px #c8abb2;
          padding: 1.5rem;
        }
        .dark .retro-card {
          background: #19212a;
          border-color: #f01c58;
          box-shadow: 8px 8px 0px #c8abb2;
        }
        .retro-button {
          background: #bf1b47;
          border: none;
          border-bottom: 4px solid #7a0f2b;
          box-shadow: 3px 3px 0px #c8abb2;
          font-family: 'Press Start 2P', cursive;
          font-size: 0.6rem;
          padding: 0.5rem 1rem;
          transition: all 0.1s ease;
          text-transform: uppercase;
          cursor: pointer;
          color: white;
        }
        .retro-button:hover {
          border-bottom-width: 6px;
          transform: translateY(-2px);
          box-shadow: 5px 5px 0px rgba(0,0,0,0.4);
        }
        .retro-button:active {
          border-bottom-width: 2px;
          transform: translateY(2px);
          box-shadow: 1px 1px 0px rgba(0,0,0,0.2);
        }
        .retro-input {
          background: #f4f1ea;
          border: 2px solid #bf1b47;
          font-family: 'VT323', monospace;
          font-size: 1.1rem;
          padding: 0.5rem 1rem;
          width: 100%;
          box-sizing: border-box;
        }
        .dark .retro-input {
          background: #2a2a2a;
          color: #f01c58;
          border-color: #f01c58;
        }
        .retro-nav-item {
          border: 2px solid transparent;
          background: transparent;
          font-family: 'Press Start 2P', cursive;
          font-size: 0.5rem;
        }
        .retro-nav-item:hover {
          border-color: #bf1b47;
          background: rgba(255,255,255,0.4);
        }
        .dark .retro-nav-item:hover {
          border-color: #f01c58;
        }
        .retro-progress-bg {
          background: #222;
          border: 2px solid #bf1b47;
          height: 1.5rem;
          width: 100%;
        }
        .dark .retro-progress-bg {
          border-color: #f01c58;
        }
        .retro-progress-fill {
          height: 100%;
          background: #bf1b47;
          background-image: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.2) 10px, rgba(255,255,255,0.2) 20px);
          transition: width 1s ease-in-out;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 4px;
          font-size: 0.55rem;
          font-family: 'Press Start 2P';
          color: white;
        }
        .main-bg-pattern {
          background-image: linear-gradient(rgba(191,27,71,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(191,27,71,0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .dark .main-bg-pattern {
          background-image: linear-gradient(rgba(240,28,88,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(240,28,88,0.1) 1px, transparent 1px);
        }
      `}</style>

      <main className={`px-4 md:px-10 lg:px-20 main-bg-pattern ${darkMode ? 'bg-[#19212a]' : 'bg-white'}`}>
        <section id='home' className='min-h-screen'>
          <div className='relative bg-transparent pattern'>
            <nav className='z-20 flex justify-around gap-2 md:gap-4 border-t border-[#bf1b47] bg-white/50 p-2 shadow-lg backdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50 fixed bottom-3 left-3 right-3 md:bottom-5 md:left-80 md:right-80 min-h-[auto] rounded-none border-4 dark:border-[#f01c58]' style={{ boxShadow: '6px 6px 0px #c8abb2' }}>
              <a href='#home' className='retro-nav-item flex aspect-square min-h-[32px] w-14 md:w-16 flex-col items-center justify-center gap-1 rounded-md p-1 text-[#bf1b47] dark:text-white'>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-5 h-5 md:w-6 md:h-6'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819' />
                </svg>
                <small className='hidden sm:block text-[0.5rem] md:text-xs font-medium'>Home</small>
              </a>
              <a href='#skill' className='retro-nav-item flex aspect-square min-h-[32px] w-14 md:w-16 flex-col items-center justify-center gap-1 rounded-md p-1 text-[#bf1b47] dark:text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                  <path strokeLinecap='round' strokeLinejoin='round' d='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z' />
                </svg>
                <small className='hidden sm:block text-[0.5rem] md:text-xs font-medium'>Skill</small>
              </a>
              <a href='#portofolio' className='retro-nav-item flex aspect-square min-h-[32px] w-14 md:w-16 flex-col items-center justify-center gap-1 rounded-md p-1 text-[#bf1b47] dark:text-white'>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-5 h-5 md:w-6 md:h-6'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z' />
                  <path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                </svg>
                <small className='hidden sm:block text-[0.5rem] md:text-xs font-medium'>Portfolio</small>
              </a>
              <a href='#contact' className='retro-nav-item flex aspect-square min-h-[32px] w-14 md:w-16 flex-col items-center justify-center gap-1 rounded-md p-1 text-[#bf1b47] dark:text-white'>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className="w-5 h-5 md:w-6 md:h-6">
                  <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' />
                </svg>
                <small className='hidden sm:block text-[0.5rem] md:text-xs font-medium'>Contact</small>
              </a>
              <span className='flex text-2xl md:text-3xl h-14 w-14 md:h-16 md:w-16 flex-col items-center justify-center gap-1 text-[#f01c58] dark:text-white cursor-pointer animate-bounce' onClick={() => setDarkMode(!darkMode)}>
                <SiAiqfome />
              </span>
            </nav>
          </div>

          <div className='py-8 md:py-10 mb-8 md:mb-12 flex justify-between'>
            <h1 className='text-xl md:text-3xl dark:text-white'>Portofolio Ku</h1>
            <ul className='flex items-center'>
              <li>
                <a className='retro-button flex items-center' href='../Sidik_Mulyana_Curriculum_Vitae.pdf' target='_blank'>
                  <AiFillFilePdf className='mr-1 md:mr-2 text-lg md:text-2xl' />My CV
                </a>
              </li>
            </ul>
          </div>

          <div className='text-center p-6 md:p-10'>
            <h2 className='text-3xl md:text-5xl py-2 text-[#bf1b47] font-medium drop-shadow-md'>Sidik Mulyana</h2>
            <TypeAnimation
              sequence={['My Passion', 1000, 'Web Developer', 1000]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1.5em', display: 'inline-block', fontFamily: 'VT323' }}
              repeat={Infinity}
              className='dark:text-white'
            />
            <p className='text-md md:text-xl py-4 md:py-5 leading-7 md:leading-8 text-gray-800 dark:text-white max-w-3xl mx-auto'>
              Hello, I’m Sidik Mulyana, a Web Developer with a passion for creating engaging and functional digital solutions.
            </p>
          </div>

          <div className='text-4xl md:text-5xl flex justify-center gap-6 md:gap-8 text-gray-600 dark:text-white'>
            <a href="https://web.facebook.com/C.Ber.MG/" target="_blank"><AiFillFacebook /></a>
            <a href="https://www.linkedin.com/in/sidik-mulyana-0247a524b/" target="_blank"><AiFillLinkedin /></a>
            <a href="https://github.com/sidik219/" target="_blank"><AiFillGithub /></a>
          </div>

          <div className='relative mx-auto mt-16 md:mt-20 w-52 h-52 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-[#bf1b47] overflow-hidden shadow-[8px_8px_0px_#c8abb2] dark:shadow-[8px_8px_0px_#c8abb2]' style={{ background: 'linear-gradient(135deg, #eec0a3, #f5d6c1)' }}>
            <Image src={shyrly} layout='fill' objectFit='cover' alt="" />
          </div>
        </section>

        {/* Hard & Soft Skill Section */}
        <section id='skill' className='pt-16 md:pt-20'>
          <div className='text-center'>
            <h3 className='text-3xl md:text-5xl pb-6 md:pb-10 text-[#bf1b47] font-medium drop-shadow-md'>Skill & Experience</h3>
            <p className='text-md md:text-xl py-4 md:py-5 leading-7 md:leading-8 text-gray-800 dark:text-white max-w-5xl mx-auto'>
              Skills and experience in web development across various fields. On the front-end, I commonly use <span className='text-[#bf1b47] font-medium'>CSS</span>, <span className='text-[#bf1b47] font-medium'>JavaScript</span>, <span className='text-[#bf1b47] font-medium'>Bootstrap</span>, and <span className='text-[#bf1b47] font-medium'>Tailwind</span> to create engaging user interfaces. 
                
              I am also becoming familiar with <span className='text-[#bf1b47] font-medium'>React.js</span> and <span className='text-[#bf1b47] font-medium'>Vue.js</span> for modern web applications. On the back-end, I have knowledge of programming languages such as <span className='text-[#bf1b47] font-medium'>PHP</span> and <span className='text-[#bf1b47] font-medium'>Spring</span>. 
                
              I can also manage databases using <span className='text-[#bf1b47] font-medium'>MySQL</span> and <span className='text-[#bf1b47] font-medium'>PostgreSQL</span>. Additionally, I have experience with the <span className='text-[#bf1b47] font-medium'>Leaflet.js</span> library for interactive map integration and use tools like <span className='text-[#bf1b47] font-medium'>GitHub</span>, <span className='text-[#bf1b47] font-medium'>Fork</span>, and <span className='text-[#bf1b47] font-medium'>Trello</span> for project management.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 py-8 md:py-10'>
            {/* Hard Skill Card */}
            <div className='retro-card my-6 md:my-10'>
              <h3 className='text-3xl md:text-4xl pb-8 md:pb-10 text-[#bf1b47] font-medium text-center'>Hard Skill</h3>
              <div className='text-center'>
                <Image className='mx-auto' src={code} width={80} height={80} alt="" />
                <h3 className='text-xl md:text-2xl font-medium pt-12 md:pt-16 pb-6 md:pb-8 dark:text-white'>Frontend</h3>
              </div>
              <SkillBar icon={<BiLogoCss3 className='text-blue-500' />} name="CSS" value={css} darkMode={darkMode} />
              <SkillBar icon={<BiLogoJavascript className='text-yellow-500' />} name="JavaScript" value={javascript} darkMode={darkMode} />
              <SkillBar icon={<BiLogoBootstrap className='text-purple-800' />} name="Bootstrap" value={bootstrap} darkMode={darkMode} />
              <SkillBar icon={<BiLogoTailwindCss className='text-blue-500' />} name="Tailwind" value={tailwind} darkMode={darkMode} />
              <SkillBar icon={<RiReactjsFill className='text-blue-500' />} name="React.JS" value={reactjs} darkMode={darkMode} />
              <SkillBar icon={<RiVuejsFill className='text-green-500' />} name="Vue.JS" value={vuejs} darkMode={darkMode} />

              <div className='text-center'>
                <h3 className='text-xl md:text-2xl font-medium pt-8 md:pt-16 pb-6 md:pb-8 dark:text-white'>Backend</h3>
              </div>
              <SkillBar icon={<BiLogoPhp className='text-indigo-800' />} name="PHP" value={php} darkMode={darkMode} />
              <SkillBar icon={<BiLogoJava className='text-blue-500' />} name="Java" value={java} darkMode={darkMode} />
              <SkillBar icon={<BiLogoSpringBoot className='text-green-500' />} name="Spring" value={spring} darkMode={darkMode} />
              <SkillBar icon={<SiMysql className='text-blue-500' />} name="MySQL" value={mysql} darkMode={darkMode} />
              <SkillBar icon={<SiPostgresql className='text-blue-500' />} name="PostgreSQL" value={postgresql} darkMode={darkMode} />

              <div className='text-center'>
                <h3 className='text-xl md:text-2xl font-medium pt-8 md:pt-16 pb-6 md:pb-8 dark:text-white'>Library</h3>
              </div>
              <SkillBar icon={<SiLeaflet className='text-green-500' />} name="Leaflet.JS" value={leafletjs} darkMode={darkMode} />

              <div className='text-center'>
                <h3 className='text-xl md:text-2xl font-medium pt-8 md:pt-16 pb-6 md:pb-8 dark:text-white'>Software Tools</h3>
              </div>
              <SkillBar icon={<AiFillGithub className='text-gray-800 dark:text-white' />} name="GitHub" value={github} darkMode={darkMode} />
              <SkillBar icon={<SiSourcetree className='text-blue-500' />} name="Sourcetree" value={sourcetree} darkMode={darkMode} />
              <SkillBar icon={<BsTrello className='text-blue-800' />} name="Trello" value={trello} darkMode={darkMode} />
            </div>

            {/* Soft Skill Card */}
            <div className='retro-card my-6 md:my-10'>
              <h3 className='text-3xl md:text-4xl pb-8 md:pb-10 text-[#bf1b47] font-medium text-center'>Soft Skill</h3>
              <div className='text-center'>
                <Image className='mx-auto' src={consulting} width={80} height={80} alt="" />
                <h3 className='text-xl md:text-2xl font-medium pt-12 md:pt-16 pb-6 md:pb-8 dark:text-white'>List Skill</h3>
              </div>
              <SkillBar icon={<AiOutlineComment className='text-blue-500' />} name="Communication" value={communication} darkMode={darkMode} />
              <SkillBar icon={<MdSyncProblem className='text-orange-500' />} name="Problem Solving" value={problemSolved} darkMode={darkMode} />
              <SkillBar icon={<RiTeamLine className='text-green-500' />} name="Team Work" value={teamWork} darkMode={darkMode} />
              <SkillBar icon={<BiTime className='text-gray-800 dark:text-white' />} name="Time Management" value={manageTime} darkMode={darkMode} />
              <SkillBar icon={<GiBrain className='text-red-500' />} name="Critical Thinking" value={criticalThinking} darkMode={darkMode} />

              <div className='mt-12 md:mt-16'>
                <h3 className='text-3xl md:text-4xl pb-8 md:pb-10 text-[#bf1b47] font-medium text-center'>Experience</h3>
              </div>
              <div className='text-center'>
                <Image className='mx-auto' src={design} width={80} height={80} alt="" />
                <h3 className='text-xl md:text-2xl font-medium pt-12 md:pt-16 pb-6 md:pb-8 dark:text-white'>Seminar & Workshop</h3>
              </div>
              <ExperienceItem title="Workshop Humanizing Technology with UX Research" date="27 Feb 2021 – Audience" />
              <ExperienceItem title="Seminar Aplikasi GoKarang" date="12 Apr 2021 – Web Developer & Presenter" />
              <ExperienceItem title="Workshop Teknologi Masa Depan dalam Intervensi Dini Anak Down Syndrome" date="18 Dec 2021 – Panitia" />

              <div className='text-center mt-8 md:mt-12'>
                <h3 className='text-xl md:text-2xl font-medium pt-8 md:pt-16 pb-6 md:pb-8 dark:text-white'>Working</h3>
              </div>
              <ExperienceItem title="Programmer Trainee – Java, JDBC, JPA, Spring, PostgreSQL" date="Aug 2023" />
              <ExperienceItem title="Fullstack Developer – BTPN ARMS, BTPNS Jaga Online, Internal Project" date="Nov 2023 – Oct 2025" />
              <ExperienceItem title="QA – ARNS, Ticketing, Orca, Career, Indobeauty Websites & ESS APK" date="Jul 2024 – Jan 2025" />
              <ExperienceItem title="Backend Developer – RFID Integration" date="Feb 2025 – Oct 2025" />
            </div>
          </div>
        </section>

        {/* Portofolio Section */}
        <section id='portofolio' className='pt-16 md:pt-20'>
          <div className='text-center'>
            <h3 className='text-3xl md:text-5xl pb-6 md:pb-10 text-[#bf1b47] font-medium drop-shadow-md'>Portofolio</h3>
            <p className='text-md md:text-xl py-4 md:py-5 leading-7 md:leading-8 text-gray-800 dark:text-white max-w-5xl mx-auto'>
              The following are some of the results from projects carried out either in teams or as personal projects.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 py-8 md:py-10'>
            <ProjectCard project={techStacks.gokarang} image={web1} setSelectedTech={setSelectedTech} live="#" code="https://github.com/sidik219/terumbu_karang" />
            <ProjectCard project={techStacks.tugasAkhir} image={web2} setSelectedTech={setSelectedTech} live="#" code="https://github.com/sidik219/wisata_bahari" />
            <ProjectCard project={techStacks.crew} image={web3} setSelectedTech={setSelectedTech} live="https://sidik219.github.io/sphinx-tof/" code="https://github.com/sidik219/sphinx-tof" />
            <ProjectCard project={techStacks.aiDebug} image={web4} setSelectedTech={setSelectedTech} live="https://ai-debug-system.vercel.app/" code="https://github.com/sidik219/AI-Debugging-System-Springboot" />
          </div>

          {selectedTech && (
            <div className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4' onClick={() => setSelectedTech(null)}>
              <div className='bg-[#fff5f5] dark:bg-[#1f1a1b] border-4 border-[#bf1b47] shadow-[12px_12px_0px_#bf1b47] dark:shadow-[12px_12px_0px_#c8abb2] p-6 max-w-[90vw] md:max-w-2xl w-full max-h-[80vh] overflow-y-auto' onClick={(e) => e.stopPropagation()}>
                <div className='flex justify-between items-center mb-4'>
                  <h3 className='text-lg md:text-2xl font-bold text-[#bf1b47]'>{selectedTech.title} - Tech Stack</h3>
                  <button onClick={() => setSelectedTech(null)} className='retro-button px-2 py-1'>X</button>
                </div>
                {selectedTech.title === 'AI Debugging System' ? (
                  Object.entries(selectedTech.tech).map(([cat, list]) => (
                    <div key={cat} className='mb-4'>
                      <h4 className='font-semibold text-lg text-[#bf1b47] mb-2 capitalize'>{cat}</h4>
                      <div className='flex flex-wrap gap-2'>
                        {list.map((item, i) => (
                          <span key={i} className='bg-[#bf1b47] text-white px-3 py-1 rounded-full text-xs md:text-sm'>{item}</span>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className='flex flex-wrap gap-3'>
                    {selectedTech.tech.map((item, i) => (
                      <span key={i} className='bg-[#bf1b47] text-white px-4 py-2 rounded-full text-sm font-medium'>{item}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </section>

        {/* Contact Section */}
        <section id='contact' className='pt-16 md:pt-20'>
          <div className='text-center'>
            <h3 className='text-3xl md:text-5xl pb-6 md:pb-10 text-[#bf1b47] font-medium drop-shadow-md'>Contact Me</h3>
            <p className='text-md md:text-xl py-4 md:py-5 leading-7 md:leading-8 text-gray-800 dark:text-white max-w-5xl mx-auto'>
              Contact me if you are interested.
            </p>
          </div>

          <div className='flex flex-col md:flex-row gap-6 justify-center items-center mt-6 mb-8'>
            <a href="https://wa.me/6281213705331?text=Halo%20Sidik" target="_blank" className='retro-button flex items-center gap-2 bg-green-600 border-b-4 border-green-800'>
              <FaWhatsapp className='text-xl' /> WhatsApp
            </a>
            <a href="mailto:sidik.mlyn@gmail.com" className='retro-button flex items-center gap-2 bg-red-600 border-b-4 border-red-800'>
              <AiOutlineMail className='text-xl' /> Email
            </a>
          </div>

          <div className='relative w-full max-w-lg mx-auto py-8 md:py-10'>
            <div className='retro-card relative flex flex-col w-full'>
              <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
                <h3 className='text-xl md:text-2xl font-semibold text-[#19212a] dark:text-white'>Send a Message</h3>
              </div>
              <div className='relative p-6 flex-auto'>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className='mb-4'>
                    <label className='uppercase tracking-wide text-black dark:text-white text-xs font-bold mb-2 block'>Name</label>
                    <input className='retro-input' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
                  </div>
                  <div className='mb-4'>
                    <label className='uppercase tracking-wide text-black dark:text-white text-xs font-bold mb-2 block'>Email</label>
                    <input className='retro-input' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                  </div>
                  <div className='mb-6'>
                    <label className='uppercase tracking-wide text-black dark:text-white text-xs font-bold mb-2 block'>Message</label>
                    <textarea className='retro-input' rows='4' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message' />
                  </div>
                  <div className='flex justify-end'>
                    <button className='retro-button bg-emerald-500 border-b-4 border-emerald-700' type='button' onClick={send}>Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer className='pt-6 pb-24 md:pb-28 text-center'>
          <div className='text-gray-800 dark:text-white text-sm md:text-base'>
            <p>Copyright © {new Date().getFullYear()} Made By. Sidik</p>
          </div>
        </footer>
      </main>
    </div>
  )
}