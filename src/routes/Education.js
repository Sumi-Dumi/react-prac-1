import "../reset.css";
import "../style/Education.css";
import logo from "../img/QUT-Logo.png";
import python from "../img/Python.png";
import sql from "../img/SQL.png";
import csharp from "../img/csharp.png";
import raspberry from "../img/raspberry pi.png";
import app from "../img/app.png";

function Education(){
    return(
        <main className="background">
            <div className="margin"></div>
            <div className="title">EDUCATION</div>
            <div className="grid-education">
                <div className="logo-place">
                    <img src={logo} alt=""></img>
                </div>
                <div className="description">
                    <div className="subheading">Queensland University of Technology</div>
                    <div className="wrapper"><div>DIPLOMA IN IT</div><div>GPA - 6.875</div></div>
                    <ProjectsDiv />
                </div>
            </div>
        </main>
    );    
}

const projectList = [
    {
        name: "Python",
        image: python,
        description: "Scraping real time web news and list it on the webpage."
    },
    {
        name: "SQL",
        image: sql,
        description: "Extracting a list of desired data from database / amending database"
    },
    {
        name: "C#",
        image: csharp,
        description: "Developing a photo editing tool capable of crop, rotate, and applying various filters"
    },
    {
        name: "Raspberry Pi",
        image: raspberry,
        description: "Raspberry Pi project: fridge stock management using Tensorflow object detection"
    },
    {
        name: "App Modeling",
        image: app,
        description: "Modeling roster generating tool using ORM"
    }

]


function Projects({image, name, description}){
    return(
        <div className="wrapper-projects">
            <div className="imgHolder">
                <img alt="" src={image}></img>
            </div>
            <div className="projectHolder">
                <div className="language">{name}</div>
                <div className="project-description">{description}</div>
            </div>
        </div>
    )
}


function renderProject(project){
    return <Projects image={project.image} name={project.name} description={project.description} />       
}


function ProjectsDiv(){
    return <div>{projectList.map(renderProject)}</div>;
}

export default Education;