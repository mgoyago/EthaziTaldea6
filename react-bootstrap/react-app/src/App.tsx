import { useState } from "react";

import Menua from "./components/Menua";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";


function App(){
  const [currentSection, setCurrentSection] = useState("home");
  return (
    <>
      <Header setCurrentSection={setCurrentSection}/>
      <Menua setCurrentSection={setCurrentSection}/>
      <Section currentSection={currentSection}/>
      <Footer/>
    </>
  );
}

export default App;