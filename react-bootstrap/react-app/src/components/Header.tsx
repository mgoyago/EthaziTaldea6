import './Header.css';
import Logo from '../assets/img/LogoBlanco.png';
import User from '../assets/img/user-removebg-preview.png';

function Header() {
    return (
        <header className="header bg-black text-white d-flex justify-content-between align-items-center px-4">
            <a href="#" className="text-white text-decoration-none logo" style={{ fontSize: "32px", fontWeight: "bold" }}></a>
            <nav className="d-lg-flex">
                <ul className="nav">
                    <li className="nav-item">
                    <a href="#">
                            <img 
                                src={User} 
                                alt=""
                                className="nav-image"
                            />
                    </a>      
                    </li>
                    <li className="nav-item">
                    <a href="#">
                            <img 
                                src={Logo} 
                                alt=""
                                className="nav-image logo-size"
                            />
                    </a>                    
                    </li>
                    
                    
                    <li className="nav-item">
                        <a href="#">
                            <form className="d-flex search-bar">
                                <input
                                    type="text"
                                    className="form-control me-2"
                                    placeholder=""
                                    aria-label="Search"
                                />
                                <button className="btn btn-outline-light" type="submit">
                                <img 
                                    src="path/to/your/image.png" 
                                    alt="Buscar"
                                    className="lupa"
                                />
                                </button>
                            </form>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
