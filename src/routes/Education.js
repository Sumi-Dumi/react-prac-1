import "../reset.css";
import "../style/Education.css";
import logo from "../img/QUT-Logo.png";
import python from "../img/Python.png";

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
                </div>

            </div>

        </main>
    );    
}

const projectList = [
    {
        name: "Python",
        image: {python},
        description: "Scraping real time web news and list it on the webpage."
    },
    {
        name: "SQL",
        image: {python},
        description: "Extracting a list of desired data from database / amending database"
    },
    {
        name: "C#",
        image: {python},
        description: "Developing a photo editing tool capable of crop, rotate, and applying various filters"
    },
    {
        name: "Python",
        image: {python},
        description: "Raspberry Pi project: fridge stock management using Tensorflow object detection"
    },
    {
        name: "App Modeling",
        image: {python},
        description: "Modeling roster generating tool using ORM"
    }

]


function projects(){
    return(
        <div className="wrapper">
            <div className="imgHolder">
                <img alt="" src={projectList.image}></img>
            </div>
            <div className="projectHolder">
                <div className="language">{projectList.name}</div>
                <div className="project-description">{projectList.description}</div>
            </div>


        </div>
    )
}


export default Education;