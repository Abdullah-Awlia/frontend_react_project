import React from 'react'
import '../Styles/Skills.css'
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaReact } from "react-icons/fa";
import { SiC, SiBootstrap, SiTailwindcss } from "react-icons/si";



const Skills = () => {
    return (
        <div>
            <div className="main-skills" id="skills">
                <h1>The Skills I’m Building and Growing</h1>
                <h1 className='heading-lang'>Languages*</h1>
                <div className="languages">
                    <div className="html-lang language"><FaHtml5 className="text-orange-500" title="HTML5" />
                        <h2 className="lang-heading">HTML</h2>
                        <p className="lang-paragraph">Learnt HTML to make good structure of webpages.</p></div>
                    <div className="css-lang language">  <FaCss3Alt className="text-blue-500" title="CSS3" />
                        <h2 className="lang-heading">CSS</h2>
                        <p className="lang-paragraph">Learnt CSS to make that structure good looking with colors and images.</p></div>
                    <div className="js-lang language"><FaJs className="text-yellow-400" title="JavaScript" />
                        <h2 className="lang-heading">JavaScript</h2>
                        <p className="lang-paragraph">I wanted functionality in webpages. So, I learnt JS - still learning.</p></div>
                    <div className="python-lang language"><FaPython className="text-blue-300" title="Python" />
                        <h2 className="lang-heading">Python</h2>
                        <p className="lang-paragraph">For AI and data, Python is essential to learn. I know its basics - looking forward to master.</p></div>
                </div>
                <h1 className='heading-lf'>Frameworks/Libraries*</h1>

                <div className="frameworks">

                    <div className="css-lf">
                        <div className="bootstrap-lf"> <SiBootstrap className="text-purple-500 hover:scale-110 transition" title="Bootstrap" />
                            <h2 className='lang-heading'>BootStrap</h2>
                            <p className='lang-paragraph'>A popular CSS framework which contains pre-built components. I have been using it for a short time.</p></div>
                        <div className="tailwind-lf"> <SiTailwindcss className="text-sky-400 hover:scale-110 transition" title="TailwindCSS" />
                            <h2 className='lang-heading'>Tailwind</h2>
                            <p className='lang-paragraph'>It is also a good CSS framework. It contain utility classes that we use in our code. I used it before.</p></div>
                    </div>
                    <div className="react-lf">      <FaReact className="text-cyan-300 hover:scale-110 transition" title="React" />
                        <h2 className='lang-heading'>React JS</h2>
                        <p className='lang-paragraph'>The most popular JS, component based, UI library. I'm learning it deeply.</p>
                    </div>

                </div>


                <div className="future">
                    <p className='future-heading'><span>In Future*</span><p>
                        I want to master backend with frontend to build powerful full-stack websites. Moreover, AI is emerging with pace. It's my goal to automate all the business that I'll own in future. So I'll master AI and Data compeletly.</p>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Skills