import { useState } from 'react';
import './Menua.css';

function Menua() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container-fluid">
            <button 
                className="btn custom-btn btn-outline-light" 
                onClick={toggleMenu}
            >
                {isOpen ? '' : '☰'}
            </button>

            <div className="row">
                <nav className={`col-12 navbar navbar-expand-lg navbar-light bg-black vh-100 align-items-start col-sm-2 ${isOpen ? 'open' : 'closed'} custom-border`}>
                    <button 
                        className="btn toggle-btn btn-outline-light" 
                        onClick={toggleMenu}
                    >
                        X
                    </button>
                    <div className="d-flex flex-column align-items-center w-100">
                        <a className="navbar-brand text-white text-decoration-none" href="#" style={{fontSize: "75px", fontWeight: "bold"}}>VeEX</a>

                        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNavDropdown">
                            <ul className="navbar-nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link active text-white" aria-current="page" href="#">Hasiera</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Torneoak</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Jokoak</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Berriak</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Apustuak</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Guri Buruz</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown link
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item text-white" href="#">Action</a></li>
                                        <li><a className="dropdown-item text-white" href="#">Another action</a></li>
                                        <li><a className="dropdown-item text-white" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Menua;