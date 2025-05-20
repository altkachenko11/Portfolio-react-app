import "./style.css";

import gitHub from "./../../img/icons/gitHub.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";

const Footer = () => {
    return ( 
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="https://github.com/altkachenko11"><img src={gitHub} alt="Link" /></a></li>
                    <li className="social__item"><a href="www.linkedin.com/in/alona-tkachenko11"><img src={linkedIn}alt="Link" /></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2025 portfolio.com</p>
                </div>
            </div>
        </div>
    </footer> 
    );
}
 
export default Footer;