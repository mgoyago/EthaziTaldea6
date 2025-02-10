import { useState } from 'react';
import './Menua.css';

import hasiera from "../assets/img/icons/Etxea-removebg-preview.png";
import torneoa from "../assets/img/icons/trofeo_invertido-removebg-preview.png";
import jokoak from "../assets/img/icons/consola.png";
import news from "../assets/img/icons/inverted_world_news_icon-removebg-preview.png";
import apustua from "../assets/img/icons/descarga-removebg-preview (1).png";
import guri from "../assets/img/icons/inverted_user_icon-removebg-preview.png";
import Perfil from "../assets/img/icons/usuario_de_perfil_inner_white.png";
import Admin from "../assets/img/icons/AdminPanel.png";
import denda from "../assets/img/icons/Denda.png";

interface MenuaProps {
    setCurrentSection: (section: string) => void;
    currentLanguage: string;
    currentRol: string;
    loged: string;
}

function Menua({ setCurrentSection, currentLanguage, currentRol, loged }: MenuaProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    let language = [""];
    if (currentLanguage === "eus") {
        language = ["Hasiera", "Torneoak", "Jokoak", "Berriak", "Trivial", "Denda", "Guri Buruz","Kudeatzailea"];
    } else if (currentLanguage === "es") {
        language = ["Inicio", "Torneos", "Juegos", "Noticias", "Trivial", "Tienda", "Sobre Nosotros","Administrador"];
    } else if (currentLanguage === "eng") {
        language = ["Home", "Tournaments", "Games", "News", "Trivial","Shop", "About Us","Admin"];
    }

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

                    <div className="d-flex flex-column align-items-start w-100">
                        <a 
                            className="navbar-brand text-white text-decoration-none mb-5 ms-2" 
                            href="#" 
                            style={{
                                width: "95%",
                                fontSize: "50px", 
                                fontWeight: "bold", 
                                borderBottom: "1px solid white"
                            }}
                        >
                            VeEX
                        </a>

                        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNavDropdown">
                            <ul className="navbar-nav flex-column">
                                <li className="nav-item d-flex mb-4 ms-2" onClick={() => setCurrentSection("home")}>
                                    <img src={hasiera} style={{ height: "40px" }} alt="Icono Home" />
                                    <a className="nav-link active text-white" aria-current="page" href="#" onClick={toggleMenu}>
                                        {language[0]}
                                    </a>
                                </li>
                                <li className="nav-item d-flex mb-4 ms-2" onClick={() => setCurrentSection("torneoak")}>
                                    <img src={torneoa} style={{ height: "40px" }} alt="Icono Torneos" />
                                    <a className="nav-link text-white" href="#" onClick={toggleMenu}>
                                        {language[1]}
                                    </a>
                                </li>
                                <li className="nav-item d-flex mb-4 ms-2" onClick={() => setCurrentSection("jokoak")}>
                                    <img src={jokoak} style={{ height: "40px" }} alt="Icono Juegos" />
                                    <a className="nav-link text-white" href="#" onClick={toggleMenu}>
                                        {language[2]}
                                    </a>
                                </li>
                                <li className="nav-item d-flex mb-4 ms-2" onClick={() => setCurrentSection("news")}>
                                    <img src={news} style={{ height: "40px" }} alt="Icono Noticias" />
                                    <a className="nav-link text-white" href="#" onClick={toggleMenu}>
                                        {language[3]}
                                    </a>
                                </li>
                                <li className="nav-item d-flex mb-4 ms-2" onClick={() => setCurrentSection("Trivial")}>
                                    <img src={apustua} style={{ height: "40px" }} alt="Icono Trivial" />
                                    <a className="nav-link text-white" href="#" onClick={toggleMenu}>
                                        {language[4]}
                                    </a>
                                </li>

                                
                                
                                 <li className="nav-item d-flex mb-4 ms-2" onClick={() => setCurrentSection("Denda")}>
                                            <img src={denda} style={{ height: "40px" }} alt="Icono Denda" />
                                            <a className="nav-link active text-white" aria-current="page" href="#" onClick={toggleMenu}>
                                                {language[5]}
                                            </a>
                                 </li>

                           
                       

                                <li className="nav-item d-flex mb-4" style={{ marginLeft: "-2px" }} onClick={() => setCurrentSection("form")}>
                                    <img src={guri} style={{ height: "30px", marginRight: "-6px" }} alt="Icono Formulario" />
                                    <a className="nav-link text-white" href="#" onClick={toggleMenu}>
                                        {language[6]}
                                    </a>
                                </li>

                                {currentRol === "admin" && (
                                    <>


                                        <li className="nav-item d-flex mb-4" style={{ marginLeft: "-2px" }} onClick={() => setCurrentSection("admin")}>
                                            <img src={Admin}style={{height: "50px", marginLeft:"4px"}} />
                                            <a className="nav-link text-white" href="#" onClick={toggleMenu}>
                                                {language[7]}
                                            </a>
                                        </li>
                                        
                                        
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Menua;
