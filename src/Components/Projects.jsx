import React from "react";
import "../Styles/Projects.css";
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
    return (
        <>
            <div className="projects" id="projects">
                <h1 className="project-heading">Some of Frontend Projects that I’ve Built</h1>
                <div className="project netflix">
                    <div className="project-image">
                        <img src="systems_project\src\assets\netflix.webp" alt="" />
                    </div>
                    <img src="systems_project\src\assets\screencapture-file-D-Laptop-Desktop-My-websites-website-front-end-projects-Netflix-index-html-2025-08-14-20_18_41.webp" alt="" className="thumb" />
                    <div className="text">
                        <h2 className="netflix-heading">Netflix.</h2>
                        <a href="systems_project\src\projects\Netflix\index.html">
                            <button className="netflix-btn">Visit full screen  <span style={{ fontSize: "1rem", color: "white" }}>
                                <FaArrowRight />
                            </span></button>
                        </a>
                    </div>
                </div>
                <div className="project spotify">
                    <div className="project-image">
                        <img src="systems_project\src\assets\spotify.png" alt="" />
                    </div>
                    <img src="systems_project\src\assets\screencapture-file-D-Laptop-Desktop-My-websites-website-front-end-projects-Spotify-index-html-2025-08-14-20_19_29.webp" alt="" className="thumb spotify-thumb" />
                    <div className="text">
                        <h2 className="spotify-heading">Spotify.</h2>
                        <a href="systems_project\src\projects\Spotify\index.html">
                            <button className="spotify-btn">Visit full screen <span style={{ fontSize: "1rem", color: "black" }}>
                                <FaArrowRight />
                            </span></button>
                        </a>
                    </div>
                </div>
                <div className="project project-last techsters">
                    <div className="project-image">
                        <img src="systems_project\src\assets\techsters.webp" alt="" />
                    </div>
                    <img src="systems_project\src\assets\screencapture-file-D-Laptop-Desktop-My-websites-techsters-com-index-html-2025-08-14-20_20_11.webp" alt="" className="thumb blog-thumb" />

                    <div className="text">
                        <h2 className="blog-heading">Blog Site.</h2>
                        <a href="systems_project\src\projects\techsters.com\index.html">
                            <button className="blog-btn">Visit full screen <span style={{ fontSize: "1rem", color: "white" }}>
                                <FaArrowRight />
                            </span></button>
                        </a>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Projects;
