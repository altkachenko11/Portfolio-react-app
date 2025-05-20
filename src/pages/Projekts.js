import Projekt from "../components/projekts/Projekt";
import { projekts } from "../helpers/projektList";

const Projekts = () => {
    return ( 
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                {projekts.map((projekt, index) => (
                        <Projekt 
                            key={index} 
                            title={projekt.title} 
                            img={projekt.img} 
                            index={index}
                        /> 
                     ))}

                </ul>
            </div>
        </main>
    );
}
 
export default Projekts;
