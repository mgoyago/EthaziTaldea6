import React, { useState } from "react";

type Language = 'es' | 'eus' | 'eng';

type Erabiltzailea = {
  id: number;
  izena: string;
  aktiboa: boolean;
};

type AdministrazioPanelaProps = {
  admin: boolean;
  currentLanguage: string;
};

const AdministrazioPanela: React.FC<AdministrazioPanelaProps> = ({ admin, currentLanguage }) => {
  const [erabiltzaileak, setErabiltzaileak] = useState<Erabiltzailea[]>([
    { id: 1, izena: "Jon", aktiboa: true },
    { id: 2, izena: "Amaia", aktiboa: true },
    { id: 3, izena: "Iker", aktiboa: false },
  ]);

  const translations: Record<Language, { [key: string]: string }> = {
    es: {
      title: "Administración de usuarios",
      changeName: "Cambiar nombre",
      toggleStatus: "Cambiar estado",
      addUser: "Añadir usuario",
      deleteUser: "Eliminar usuario",
      noPermission: "No tienes permisos para ver el panel",
    },
    eus: {
      title: "Erabiltzaileen kudeaketa",
      changeName: "Izena aldatu",
      toggleStatus: "Egoera aldatu",
      addUser: "Erabiltzaile berria gehitu",
      deleteUser: "Ezabatu erabiltzailea",
      noPermission: "Ez duzu baimenik panela ikusteko",
    },
    eng: {
      title: "User Management",
      changeName: "Change name",
      toggleStatus: "Toggle status",
      addUser: "Add user",
      deleteUser: "Delete user",
      noPermission: "You do not have permission to view the panel",
    },
  };

  // Validar y asegurar que currentLanguage sea un valor válido
  const language: Language = (['es', 'eus', 'eng'].includes(currentLanguage)
    ? currentLanguage
    : 'eng') as Language;

  // Obtener las traducciones correspondientes
  const t = translations[language];

  const gehituErabiltzailea = (izena: string) => {
    const idBerria = erabiltzaileak.length + 1;
    setErabiltzaileak([...erabiltzaileak, { id: idBerria, izena, aktiboa: true }]);
  };

  const aldatuEgoera = (id: number) => {
    setErabiltzaileak(
      erabiltzaileak.map((erabiltzailea) =>
        erabiltzailea.id === id ? { ...erabiltzailea, aktiboa: !erabiltzailea.aktiboa } : erabiltzailea
      )
    );
  };

  const aldatuIzena = (id: number, izenBerria: string) => {
    setErabiltzaileak(
      erabiltzaileak.map((erabiltzailea) =>
        erabiltzailea.id === id ? { ...erabiltzailea, izena: izenBerria } : erabiltzailea
      )
    );
  };

  const ezabatuErabiltzailea = (id: number) => {
    if (window.confirm(`${t.deleteUser}: ${id}?`)) {
      setErabiltzaileak(erabiltzaileak.filter((erabiltzailea) => erabiltzailea.id !== id));
    }
  };

  if (!admin) {
    return <p>{t.noPermission}</p>;
  }

  return (
    <div className="container-fluid bg-black position-relative w-100 pb-3 px-3" style={{ minHeight: "90vh" }}>
      <div className="row justify-content-center h-100">
        <div className="col-md-10 h-100 d-flex flex-column">
          <div className="card border-0 shadow-lg bg-dark text-white mb-4 flex-grow-1">
            <div className="card-header">
              <h2>{t.title}</h2>
            </div>
            <div className="card-body overflow-auto">
              <table className="table table-bordered text-white">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Izena</th>
                    <th>Egoera</th>
                    <th>Ekintzak</th>
                  </tr>
                </thead>
                <tbody>
                  {erabiltzaileak.map(({ id, izena, aktiboa }) => (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{izena}</td>
                      <td>{aktiboa ? "Aktiboa" : "Ez aktiboa"}</td>
                      <td>
                        <button
                          className="btn btn-warning btn-sm me-2"
                          onClick={() =>
                            aldatuIzena(id, prompt(t.changeName, izena) || izena)
                          }
                        >
                          {t.changeName}
                        </button>
                        <button
                          className={`btn btn-${aktiboa ? "secondary" : "success"} btn-sm me-2`}
                          onClick={() => aldatuEgoera(id)}
                        >
                          {aktiboa ? "Egoera Ezeztatu" : "Egoera Aktibatu"}
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => ezabatuErabiltzailea(id)}
                        >
                          {t.deleteUser}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const admin = true;
  const currentLanguage = "eus";

  return (
    <div>
      <AdministrazioPanela admin={admin} currentLanguage={currentLanguage} />
    </div>
  );
};

export default App;
