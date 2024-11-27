
import './Footer.css';
import FooterImg from '../assets/img/Footer.png';

export default function Footer() {
  return (
    <footer className="footer bg-dark d-flex align-items-center justify-content-center">
      <img
        src={FooterImg} 
        alt="Logos"
        className="footer-image"
      />
    </footer>
  )
}
