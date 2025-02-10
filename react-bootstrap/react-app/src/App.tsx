import { useState } from "react";

import Menua from "./components/Menua";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";

function App(){
  const [currentSection, setCurrentSection] = useState("home");
  const [currentLanguage, setCurrentLanguage] = useState("eus");
  const[currentRol, setCurrentRol] =useState("bezeroa");
  const[loged, setLoged] = useState("ez");
  const [userScore, setuserScore] = useState<number>(0);
  
  return (
    <>
      <Header setCurrentSection={setCurrentSection} setCurrentLanguage={setCurrentLanguage} loged={loged} userScore={userScore}/>
      <Menua setCurrentSection={setCurrentSection} currentLanguage={currentLanguage} currentRol={currentRol} loged={loged}/>
      <Section currentSection={currentSection} currentLanguage={currentLanguage} setCurrentSection={setCurrentSection} currentRol={currentRol} setCurrentRol={setCurrentRol} setLoged={setLoged} setuserScore={setuserScore} loged={loged} userScore={userScore}/>
      <Footer currentLanguage={currentLanguage}/>
    </>
  );
}

export default App;