import Header from "../components/header/Header";

const Home = () => {
    return ( 
        <>
        <Header></Header>
    
    <main className="section">
        <div className="container">

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Frontend</h2>
                        <p>JavaScript, ReactJS, HTML, CSS, BootStrap</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Backend</h2>
                        <p>NodeJS, MySQL, MongoDB, PHP</p>
                    </li>
                    <li className="content-list__item">
                       <h2 className="title-2">Testing</h2>
                       <p>Cypress, Git</p>
</li>
                </ul>

        </div>
    </main>
</>
     );
}  
 
export default Home;