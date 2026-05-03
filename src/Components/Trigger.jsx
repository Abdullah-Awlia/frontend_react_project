import React from 'react'
import "../Styles/Trigger.css";
import footer_doll from "../assets/doll.webp";
import footer_cartoon from "../assets/675005dc03927e9683fcaaee_Footer-p-800.webp";

const Trigger = () => {
    return (
        <div>
            <div className="main-trigger">
                <div className="trigger-bg"><div className="trigger-bg2"><img src={footer_doll} alt="" /></div><img src={footer_cartoon} alt="" /></div>

                <div className="trigger">
                    <h1 className="trigger-heading">So what do you think</h1>
                    <p className="trigger-paragraph">I am a frontend developer, want to master backend also. Passionate learner. Looking forward to master AI, Data and CyberSecurity. Going to crack the world's best companies.</p>
                    <a href=".hero" className="trigger-btn">Let's Create Something</a>
                </div>
            </div>
        </div>
    )
}

export default Trigger