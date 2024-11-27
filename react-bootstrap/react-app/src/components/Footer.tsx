import './Footer.css';
import FooterVideo from '../assets/video/FooterOriginal.mp4';  // Asegúrate de tener el video en esa ruta
import FacebookLogo from '../assets/img/facebook-removebg-preview.png';  // Ruta del logo de Facebook
import TwitterLogo from '../assets/img/twitter-removebg-preview.png';    // Ruta del logo de Twitter
import InstagramLogo from '../assets/img/instagram-removebg-preview.png'; // Ruta del logo de Instagram

export default function Footer() {
  return (
    <div>


    <footer className="footer-video-container border-top">
        <video
          src={FooterVideo}
          alt="Logos"
          className="footer-video"
          autoPlay
          loop
          muted
        />
      </footer>



      <footer className="footer-info bg-black text-white py-5 border-top">
  <div className="container">
    <div className="row">
      {/* Sección de información general */}
      <div className="col-md-4 mb-4">
        <h5>Guri Buruz</h5>
        <p>
          Gu, eSports munduari buruzko informazioa eskaintzen duen webgune bat gara. Gure helburua, bideo-jokoen lehiaketa eta txapelketa garrantzitsuen inguruko azken berriak eta gertakarien informazioa eskaintzea da. Erabiltzaileek gure webgunean, esportseko ekitaldiak eta lehiaketak denbora errealean jarraitzeko aukera izango dute, baita azken emaitzak, taldeak eta jokalarien berri ere. Gure atarian, eSports zaleek lehiaketa bakoitzaren xehetasunak, hurrengo ekitaldien datak eta garrantzitsuenak diren albisteak aurkituko dituzte. Beti eguneratuta, zehatz-mehatz eta erabiltzailearen beharretara egokituta.
        </p>
      </div>

      {/* Sección de enlaces útiles */}
      <div className="col-md-4 mb-4">
        <h5>Loturak</h5>
        <ul className="list-unstyled">
          <li><a href="/home" className="text-white">Hasiera</a></li>
          <li><a href="/events" className="text-white">Ekitaldiak</a></li>
          <li><a href="/news" className="text-white">Albisteak</a></li>
          <li><a href="/contact" className="text-white">Kontaktua</a></li>
        </ul>
      </div>

      {/* Sección de redes sociales */}
      <div className="col-md-4 mb-4">
        <h5>Jarraitu gaitzazu</h5>
        <div className="d-flex justify-content-start">
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
    </div>
  </div>
</footer>

 
 

      
    
    </div>
  );
}
