import "../reset.css";
import "../style/WorkExperience.css";

function WorkExperience(){
    return(
        <main className="backgroundEdu">
            <div className="margin"></div>
            <div className="title">WORK EXPERIENCE</div>
            <h3 className="subheading">Akmo Holdings Pty Ltd</h3>
            <h5>Business Administrator (Aug 2021-Present)</h5>
            <RoleMap />
         </main>
    )
}

const contents = [
    {
        role: "GRAPHIC DESIGN",
        content1: "Increased a maximum of 1,000% reach in Instagram with my edited feed & story content",
        content2: "Edited high volume of food photo and visually optimised ordering website that result in average 30% increase in webpage visit",
        content3: "Designed paper menus & brochures that have been published and distributed over 1,000 times",
        content4: ""
    },
    {
        role: "ACCOUNTING",
        content1: "Managed sales, expenditures and wage data for +10 branches and published sales report",
        content2: "Developed a new Excel template tailored for managing our weekly sales data which reduced 33% of labour cost in accounting",
        content3: "Managed payrolls for over 100 employees and finalised STP for 7 ABNs with 100% accuracy",
        content4: "Resolved unpaid bills accumulated for a year & resolved discrepancies with 100% accuracy"
    },
    {
        role: "ADMIN",
        content1: "Successfully managed to get 50% of rent reduction for 6 months by negotiating with a property manager",
        content2: "Aided branches to get a new staff by posting advertisements to multiple platforms and successfully allocated workers to each branch",
        content3: "Changed paper-based data management to digital, and reduced 80% of paper use",
        content4: ""
    }
]

function RoleHtml({role, content1, content2, content3, content4}){
    return(
        <div className="myRole">
            <div className="myRole-wrapper">
                <div className="myRole-box">{role}</div>
            </div>
            <ul>
                <li>{content1}</li>
                <li>{content2}</li>
                <li>{content3}</li>
                <li>{content4}</li>
            </ul>
        </div>
    )
}

function roleRender(roles){
    return <RoleHtml role={roles.role} content1={roles.content1} content2={roles.content2} content3={roles.content3} content4={roles.content4} />;
}

function RoleMap() {
    return <div className="gridForWork">{contents.map(roleRender)}</div>;
}

export default WorkExperience;