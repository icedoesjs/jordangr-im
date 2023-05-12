import '../styles/home.css';
import '../styles/etc/indicator.css';
import Image from 'next/image';
import Avatar from '../public/avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal, faGear, faCode, faHeart } from '@fortawesome/free-solid-svg-icons';
import repos from '../config';
import Repo from '../components/repo';


export default function Home() {
  return (
    <div>
      <div className='hero' id="hero">
        <div className="hero-container">
          <div className="left">
            <h1 className="hero-text">Hey, Im <span className="red-text">Jordan</span>!</h1>
            <h2 className='hero-caption'>I design beautiful UIs and create meaningful software all dedicated towards the end-user.</h2>
            <div className="btn-container">
              <button type="button" className="btn btn-primary btn-lg btn-social"><a href="https://github.com/icedoesjs" className="social-link">Github</a></button>
              <button type="button" className="btn btn-primary btn-lg btn-social"><a href="https://www.linkedin.com/in/jordan-grim-1492b1261/" className="social-link">Linkedin</a></button>
            </div>
            <div className="arrow"></div>
          </div>
          <div className="right">
            <Image src={Avatar} alt="My Avatar" className="avatar" />
          </div>
        </div>
      </div>
      <div className="about-container" id="about">
        <div className="about-content">
          <h2 className="about-header">Who am I?</h2>
          <p className="about-text">I have been working since a very young age doing many different things. My parents are both entrepreneurs and I have always helped in both family businesses, as well as my grandpas. I picked up software development in my free time after taking a deep interest in computers. I started with Javascript making Discord bots and CLI tools. I became a freelance developer when I was in my early teens and learned an incredible amount. My time spent freelancing taught me invaluable knowledge which I carry to this day. I picked up C# for a game called FiveM and continued into the game's framework when I learned LUA. My journey has came with many lessons and made my fondness for software and computers in a whole deeper than I ever could have imagined. I can proudly say I am addicted to learning and bettering my code and myself.</p>
          <button type="button" className="btn contact-btn"><span className="bi bi-file-earmark-person-fill"></span>&nbsp;<a href="https://www.linkedin.com/in/jordan-grim-1492b1261/">Check out my resume!</a></button>
        </div>
      </div>
      <div className="languages-container">
        <div className="card-column">
          <FontAwesomeIcon icon={faTerminal} className="card-icon" />
          <span className="card-title">Software Frameworks</span>
          <span className="card-desc">These are frameworks I use, enjoy and will be continue to write in the foreseeable future.</span>
          <span className="list-title">Frameworks:</span>
          <ul className="card-list">
            <li>Express.js</li>
            <li>Next.JS</li>
            <li>React</li>
            <li>Discord.js</li>
            <li>Pycord</li>
            <li>Django</li>
            <li>Flask</li>
            <li>Svelte</li>
          </ul>
        </div>
        <div className="card-column">
          <FontAwesomeIcon icon={faCode} className="card-icon" />
          <span className="card-title">Coding Languages</span>
          <span className="card-desc">I love learning new languages, but these are the languages I know.</span>
          <span className="list-title">Languages:</span>
          <ul className="card-list">
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Csharp</li>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SQL</li>
            <li>JSON</li>
          </ul>
        </div>
        <div className="card-column">
          <FontAwesomeIcon icon={faGear} className="card-icon" />
          <span className="card-title">Development Tools</span>
          <span className="card-desc">All the tools I use for speeding up my development or simple quality of life items.</span>
          <span className="list-title">Tools:</span>
          <ul className="card-list">
            <li>VSCode</li>
            <li>Visual Studio</li>
            <li>Bootstrap</li>
            <li>Github</li>
            <li>Git</li>
            <li>Vercel</li>
            <li>Atom</li>
            <li>Jira</li>
          </ul>
        </div>
      </div>
      <div className="projects-container" id="projects">
        <div className="text-container">
          <h2 className="projects-head">My Projects</h2>
          <span className="projects-caption">Here are some of my projects, want to see more? <a href="https://github.com/icedoesjs" className="red-link">View my github.</a></span>
        </div>
        <div className="card-container">
          {repos.repos.map(r => {
            return (
              <Repo name={r} />
            )
          })}
        </div>
      </div>
      <div className="contact-container" id="contact">
        <h2 className="contact-header">Contact Me</h2>
        <span className="contact-caption">I'm always open to new opportunities and discussing products.</span>
        <div className="inquire-btn">
          <button type="button" className="btn contact-btn"><span className="bi bi-envelope-at-fill"></span>&nbsp;<a href="mailto: jgrim524@gmail.com">Shoot Me A Email</a></button>
          <button type="button" className="btn contact-btn"><span className="bi bi-linkedin"></span>&nbsp;<a href="https://www.linkedin.com/in/jordan-grim-1492b1261/">Message Me On Linkedin</a></button>
        </div>
      </div>
      <footer className="bg-light text-center text-lg-start site-footer">
        <div className="text-center p-3">
          Made with <FontAwesomeIcon icon={faHeart} className="footer-heart"/> by Jordan using Next.js
        </div>
      </footer>
    </div>
  )
}
