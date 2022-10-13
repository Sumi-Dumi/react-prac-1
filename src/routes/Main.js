import { useState } from "react";
import "../reset.css";
import "../style/Main.css";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";

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
                <button >
                    <div></div>
                    <div></div>
                    <div></div>
                </button>  
            </nav>
            <div>
                {icon === "About" && <About />}
                {icon === "Skills" && <Skills />}
                {icon === "Education" && <Education />}
                {icon === "Work experience" && <Skills />}
                {icon === "Portfolio" && <Skills />}
            
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