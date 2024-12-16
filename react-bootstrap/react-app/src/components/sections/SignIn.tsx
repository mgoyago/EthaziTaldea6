//@ts-ignore
import translations from "../../assets/translate/translations";

interface SignInProps {
    currentLanguage: string;
    setCurrentSection: (section: string) => void;
}

function SignIn({currentLanguage, setCurrentSection}:SignInProps){
    const language = translations[currentLanguage];
    return(
        <div className="signIn-container bg-black text-white position-relative w-100 pt-5 pb-3 overflow-hidden d-flex justify-content-center align-content-center"style={{height:"93vh"}}>
        <div className="signIn-content container-fluid col-12 col-lg-5 px-5">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1 className="text-center mb-4">{language.signIn[0]}</h1>
          <p className="text-center mb-4">{language.signIn[1]}</p>

          <form className="signIn-form">
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

          <div className="text-center mt-4">
            <p>{language.signIn[5]}<a href="#" className="text-decoration-none text-danger" onClick={() => setCurrentSection("login")}>{language.signIn[6]}</a></p>
          </div>
        </div>
      </div>
    );
}
export default SignIn;