import './Section.css';

import Home from "./sections/Home";
import AboutUs from "./sections/AboutUs";
import SignIn from "./sections/SignIn";
import LogIn from "./sections/LogIn";

interface SectionProps {
  currentSection: string;
  currentLanguage: string;
  setCurrentSection: (section: string) => void;
}

function Section({ currentSection,currentLanguage,setCurrentSection }: SectionProps) {
  if (currentSection === "home") {
    return (
      <Home currentLanguage={currentLanguage}/>
    );
  } else if (currentSection === "form") {
    return (
      <AboutUs currentLanguage={currentLanguage}/>
    );
  }else if(currentSection === "signIn"){
     return (
      <SignIn currentLanguage={currentLanguage} setCurrentSection={setCurrentSection}/>
    );
  }else if(currentSection === "login"){
    return(
    <LogIn currentLanguage={currentLanguage}/>
  );
  }
}
export default Section;