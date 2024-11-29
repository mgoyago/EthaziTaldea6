import './Footer.css';
import FooterVideo from '../assets/video/FooterOriginal.mp4';  
import FacebookLogo from '../assets/img/facebook-removebg-preview.png';  
import TwitterLogo from '../assets/img/Twiter.png';    
import InstagramLogo from '../assets/img/instagram-removebg-preview.png'; 

export default function Footer() {
  return (
    <div className='overflow-hidden'>
      <footer className="footer-video-container border-top">
        <video
          src={FooterVideo}
          className="footer-video"
          autoPlay
          loop
          muted
        />
      </footer>

      <footer className="footer-info bg-black text-white py-5 border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <h3>GURI BURUZ</h3>
              <p>
                Gu, eSports munduari buruzko informazioa eskaintzen duen webgune bat gara. Gure helburua, bideo-jokoen lehiaketa eta txapelketa garrantzitsuen inguruko azken berriak eta gertakarien informazioa eskaintzea da.  
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <h3>LOTURAK</h3>
              <ul className="list-unstyled">
                <li><a href="/home" className="text-white">Hasiera</a></li>
                <li><a href="/events" className="text-white">Ekitaldiak</a></li>
                <li><a href="/news" className="text-white">Albisteak</a></li>
                <li><a href="/contact" className="text-white">Kontaktua</a></li>
              </ul>
            </div>

            <div className="col-md-4 mb-4">
              <h3>SARE SOZIALAK</h3>
              <div className="d-flex justify-content-center">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-3">
                  <img src={FacebookLogo} alt="Facebook" className="social-logo" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-3">
                  <img src={TwitterLogo} alt="Twitter" className="social-logo" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-3">
                  <img src={InstagramLogo} alt="Instagram" className="social-logo" />
                </a>
              </div>
            </div>

            <div className="text-center mt-3">
              <small>&copy; 2024 eSports Info. Eskubide guztiak erreserbatuta.</small>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}
