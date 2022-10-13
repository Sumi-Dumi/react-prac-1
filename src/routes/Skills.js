import "../reset.css";
import "../style/Skills.css";

function Skills() {
    return (
        <main className="background">
            <div className="margin"></div>
            <div className="title">SKILLS</div>
            <div className="grid-skills">
                <div className="first-circle"><div>React JS</div></div>
                <div className="second-circle">
                    <div>
                        <h6>HTML</h6> 
                        <h6>CSS</h6>
                        <h6>Java</h6>
                    </div>
                </div>
                <div className="third-circle"><div>Git</div></div>
            </div>
        </main>
    );
}

export default Skills;