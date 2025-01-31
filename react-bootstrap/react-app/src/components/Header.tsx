import './Header.css';
import { useState} from 'react';
import Logo from '../assets/img/LogoBlanco.png';
import User from '../assets/img/user-removebg-preview.png';
import Lupa from '../assets/img/lupa-removebg-preview.png';
import English from '../assets/img/languages/eng-removebg-preview (1).png';
import Español from '../assets/img/languages/españa-removebg-preview.png';
import Euskera from '../assets/img/languages/eusk-removebg-preview.png';
import axios from 'axios';

interface HeaderProps {
  setCurrentSection: (section: string) => void;
  setCurrentLanguage: (language: string) => void;
  loged: string;
}

function Header({ setCurrentSection, setCurrentLanguage, loged }: HeaderProps) {
  const [currentLanguage, setCurrentLang] = useState<'eng' | 'es' | 'eus'>('eus'); 
  const [userScore, setuserScore] = useState<number>(0);

  const images: { [key in 'eng' | 'es' | 'eus']: string } = {
    eng: English,
    es: Español,
    eus: Euskera,
  };


  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = event.target.value as 'eng' | 'es' | 'eus'; 
    setCurrentLang(selectedLang);
    setCurrentLanguage(selectedLang);
  };

  
  
    const fetchUserPoints = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/datuak', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('Respuesta del servidor:', response.data); 
        setuserScore(response.data.points); 
      } catch (err) {
        console.error('Error al recoger datos', err);
        alert('Error al recoger datos');
      }
    };
  
  
  return (
    <div>
      <header
        className="header bg-black text-white px-5 position-absolute w-100 d-grid align-items-center overflow-hidden z-1 border-bottom"
        style={{ height: '80px', gridTemplateColumns: 'repeat(12, 1fr)', borderColor: 'white' }}
      >  {loged === "bai" ? (
        <>
          <div className="nav-item d-flex align-items-center user-all" style={{ gridColumn: '2 / span 2'}}>
            <img 
              src={User} 
              alt="User Icon" 
              className="nav-image user-size h-auto" 
              onClick={() => setCurrentSection("perfil")} 
            />
            
            <div 
              className="user-info ms-3 bg-danger" 
              onClick={() => fetchUserPoints()}
            >
              <span className="score-label">PT: {userScore}</span>
            </div>
          </div>
        </>
      ) : (
        <div className="nav-item d-flex align-items-center user-all" style={{ gridColumn: '2 / span 2'}}>
          <img 
            src={User} 
            alt="User Icon" 
            className="nav-image user-size h-auto" 
            onClick={() => setCurrentSection("signIn")} 
          />
          
          <div 
            className="user-info ms-3 bg-danger" 
            onClick={() => fetchUserPoints()}
          >
            <span className="score-label">PT: {userScore}</span>
          </div>
        </div>
      )}
        <div
          className="nav-item d-flex align-items-center justify-content-center"
          style={{ gridColumn: '6 / span 2' }}
        >
          <img
            src={Logo}
            alt="Logo"
            className="nav-image logo-size h-auto"
            style={{ zIndex: '999999' }}
            onClick={() => setCurrentSection('home')}
          />
        </div>

        <div className="nav-item d-flex align-items-center" style={{ gridColumn: '9 / span 2' }}>
          <form className="d-flex search-container" role="search">
            <input
              type="text"
              className="form-control search-input mt-3 z-1"
              placeholder="..."
            />
            <button type="submit" className="btn search-button">
              <img src={Lupa} alt="Search Icon" className="nav-image lupa-size z-0" />
            </button>
          </form>
        </div>

        <div className="nav-item language-select-container d-flex align-items-center justify-content-end position-relative w-100" style={{ gridColumn: '12 / span 1' }}>
            <select className="form-select bg-dark text-white border-0 language-select border-rounded" value={currentLanguage} onChange={handleLanguageChange}>
              <option value="eng" className="language-option">
                ENG
              </option>
              <option value="es" className="language-option">
                ESP
              </option>
              <option value="eus" className="language-option">
                EUS
              </option>
            </select>
            <div className="language-images position-absolute end-1 top-50">
              <img src={images[currentLanguage]} alt="Current Language" className="language-flag" />
            </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
