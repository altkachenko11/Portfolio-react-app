import BtbGitHub from "../components/btnGitHub/BtnGitHub";
import {useParams} from "react-router-dom"
import {projekts} from "./../helpers/projektList"
const Project = () => {
    const {id} = useParams();
    const project = projekts[id];

    
    return (
        <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">{project.title}</h1>

                <img src={project.imgBig} alt={project.title} className="project-details__cover"/>

                <div className="project-details__desc">
                    <p>{project.skills}</p>
                </div>

                <BtbGitHub link="https://github.com/"></BtbGitHub>

                
            </div>
        </div>
    </main>
      );
}
 
export default Project;