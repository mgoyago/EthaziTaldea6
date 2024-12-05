import './Header.css';
import { useState } from 'react';
import Logo from '../assets/img/LogoBlanco.png';
import User from '../assets/img/user-removebg-preview.png';
import Lupa from '../assets/img/lupa-removebg-preview.png';
import English from '../assets/img/languages/eng-removebg-preview (1).png';
import Español from '../assets/img/languages/españa-removebg-preview.png';
import Euskera from '../assets/img/languages/eusk-removebg-preview.png';

interface HeaderProps {
  setCurrentSection: (section: string) => void;
  setCurrentLanguage: (language: string) => void;
}

function Header({ setCurrentSection, setCurrentLanguage }: HeaderProps) {
  const [currentLanguage, setCurrentLang] = useState<string>("eus");

  const images: { [key: string]: string } = {
    eng: English,
    es: Español,
    eus: Euskera,
  };

  const handleLanguageChange = (lang: string) => {
    setCurrentLang(lang);
    setCurrentLanguage(lang);
  };

  return (
    <div>
      <div className="nav-item d-flex align-items-center justify-content-end position-absolute overflow-visible" id="languages">
        <div className="dropdown">
          <button
            className="btn dropdown-toggle d-flex align-items-center justify-content-center"
            type="button"
            id="languageDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={images[currentLanguage]} 
              alt={currentLanguage === "eus" ? "Euskera" : currentLanguage === "es" ? "Español" : "English"}
              className="me-2"
              style={{ width: "80px", height: "70px" }}
            />
          </button>
          <ul className="dropdown-menu" aria-labelledby="languageDropdown">
            <li>
              <a
                className="dropdown-item d-flex align-items-center justify-content-center"
                href="#"
                onClick={() => handleLanguageChange("eng")} 
              >
                <img
                  src={English}
                  alt="English"
                  className="me-2"
                  style={{ width: "80px", height: "70px" }}
                />
              </a>
            </li>
            <li>
              <a
                className="dropdown-item d-flex align-items-center justify-content-center"
                href="#"
                onClick={() => handleLanguageChange("es")} 
              >
                <img
                  src={Español}
                  alt="Español"
                  className="me-2"
                  style={{ width: "80px", height: "70px" }}
                />
              </a>
            </li>
            <li>
              <a
                className="dropdown-item d-flex align-items-center justify-content-center"
                href="#"
                onClick={() => handleLanguageChange("eus")} 
              >
                <img
                  src={Euskera}
                  alt="Euskera"
                  className="me-2"
                  style={{ width: "80px", height: "70px" }}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <header className="header bg-black text-white px-5 position-absolute w-100 d-grid align-items-center overflow-hidden z-1" style={{ height: "80px", gridTemplateColumns: "repeat(12, 1fr)" }}>
        <div className="nav-item d-flex align-items-center" style={{ gridColumn: "2 / span 2" }}>
          <img src={User} alt="User Icon" className="nav-image user-size h-auto m" onClick={() => setCurrentSection("login")} />
        </div>

        <div className="nav-item d-flex align-items-center justify-content-center" style={{ gridColumn: "6 / span 2" }}>
          <img
            src={Logo}
            alt="Logo"
            className="nav-image logo-size h-auto"
            style={{ zIndex: "999999" }}
            onClick={() => setCurrentSection("home")}
          />
        </div>

        <div className="nav-item d-flex align-items-center" style={{ gridColumn: "10 / span 3" }}>
          <form className="d-flex search-container" role="search">
            <input type="text" className="form-control search-input me-1 mt-3" placeholder="Buscar..." />
            <button type="submit" className="btn search-button">
              <img src={Lupa} alt="Search Icon" className="nav-image lupa-size h-auto" />
            </button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default Header;
