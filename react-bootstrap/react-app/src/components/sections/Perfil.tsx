import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

type Language = 'es' | 'eus' | 'eng';

const Perfil: React.FC<{ currentLanguage: string, setLoged:  (section: string) => void;}> = ({ currentLanguage, setLoged }) => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const translations: Record<Language, { [key: string]: string }> = {
    es: {
      title: "EDITAR PERFIL",
      changePhoto: "Cambiar foto",
      usernameLabel: "Cambiar nombre",
      usernamePlaceholder: "Introduce tu nombre",
      passwordLabel: "Nueva contraseña",
      passwordPlaceholder: "Introduce tu contraseña",
      confirmPasswordLabel: "Confirmar contraseña",
      confirmPasswordPlaceholder: "Confirma tu nueva contraseña",
      saveChanges: "Guardar cambios",
      successMessage: "Perfil actualizado correctamente",
      errorMessage: "Las contraseñas no coinciden",
      logout: "Cerrar sesión",
    },
    eus: {
      title: "PROFILA EDITATU",
      changePhoto: "Argazkia aldatu",
      usernameLabel: "Aldatu izena",
      usernamePlaceholder: "Izena sartu",
      passwordLabel: "Pasahitza berria",
      passwordPlaceholder: "Sartu pasahitza",
      confirmPasswordLabel: "Pasahitza konfirmatu",
      confirmPasswordPlaceholder: "Konfirmatu pasahitza berria",
      saveChanges: "Aldaketak gorde",
      successMessage: "Profila ondo eguneratu da",
      errorMessage: "Pasahitzak ez dira berdinak",
      logout: "Saioa itxi",
    },
    eng: {
      title: "EDIT PROFILE",
      changePhoto: "Change photo",
      usernameLabel: "Change name",
      usernamePlaceholder: "Enter your name",
      passwordLabel: "New password",
      passwordPlaceholder: "Enter your password",
      confirmPasswordLabel: "Confirm password",
      confirmPasswordPlaceholder: "Confirm your new password",
      saveChanges: "Save changes",
      successMessage: "Profile updated successfully",
      errorMessage: "Passwords do not match",
      logout: "Logout",
    },
  };

  const language: Language = (['es', 'eus', 'eng'].includes(currentLanguage)
    ? currentLanguage
    : 'eng') as Language;

  const t = translations[language];

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    if (password && password !== confirmPassword) {
      setAlertMessage(t.errorMessage);
      setShowAlert(true);
      return;
    }

    if (!password) {
      setPassword('');
      setConfirmPassword('');
    }

    setAlertMessage(t.successMessage);
    setShowAlert(true);
  };

  const handleLogout = () => {
    axios.post('/api/logout', {}, {
      headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
      }
  })
  .then(() => {
      console.log("Logout exitoso");
      localStorage.removeItem('token');
      setLoged('ez');
      window.location.href = '/login';
  })
  .catch(error => console.error("Error en el logout:", error));
  };

  return (
    <div
      className="perfil-container bg-black text-white position-relative w-100 pt-5 pb-3 overflow-hidden d-flex justify-content-center align-items-center"
      style={{ height: "92vh" }}
    >
      <div className="perfil-content container-fluid col-12 col-lg-5 px-5">
        <h2 className="text-center mb-4">{t.title}</h2>

        <div className="row justify-content-center mb-4">
          <div className="col-auto text-center">
            <img
              src={profileImage || '/default-avatar.png'}
              alt={t.changePhoto}
              className="rounded-circle"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            <div className="mt-2">
              <label htmlFor="profileImage" className="btn bg-danger w-100">
                {t.changePhoto}
              </label>
              <input
                id="profileImage"
                type="file"
                style={{ display: 'none' }}
                onChange={handleImageChange}
              />
            </div>
          </div>
        </div>

        {showAlert && (
          <div className={`alert ${alertMessage === t.successMessage ? 'alert-success' : 'alert-danger'}`}>
            {alertMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              {t.usernameLabel}
            </label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder={t.usernamePlaceholder}
              style={{
                backgroundColor: "black",
                border: "none",
                color: "white",
                borderBottom: "1px solid white",
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              {t.passwordLabel}
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t.passwordPlaceholder}
              style={{
                backgroundColor: "black",
                border: "none",
                color: "white",
                borderBottom: "1px solid white",
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              {t.confirmPasswordLabel}
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder={t.confirmPasswordPlaceholder}
              style={{
                backgroundColor: "black",
                border: "none",
                color: "white",
                borderBottom: "1px solid white",
              }}
            />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-danger w-100">
              {t.saveChanges}
            </button>
          </div>
        </form>
      </div>

      <button
        onClick={handleLogout}
        className="btn btn-danger position-absolute"
        style={{
          bottom: "20px",
          right: "20px",
        }}
      >
        {t.logout}
      </button>
    </div>
  );
};

export default Perfil;
