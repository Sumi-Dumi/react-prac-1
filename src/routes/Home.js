import "../reset.css";
import "../style/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="background-home">
        <div className="name">
          SUMI HAN
        </div>
        <div className="wrapper-box">
          <Link to="/main">
            <div className="box">
              WHO IS SHE ?
            </div>
          </Link> 
        </div>
      </div>
    </div>
  );
}

export default Home;
