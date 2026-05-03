import React from 'react'
import '../Styles/Hero.css'


const Hero = () => {
    return (
        <div className="flex">

            <div className='hero' id='home'>
                <div className="hero-content">
                    <h1>HELLO, I'M <span>ABDULLAH AWLIA</span></h1>
                    <div className="paragraph-btn-about">
                        <div className="hero-about">
                            <h1 className='about-heading'>
                                About me *
                            </h1>
                            <p className='hero-about-paragraph'>
                                I have been learning and developing using HTML, CSS, JavaScript and Python for at least 2 year. In future, I am committed to learning AI, Cybersecurity and Networks.
                            </p>
                            <p className='hero-about-paragraph'>
                                Most importantly I want end-to-end mastery of DSA and System Design in a complete and professional manner — understanding that how they work and applying that knowledge to solve complex real-world problems.
                            </p>
                            <div className="skills-btn">
                                <button className='skill-btn'>FrontEnd Developer</button>
                                <button className='skill-btn'>Backend Developer</button>
                            </div>
                        </div>
                        <div className="doll"><img src="systems_project\src\assets\doll.webp" alt="" /><div className="table"></div></div>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero