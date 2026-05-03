import React from "react";
import "../Styles/Projects.css";
import { FaArrowRight } from "react-icons/fa";
import netflix_full from "../assets/netflix.webp";
import netflix from "../assets/screencapture-file-D-Laptop-Desktop-My-websites-website-front-end-projects-Netflix-index-html-2025-08-14-20_18_41.webp";
import spotify_full from "../assets/spotify.png";
import spotify from "../assets/screencapture-file-D-Laptop-Desktop-My-websites-website-front-end-projects-Spotify-index-html-2025-08-14-20_19_29.webp";
import blog_full from "../assets/techsters.webp";
import blog from "../assets/screencapture-file-D-Laptop-Desktop-My-websites-techsters-com-index-html-2025-08-14-20_20_11.webp";


const Projects = () => {
    return (
        <>
            <div className="projects" id="projects">
                <h1 className="project-heading">Some of Frontend Projects that I’ve Built</h1>
                <div className="project netflix">
                    <div className="project-image">
                        <img src={netflix_full} alt="" />
                    </div>
                    <img src={netflix} alt="" className="thumb" />
                    <div className="text">
                        <h2 className="netflix-heading">Netflix.</h2>
                        <a href="../src/projects/Netflix/index.html" target="_blank">
                            <button className="netflix-btn">Visit full screen  <span style={{ fontSize: "1rem", color: "white" }}>
                                <FaArrowRight />
                            </span></button>
                        </a>
                    </div>
                </div>
                <div className="project spotify">
                    <div className="project-image">
                        <img src={spotify_full} alt="" />
                    </div>
                    <img src={spotify} alt="" className="thumb spotify-thumb" />
                    <div className="text">
                        <h2 className="spotify-heading">Spotify.</h2>
                        <a href="../src/projects/Spotify/index.html">
                            <button className="spotify-btn">Visit full screen <span style={{ fontSize: "1rem", color: "black" }}>
                                <FaArrowRight />
                            </span></button>
                        </a>
                    </div>
                </div>
                <div className="project project-last techsters">
                    <div className="project-image">
                        <img src={blog_full} alt="" />
                    </div>
                    <img src={blog} alt="" className="thumb blog-thumb" />

                    <div className="text">
                        <h2 className="blog-heading">Blog Site.</h2>
                        <a href="../src/projects/techsters.com/index.html">
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
