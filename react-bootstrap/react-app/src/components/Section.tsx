import Videobg from "../assets/video/videoplayback (1).mp4";
import './Section.css';

function Section() {
    return (
        <div className="video-container">
          <video autoPlay loop muted playsInline className="background-video">
            <source src={Videobg} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="content">
            <h1>Bienvenido</h1>
            <p>Este es un video de fondo.</p>
          </div>
        </div>
      );
      
}
export default Section;
