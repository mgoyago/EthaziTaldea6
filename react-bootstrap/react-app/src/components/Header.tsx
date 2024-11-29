import './Header.css';
import Logo from '../assets/img/LogoBlanco.png';
import User from '../assets/img/user-removebg-preview.png';
import Lupa from '../assets/img/lupa-removebg-preview.png';

interface HeaderProps {
    setCurrentSection: (section: string) => void;
  }

function Header({ setCurrentSection }: HeaderProps) {
    return (
        <header className="header bg-black text-white px-5 position-absolute w-100 d-grid align-items-center overflow-hidden z-1" style={{ height: "80px", gridTemplateColumns: "repeat(12, 1fr)" }}>
  <div className="nav-item d-flex align-items-center" style={{ gridColumn: "2 / span 2" }}>
    <img 
      src={User} 
      alt="User Icon" 
      className="nav-image user-size h-auto"
    />
  </div>

  <div className="nav-item d-flex align-items-center justify-content-center" style={{ gridColumn: "6 / span 2" }}>
    <img 
      src={Logo} 
      alt="Logo" 
      className="nav-image logo-size h-auto"
      onClick={() => setCurrentSection("home")}
    />
  </div>

  <div className="nav-item d-flex align-items-center" style={{ gridColumn: "10 / span 3" }} >
    <form className="d-flex search-container" role="search">
      <input 
        type="text" 
        className="form-control search-input me-1 mt-3" 
        placeholder="Buscar..." 
      />
      <button type="submit" className="btn search-button">
        <img 
          src={Lupa} 
          alt="Search Icon" 
          className="nav-image lupa-size h-auto"
        />
      </button>
    </form>
  </div>
</header>

    );
}

export default Header;
