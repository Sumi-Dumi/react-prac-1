import { useState } from "react";
import "../reset.css";
import "../style/Portfolio.css";
import design_1 from "../img/design_1.png";
import design_2 from "../img/design_2.png";
import design_3 from "../img/design_3.png";
import design_4 from "../img/design_4.png";
import design_5 from "../img/design_5.png";
import nextarrow from "../img/nextarrow.png";
import prevarrow from "../img/prevarrow.png";




function Graphic(){
    let [index, changeIndex] = useState(0);
    const prevPhoto = () => {
        const currentSlide = index === 0;
        const nextSlide = currentSlide ? designThumbnail.length - 1 : index -1;
        changeIndex(nextSlide);
    }
    const nextPhoto = () => {
        const current = index === designThumbnail.length - 1;
        const prevSlide = current ? 0 : index +1;
        changeIndex(prevSlide);
    }
    return(
        <div className="wrapper">
            <button className="prevArrow" onClick={() => prevPhoto()}>
                <img alt="" src={prevarrow}></img>
            </button>
            <div 
                className="imageSlide"  
                style={{ backgroundImage: `url(${designThumbnail[index].image})`}}>
            </div>
            <button className="nextArrow" onClick={() => nextPhoto()}>
                <img alt="" src={nextarrow}></img>
            </button>
        </div>
    )

}

const designThumbnail = [
    {image: design_1},
    {image: design_2},
    {image: design_3},
    {image: design_4},
    {image: design_5}
];

export default Graphic;