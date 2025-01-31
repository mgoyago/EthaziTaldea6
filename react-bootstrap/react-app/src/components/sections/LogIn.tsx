import { useState } from "react";
//@ts-ignore
import translations from "../../assets/translate/translations";
//@ts-ignore
import herrialdeak from "../../data/herrialdeak";
import axios from "axios";

interface LogInProps {
  currentLanguage: string;
}

function LogIn({ currentLanguage }: LogInProps) {
  const language = translations[currentLanguage];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChangeCountry = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    setSuccess(false);

    if (!selectedCountry) {
      setError("Por favor, selecciona un país.");
      return;
    }

    try {
      const response = await axios.post("/api/register", {
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
        country: selectedCountry,
      });

      console.log("Usuario registrado:", response.data);
      setSuccess(true);

      setName("");
      setEmail("");
      setPassword("");
      setPasswordConfirmation("");
      setSelectedCountry("");
    } catch (err: any) {
      if (err.response && err.response.data) {
        setError(err.response.data.message || "Error al registrarse.");
      } else {
        setError("Error de conexión. Inténtalo más tarde.");
      }
    }
  };

  return (
    <div
      className="login-container bg-black text-white position-relative w-100 pt-5 pb-3 overflow-hidden d-flex justify-content-center align-content-center"
      style={{ height: "93vh" }}
    >
      <div className="login-content container-fluid col-12 col-lg-5 px-5">
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 className="text-center mb-4">{language.logIn[0]}</h1>
        <p className="text-center mb-4">{language.logIn[1]}</p>

        <form className="login-form" onSubmit={handleRegister}>
          {error && <div className="alert alert-danger">{error}</div>}
          {success && (
            <div className="alert alert-success">
              ¡Registro exitoso! Ahora puedes iniciar sesión.
            </div>
          )}

          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              {language.logIn[2]}
            </label>
            <input
              type="text"
              id="name"
              className="form-control input-pertsonalizatua"
              required
              style={{ backgroundColor: "black", border: "none", color: "white" }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <hr style={{ border: "1px solid white" }} />
          </div>

          <div className="mb-3">
            <label htmlFor="herri" className="form-label">
              {language.logIn[3]}
            </label>
            <br />
            <select
              id="herri"
              value={selectedCountry}
              onChange={handleChangeCountry}
            >
              <option value="">{language.logIn[4]}</option>
              {herrialdeak.map((country: string, index: string) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <hr style={{ border: "1px solid white" }} />
          </div>

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

          <div className="mb-3">
            <label htmlFor="password_confirmation" className="form-label">
              {language.signIn[3]}
            </label>
            <input
              type="password"
              id="password_confirmation"
              className="form-control input-pertsonalizatua"
              required
              style={{ backgroundColor: "black", border: "none", color: "white" }}
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <hr style={{ border: "1px solid white" }} />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-danger w-100">
              {language.signIn[4]}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
