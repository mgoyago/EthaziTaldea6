import './Section.css';
import { useState, useEffect } from "react";


import Home from "./sections/Home";
import AboutUs from "./sections/AboutUs";
import SignIn from "./sections/SignIn";
import LogIn from "./sections/LogIn";
import Mapa from "./sections/Mapa";
import News from "./sections/News";
import Trivia from "./sections/Trivia";
import Jokoak from './sections/Jokoak';
import Torneoak from './sections/Torneoak';
import Panela from './sections/AdministrazioPanela';
import Profil from './sections/Perfil';

interface SectionProps {
  currentSection: string;
  currentLanguage: string;
  setCurrentSection: (section: string) => void;
  setCurrentRol: (section: string) => void;
  setLoged: (section: string) => void;
}



function Section({ currentSection,currentLanguage,setCurrentSection, setCurrentRol, setLoged }: SectionProps) {
  const [showPopup, setShowPopup] = useState(false);
  const [animatePopup, setAnimatePopup] = useState(false);

  useEffect(() => {
    if (currentSection === "home") {
      const timer = setTimeout(() => {
        setShowPopup(true);
        setTimeout(() => setAnimatePopup(true), 100); 
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [currentSection]);

  useEffect(() => {
    if (!showPopup) {
      setAnimatePopup(false);
    }
  }, [showPopup]);

  if (currentSection === "home") {
    return (
      <div className="position-relative" style={{ height: "100vh", width: "100%", overflowX: "hidden", overflowY: "hidden" }}>
        <Home currentLanguage={currentLanguage} setCurrentSection={setCurrentSection} />

        {showPopup && (
          <div
            className={`position-absolute text-white rounded shadow-lg`}
            style={{
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) ${animatePopup ? 'scale(1.2)' : 'scale(1)'}`,
              width: "400px",
              height: "300px",
              padding: "1.5rem",
              backgroundColor: "#dc3545",
              border: "4px solid black",
              boxShadow: "8px 8px 0 black",
              zIndex: 10,
              transition: "transform 0.3s ease-in-out",
              animation: animatePopup ? 'pulsate 1s infinite' : 'none',
            }}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="mb-0" style={{ fontWeight: "bold" }}>
                    {currentLanguage === "es"
                      ? "¡Atento!"
                      : currentLanguage === "eus"
                      ? "¡Adi Egon!"
                      : currentLanguage === "eng"
                      ? "Pay Attention!"
                      : "Idioma no soportado"}
              </h5>

              <button
                className="btn-close btn-close-white"
                aria-label="Close"
                onClick={() => setShowPopup(false)}
              ></button>
            </div>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.5" }}>
            {currentLanguage === "es" 
                  ? "Aquí tienes información importante sobre nuestra página." 
                  : currentLanguage === "eus" 
                  ? "Hemen gure orrialdeari buruzko informazio garrantzitsua daukazu." 
                  : currentLanguage === "eng" 
                  ? "Here is important information about our page." 
                  : "Idioma no soportado."}


            </p>
            <button
              className="btn btn-dark w-100 fw-bold mt-3"
              style={{
                backgroundColor: "black",
                border: "2px solid white",
                color: "white",
              }}
              onClick={() => {
                setCurrentSection("signIn");
                setShowPopup(false);
              }}
            >
              {currentLanguage === "es" 
                  ? "Descubre mas ." 
                  : currentLanguage === "eus" 
                  ? "Gehiago ezagutu." 
                  : currentLanguage === "eng" 
                  ? "Discovered more." 
                  : "Idioma no soportado."}
            </button>
          </div>
        )}
      </div>
    );
    
  } else if (currentSection === "form") {
    return (
      <AboutUs currentLanguage={currentLanguage}/>
    );
  }else if(currentSection === "signIn"){
     return (
      <SignIn currentLanguage={currentLanguage} setCurrentSection={setCurrentSection} setCurrentRol={setCurrentRol} setLoged={setLoged}/>
    );
  }else if(currentSection === "login"){
    return(
    <LogIn currentLanguage={currentLanguage}/>
  );
  }else if(currentSection === "mapa"){
    return(
      <Mapa/>
    );
  }
  else if (currentSection === "Trivial") {
    return <Trivia/>;
  }
  else if (currentSection === "news") {
    return <News/>;
  }
  else if (currentSection === "jokoak") {
    return <Jokoak currentLanguage={currentLanguage} />;
  }
  else if (currentSection === "torneoak") {
    return <Torneoak currentLanguage={currentLanguage} />;
  }
  else if (currentSection === "admin") {
    return <Panela currentLanguage={currentLanguage} />;
  }
  else if (currentSection === "perfil") {
    return <Profil currentLanguage={currentLanguage} setLoged={setLoged} setCurrentSection={setCurrentSection}/>;
  }
  
}
export default Section;