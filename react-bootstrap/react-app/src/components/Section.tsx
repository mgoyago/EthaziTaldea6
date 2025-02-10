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
import Liga from './sections/Liga';
import Partida from './sections/Partida';
import Denda from './sections/Denda';

interface SectionProps {
  currentSection: string;
  currentLanguage: string;
  loged: string;
  currentRol: string;
  userScore: string;
  setCurrentSection: (section: string) => void;
  setCurrentRol: (section: string) => void;
  setuserScore: (section: number) => void;
  setLoged: (section: string) => void;
}

function Section({ currentSection, currentLanguage, setCurrentSection, setCurrentRol, setLoged, setuserScore, loged, currentRol, userScore}: SectionProps) {
  const [showPopupHome, setShowPopupHome] = useState(false);
  const [animatePopupHome, setAnimatePopupHome] = useState(false);
  const [showPopupDenda, setShowPopupDenda] = useState(false);
  const [animatePopupDenda, setAnimatePopupDenda] = useState(false);
  const [leagueId, setLeagueId] = useState('');
  const [matchId, setMatchId] = useState('');

  useEffect(() => {
    if (currentSection === "home" && loged=== "ez") {
      const timer = setTimeout(() => {
        setShowPopupHome(true);
        setTimeout(() => setAnimatePopupHome(true), 100);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [currentSection]);

  useEffect(() => {
    if (currentSection === "Denda" && loged=== "ez") {
      const timer = setTimeout(() => {
        setShowPopupDenda(true);
        setTimeout(() => setAnimatePopupDenda(true), 100);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [currentSection]);

  useEffect(() => {
    if (!showPopupHome) {
      setAnimatePopupHome(false);
    }
  }, [showPopupHome]);

  useEffect(() => {
    if (!showPopupDenda) {
      setAnimatePopupDenda(false);
    }
  }, [showPopupDenda]);

  const renderPopupHome = () => (
    <div
      className={`position-absolute text-white rounded shadow-lg`}
      style={{
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%) ${animatePopupHome ? 'scale(1.2)' : 'scale(1)'}`,
        width: "400px",
        height: "300px",
        padding: "1.5rem",
        backgroundColor: "#dc3545",
        border: "4px solid black",
        boxShadow: "8px 8px 0 black",
        zIndex: 10,
        transition: "transform 0.3s ease-in-out",
        animation: animatePopupHome ? 'pulsate 1s infinite' : 'none',
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
          onClick={() => setShowPopupHome(false)}
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
          setShowPopupHome(false);
        }}
      >
        {currentLanguage === "es"
          ? "Descubre más."
          : currentLanguage === "eus"
            ? "Gehiago ezagutu."
            : currentLanguage === "eng"
              ? "Discovered more."
              : "Idioma no soportado."}
      </button>
    </div>
  );

  
  const renderPopupDenda = () => (
    
    <div
      className={`position-absolute text-white rounded shadow-lg`}
      style={{
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%) ${animatePopupDenda ? 'scale(1.2)' : 'scale(1)'}`,
        width: "400px",
        height: "300px",
        padding: "1.5rem",
        backgroundColor: "#28a745",
        border: "4px solid black",
        boxShadow: "8px 8px 0 black",
        zIndex: 10,
        
        animation: animatePopupDenda ? 'pulsate 1s infinite' : 'none',
      }}
    >
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0" style={{ fontWeight: "bold" }}>
          {currentLanguage === "es"
            ? "¡Oferta Especial!"
            : currentLanguage === "eus"
              ? "¡Eskaintza Berezia!"
              : currentLanguage === "eng"
                ? "Special Offer!"
                : "Idioma no soportado"}
        </h5>
        <button
          className="btn-close btn-close-white"
          aria-label="Close"
          onClick={() => setShowPopupDenda(false)}
        ></button>
      </div>
      <p style={{ fontSize: "1.2rem", lineHeight: "1.5" }}>
        {currentLanguage === "es"
          ? "Aprovecha nuestras ofertas exclusivas en la tienda."
          : currentLanguage === "eus"
            ? "Probetsatu gure eskaintza esklusiboak dendan."
            : currentLanguage === "eng"
              ? "Take advantage of our exclusive offers in the store."
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
          setShowPopupDenda(false);
        }}
      >
        {currentLanguage === "es"
          ? "Descubre más."
          : currentLanguage === "eus"
            ? "Gehiago ezagutu."
            : currentLanguage === "eng"
              ? "Discovered more."
              : "Idioma no soportado."}
      </button>
    </div>
  );

  if (currentSection === "home" || currentSection === "Denda") {
    return (
      <div className="position-relative" style={{ height: "auto", width: "100%", overflowX: "hidden", overflowY: "hidden" }}>
        {currentSection === "home" && <Home currentLanguage={currentLanguage} setCurrentSection={setCurrentSection} />}
        {currentSection === "Denda" && <Denda currentLanguage={currentLanguage} userScore={userScore} setuserScore={setuserScore}/>}
        {showPopupHome && renderPopupHome()}
        {showPopupDenda && renderPopupDenda()}
      </div>
    );
  } else if (currentSection === "form") {
    return (
      <AboutUs currentLanguage={currentLanguage} />
    );
  } else if (currentSection === "signIn") {
    return (
      <SignIn currentLanguage={currentLanguage} setCurrentSection={setCurrentSection} setCurrentRol={setCurrentRol} setLoged={setLoged} setuserScore={setuserScore} />
    );
  } else if (currentSection === "login") {
    return (
      <LogIn currentLanguage={currentLanguage} />
    );
  } else if (currentSection === "mapa") {
    return (
      <Mapa currentLanguage={currentLanguage} setCurrentSection={setCurrentSection} currentRol={currentRol} setLoged={setLoged}  /> 
    );
  }
  else if (currentSection === "Trivial") {
    return <Trivia loged={loged} setCurrentSection={setCurrentSection} setuserScore={setuserScore} currentRol={currentRol} currentLanguage={currentLanguage}/>;
  }
  else if (currentSection === "news") {
    return <News currentLanguage={currentLanguage} />;
  }
  else if (currentSection === "jokoak") {
    return <Jokoak currentLanguage={currentLanguage} setCurrentSection={setCurrentSection} setLeagueId={setLeagueId} />;
  }
  else if (currentSection === "torneoak") {
    return <Torneoak currentLanguage={currentLanguage} setCurrentSection={setCurrentSection} setLeagueId={setLeagueId} />;
  } else if (currentSection === "admin") {
    return <Panela />;
  } else if (currentSection === "perfil") {
    return <Profil currentLanguage={currentLanguage} setLoged={setLoged} setCurrentSection={setCurrentSection} />;
  } else if (currentSection === "liga") {
    return <Liga leagueId={leagueId} setMatchId={setMatchId} setCurrentSection={setCurrentSection} />;
  } else if (currentSection === "partida") {
    return <Partida matchId={matchId} />;
  }
  }
  
  export default Section;
  
