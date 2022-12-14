import { useState } from "react";
import "../reset.css";
import "../style/Main.css";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Portfolio from "./Portfolio";
import github from "../img/github.png";


const link = "https://github.com/Sumi-Dumi";
function Nav() {
    const [icon, clickedIcon] = useState("About");
    return (
        <div>
            <nav className="navbar">
                <button onClick={() => clickedIcon("About")}>ABOUT</button>
                <button onClick={() => clickedIcon("Skills")}>SKILLS</button>
                <button onClick={() => clickedIcon("Education")}>EDUCATION</button>
                <button onClick={() => clickedIcon("Work experience")}>WORK EXPERIENCE</button>
                <button onClick={() => clickedIcon("Portfolio")}>PORTFOLIO</button>
                <button className="wrapper">
                    <a href={link} target="_blank" rel="noreferrer"><img alt="" src={github}></img></a>
                    <div></div>
                    <div></div>
                </button>  
            </nav>
            <div>
                {icon === "About" && <About />}
                {icon === "Skills" && <Skills />}
                {icon === "Education" && <Education />}
                {icon === "Work experience" && <WorkExperience />}
                {icon === "Portfolio" && <Portfolio />}
            </div>
        </div>  
    );
}



function Main() {
    return (
        <div>
            <Nav />
        </div>
    );
}

export default Main;