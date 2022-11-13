import "../reset.css";
import "../style/about.css";
import resume from "./resume.pdf";
import cv from "./CV.pdf"

function About() {
    return(
        <main className="background">
            <div className="margin"></div>
            <h1 className="title">SUMI HAN</h1>
            <div className="wrapper">
                <a href={resume} download="Sumi-Han-resume.pdf">
                    <div className="link-button">RESUME</div>
                </a>
                <a href={cv} download="Sumi-Han-CVcv.pdf">
                    <div className="link-button">CV</div>
                </a>

            </div>
            <h3 className="subheading">Front-end developer job seeker with a strong passion for building seamless & graphically aesthetic websites</h3>
            <p>
            Sumi Han is skilled in HTML, CSS, SCSS, JS, ReactJS, and Git and continuously broadening her front-end language competencies. Her ultimate goal in her career is to be a full-stack developer. <br></br><br></br>Sumi Han completed her IT diploma at QUT and is now looking for a new chapter of her career as a front-end developer. Sumi Han has one year of experience in graphic design. During her career, by designing the website using Weebly, she established her knowledge on how to capture customer's mind and boost sales by implementing user-friendly UX & UI design. Her creativity, visual design, and web design experience will greatly contribute to building a smooth and eye-catching website.
            </p>

        </main>
    );


}
export default About;