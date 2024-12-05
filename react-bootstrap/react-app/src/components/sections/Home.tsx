import Videobg from "../../assets/video/videoplayback (1).mp4";
//@ts-ignore
import translations from "../../assets/translate/translations";

interface HomeProps {
    currentLanguage: string;
}

function Home({currentLanguage}:HomeProps){
    const language = translations[currentLanguage];
    return(
        <div className="video-container bg-black overflow-hidden">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={Videobg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          <h1>{language.home[0]}</h1>
          <p>{language.home[1]}</p>
          <button className="btn btn-danger w-auto">{language.home[2]}</button>
        </div>
      </div>
    );
}
export default Home;