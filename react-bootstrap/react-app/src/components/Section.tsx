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
            <h1>Ongi etorri</h1>
            <p>Hasi nabigatzen</p>
            <button className="btn btn-danger">Ikusi</button>
          </div>
        </div>
      );
      
}
export default Section;
