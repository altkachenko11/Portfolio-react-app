import "./style.css";

const Header = () => {
    return (
        <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Hi, my name is <em>Alona</em></strong><br />
                a Web Developer
            </h1>
            <div className="header__text">
                <p>with passion for learning and creating.</p>
            </div>
            <a href="/cv.pdf" className="btn" target="_blank" rel="noopener noreferrer">Open CV</a>
        </div>
    </header>
  );
}
 
export default Header;