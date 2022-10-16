import { useState } from "react";
import "../reset.css";
import "../style/Portfolio.css";
import Graphic from "./GraphicDesign";
import mywebsite from "../img/mywebsite.png";
import restaurantHome from "../img/restaurant.png";


function Portfolio() {
    const [currentPortfolio, switchPortfolio] = useState("Front End");
    return(
        <main className="background">
            <div className="margin"></div>
            <div className="title">PORTFOLIO</div>
            <div className="buttons">
                <button className="button1" onClick={() => switchPortfolio("Front End")}>FRONT END</button>
                <button className="button2" onClick={() => switchPortfolio("Graphic")}>GRAPHIC DESIGN & PHOTO EDITING</button>
            </div>
            {currentPortfolio === "Front End" && <FrontEnd />}
            {currentPortfolio === "Graphic" && <Graphic />}
        </main>
    );
}

function FrontEnd() {
    return(
        <div className="wrapper-works">
            <MyPortfolio
            title="THIS WEBSITE" 
            image={mywebsite}
            link="https://github.com/Sumi-Dumi/react-prac-1" 
            />
            <MyPortfolio 
            title="RESTAURANT HOME"
            image={restaurantHome}
            link="https://github.com/Sumi-Dumi/restaurant-website-prac" 
            />
        </div>  
    )
}


function MyPortfolio({image, title, link}){
    return (       
        <div className="wrapper2-works">
            <div className="thumbnail" style={{ backgroundImage: `url(${image})`}}>
            </div>
            <div className="workInfo">
                <div className="workTitle">{title}</div>
                <a href={link} target="_blank" rel="noreferrer">GIT HUB</a>
            </div>
        </div>
    )
}

export default Portfolio;