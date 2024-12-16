import './Footer.css';
import FooterVideo from '../assets/video/FooterOriginal.mp4';
import FacebookLogo from '../assets/img/facebok.png';
import TwitterLogo from '../assets/img/TwiterBerria.png';
import InstagramLogo from '../assets/img/insta.png';
import Logoimg from '../assets/img/LogoBlanco.png';

export default function Footer() {
  return (
    <div className="overflow-hidden">
      <footer className="footer-video-container border-top border-bottom">
        <video
          src={FooterVideo}
          className="footer-video"
          autoPlay
          loop
          muted
        />
      </footer>

      <footer className="footer text-white py-1">
        <div className="container">
          <div className="row text-center align-items-center">
            <div className="sareak col-6 col-md-2 mb-2 d-flex flex-column justify-content-center align-items-center">
              <div className=''>
              <h6>SARE SOZIALAK</h6>
              <a href="#"><img src={FacebookLogo} alt="Facebook" className="social-logo facebook" /></a>
              <a href="#"><img src={TwitterLogo} alt="Twitter" className="social-logo twitter mx-1" /></a>
              <a href="#"><img src={InstagramLogo} alt="Instagram" className="social-logo insta" /></a>
              </div>
            </div>
            <div className="col-6 col-md-2 mt-3 d-flex flex-column justify-content-center align-items-center">
              <h6>ESTEKAK</h6>
              <ul className="list-unstyled ">
                <li><a href="#" className="text-white text-decoration-none link-danger">Hasiera</a></li>
                <li><a href="#" className="text-white text-decoration-none link-danger">Torneoak</a></li>
                <li><a href="#" className="text-white text-decoration-none link-danger">Jokoak</a></li>
              </ul>
            </div>

            <div className="col-12 col-md-4 mt-3 d-flex justify-content-center">
              <img src={Logoimg} alt="Logo" className="logo-img" />
            </div>

            <div className="col-6 col-md-2 mt-3 d-flex flex-column justify-content-center align-items-center">
              <h6>INFORMAZIO LEGALA</h6>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none link-danger">Términos y Condiciones</a></li>
                <li><a href="#" className="text-white text-decoration-none link-danger">Política de Privacidad</a></li>
                <li><a href="#" className="text-white text-decoration-none link-danger">Política de Cookies</a></li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mt-3 mb-2 d-flex flex-column justify-content-center align-items-center">
              <h6>KONTAKTUA</h6>
              <p className="">Email: <a href="mailto:veex@veex.com" className="text-white text-decoration-none link-danger">veex@veex.com</a></p>
              <p>Tel: <a href="tel:+123456789" className="text-white text-decoration-none link-danger">999 999 999</a></p>
            </div>
          </div>
          <hr className="border-secondary" />
          <div className="text-center">
            <p>&copy; VeEX</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

