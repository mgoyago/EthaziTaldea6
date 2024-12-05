import { useState } from "react";

import Menua from "./components/Menua";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";


function App(){
  const [currentSection, setCurrentSection] = useState("home");
  const [currentLanguage, setCurrentLanguage] = useState("eus");
  
  return (
    <>
      <Header setCurrentSection={setCurrentSection} setCurrentLanguage={setCurrentLanguage}/>
      <Menua setCurrentSection={setCurrentSection} currentLanguage={currentLanguage}/>
      <Section currentSection={currentSection} currentLanguage={currentLanguage}/>
      <Footer/>
    </>
  );
}

export default App;