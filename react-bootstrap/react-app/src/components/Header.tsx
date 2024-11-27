import './Header.css';
import Logo from '../assets/img/LogoBlanco.png';
import User from '../assets/img/user-removebg-preview.png';
import Lupa from '../assets/img/lupa-removebg-preview.png';

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
                                alt="User Icon"
                                className="nav-image user-size"
                            />
                        </a>      
                    </li>
                    <li className="nav-item">
                        <a href="#">
                            <img 
                                src={Logo} 
                                alt="Logo"
                                className="nav-image logo-size"
                            />
                        </a>                    
                    </li>
                    <li className="nav-item">
                        <form className="d-flex search-container" role="search">
                            <input 
                                type="text" 
                                className="form-control search-input" 
                                placeholder="Buscar..." 
                            />
                            <button type="submit" className="btn search-button">
                                <img 
                                    src={Lupa} 
                                    alt="Search Icon" 
                                    className="nav-image lupa-size"
                                />
                            </button>
                        </form>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
