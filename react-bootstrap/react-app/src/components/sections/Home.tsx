//@ts-ignore
import translations from "../../assets/translate/translations";

interface HomeProps {
    currentLanguage: string;
    setCurrentSection: (section: string) => void;
}

function Home({currentLanguage,setCurrentSection}:HomeProps){
    const language = translations[currentLanguage];
    return(
        <div className="video-container bg-black overflow-hidden">
        <div className="content">
          <h1>{language.home[0]}</h1>
          <p>{language.home[1]}</p>
          <button id="botoia" className="btn btn-danger w-auto" onClick={() =>setCurrentSection("mapa")}>{language.home[2]}</button>
        </div>
      </div>
    );
}
export default Home;