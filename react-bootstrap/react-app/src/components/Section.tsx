import './Section.css';

import Home from "./sections/Home";
import AboutUs from "./sections/AboutUs";
import SignIn from "./sections/SignIn";

interface SectionProps {
  currentSection: string;
  currentLanguage: string;
}

function Section({ currentSection,currentLanguage }: SectionProps) {
  if (currentSection === "home") {
    return (
      <Home currentLanguage={currentLanguage}/>
    );
  } else if (currentSection === "form") {
    return (
      <AboutUs currentLanguage={currentLanguage}/>
    );
  }else if(currentSection === "login"){
     return (
      <SignIn currentLanguage={currentLanguage}/>
    );
  }
}
export default Section;