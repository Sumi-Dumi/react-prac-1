import "../reset.css";
import "../style/Portfolio.css";
import mywebsite from "../img/mywebsite.png";
import github from "../img/github.png";

function Portfolio() {
    return(
        <main className="background">
            <div className="margin"></div>
            <div className="title">PORTFOLIO</div>
            <h3 className="subheading">Front End</h3>
            <div className="wrapper-works">
                <MyPortfolio 
                image={mywebsite} />
            </div>           
        </main>
    );
}


function MyPortfolio({image, link}){
    return (       
        <div className="wrapper2-works">
            <div className="thumbnail">
                <img alt="" src={image}></img>
            </div>
            <div className="workInfo">
                <div className="workTitle">THIS WEBPAGE</div>
                <a href={link}><img alt="" src={github}></img></a>
            </div>
        </div>
    )
}

export default Portfolio;