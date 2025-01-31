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
  
  return (
    <>
      <Header setCurrentSection={setCurrentSection} setCurrentLanguage={setCurrentLanguage} loged={loged}/>
      <Menua setCurrentSection={setCurrentSection} currentLanguage={currentLanguage} currentRol={currentRol}/>
      <Section currentSection={currentSection} currentLanguage={currentLanguage} setCurrentSection={setCurrentSection} setCurrentRol={setCurrentRol} setLoged={setLoged} loged/>
      <Footer currentLanguage={currentLanguage}/>
    </>
  );
}

export default App;