import { NavLink } from "react-router-dom";
import "./style.css"



const Projekt = ({title,img, index}) => {
    return (  
        <NavLink to={"/projekt/"+ index}>
        <li className="project">
            <img src={img} alt="Project img" className="project__img"/>
            <h3 className="project__title">{title}</h3>
        </li>
    </NavLink>
    );
}
 
export default Projekt;