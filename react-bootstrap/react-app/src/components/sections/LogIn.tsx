import { useState } from 'react';
//@ts-ignore
import translations from "../../assets/translate/translations";
//@ts-ignore
import herrialdeak from "../../data/herrialdeak";


interface LogInProps {
    currentLanguage: string;
}

function LogIn({currentLanguage}:LogInProps){
    const language = translations[currentLanguage];
    const [selectedCountry, setSelectedCountry] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedCountry(event.target.value);
  };
    return(
        <div className="login-container bg-black text-white position-relative w-100 pt-5 pb-3 overflow-hidden d-flex justify-content-center align-content-center"style={{height:"93vh"}}>
          <div className="login-content container-fluid col-12 col-lg-5 px-5">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 className="text-center mb-4">{language.logIn[0]}</h1>
            <p className="text-center mb-4">{language.logIn[1]}</p>

            <form className="login-form">

              <div className="mb-3">
                <label htmlFor="name" className="form-label">{language.logIn[2]}</label>
                <input type="text" id="name" className="form-control input-pertsonalizatua" required style={{backgroundColor: "black", border:"none", color:"white"}}/>
                <hr style={{border: "1px solid white"}}/>
              </div>

              <div className="mb-3">
                <label htmlFor="herri" className="form-label">{language.logIn[3]}</label>
                <br></br>
                <select 
                  id="herri" 
                  value={selectedCountry} 
                  onChange={handleChange}
                >
                  <option value="">{language.logIn[4]}</option>
                  {herrialdeak.map((country: string, index: string) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                <hr style={{border: "1px solid white"}}/>
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">{language.signIn[2]}</label>
                <input type="email" id="email" className="form-control input-pertsonalizatua" required style={{backgroundColor: "black", border:"none", color:"white"}}/>
                <hr style={{border: "1px solid white"}}/>
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">{language.signIn[3]}</label>
                <input type="password" id="password" className="form-control input-pertsonalizatua" required style={{backgroundColor: "black", border: "none", color:"white"}}/>
                <hr style={{border: "1px solid white"}}/>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-danger w-100">{language.signIn[4]}</button>
              </div>
            </form>
          </div>
        </div>
    );
}
export default LogIn;