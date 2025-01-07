//@ts-ignore
import translations from "../../assets/translate/translations";
import { useState } from "react";
import axios from "axios";

interface SignInProps {
  currentLanguage: string;
  setCurrentSection: (section: string) => void;
}

function SignIn({ currentLanguage, setCurrentSection }: SignInProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const language = translations[currentLanguage];

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", { email, password });
      const { token, user } = response.data;

      // Almacenar el token en localStorage o sesión
      localStorage.setItem("token", token);

      console.log("Usuario autenticado:", user);

      setCurrentSection("home");
    } catch (err: any) {
      // Manejar errores
      if (err.response && err.response.data) {
        setError(err.response.data.message || "Login failed");
      } else {
        setError("Error de conexión. Inténtalo más tarde.");
      }
    }
  };

  return (
    <div
      className="signIn-container bg-black text-white position-relative w-100 pt-5 pb-3 overflow-hidden d-flex justify-content-center align-content-center"
      style={{ height: "93vh" }}
    >
      <div className="signIn-content container-fluid col-12 col-lg-5 px-5">
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 className="text-center mb-4">{language.signIn[0]}</h1>
        <p className="text-center mb-4">{language.signIn[1]}</p>

        <form className="signIn-form" onSubmit={handleLogin}>
          {error && <div className="alert alert-danger">{error}</div>}

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              {language.signIn[2]}
            </label>
            <input
              type="email"
              id="email"
              className="form-control input-pertsonalizatua"
              required
              style={{ backgroundColor: "black", border: "none", color: "white" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <hr style={{ border: "1px solid white" }} />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              {language.signIn[3]}
            </label>
            <input
              type="password"
              id="password"
              className="form-control input-pertsonalizatua"
              required
              style={{ backgroundColor: "black", border: "none", color: "white" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <hr style={{ border: "1px solid white" }} />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-danger w-100">
              {language.signIn[4]}
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p>
            {language.signIn[5]}
            <a
              href="#"
              className="text-decoration-none text-danger"
              onClick={() => setCurrentSection("login")}
            >
              {language.signIn[6]}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
