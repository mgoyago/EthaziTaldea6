import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import sinFoto from '../../assets/img/sinfoto.png';

interface Player {
  id: number;
  name: string;
  role: string;
  image_url: string | null;
  age: number | null;
  first_name: string;
  last_name: string;
  nationality: string;
}

interface Team {
  id: number;
  name: string;
  acronym: string;
  image_url: string;
  players: Player[];
}

interface MatchData {
  opponents: Team[];
}

interface PartidaProps {
  matchId: number;
}

function Partida({ matchId }: PartidaProps) {
  const [matchData, setMatchData] = useState<MatchData | null>(null);

  useEffect(() => {
    axios
      .get(`/api/matches/${matchId}`)
      .then((response) => {
        setMatchData(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los torneos:", error);
      });
  }, [matchId]);

  if (!matchData) {
    return <div>Cargando...</div>;
  }

  const { opponents } = matchData;
  const team1 = opponents[0];
  const team2 = opponents[1];

  return (
    <div className="container-fluid bg-black text-white position-relative overflow-hidden pb-4">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="row mb-4">
        <div className="col align-items-center text-center d-flex justify-content-center">
          <div style={{ backgroundColor: "white", padding: "10px", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", display: "inline-block" }} className="me-5">
            <img src={team1.image_url} alt={team1.name} className="img-fluid" width="100"/>
          </div>
          <h2>{team1.name} ({team1.acronym})</h2>
        </div>
      </div>
      <div className="row mb-4 justify-content-center">
        {team1.players.map((player) => (
          <div key={player.id} className="col-md-2">
            <div className="card bg-dark text-white text-center">
              <img 
                src={player.image_url || sinFoto} 
                alt={player.name} 
                className="card-img-top" 
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{player.name}</h5>
                <p className="card-text">
                  <strong>Rol:</strong> {player.role}<br/>
                  <strong>Nombre:</strong> {player.first_name} {player.last_name}<br/>
                  <strong>Nacionalidad:</strong> {player.nationality}<br/>
                  {player.age && <><strong>Edad:</strong> {player.age}<br/></>}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row text-center mb-4">
        <div className="col">
          <h2>Resultado del Partido</h2>
          <p>{/* Aquí se debería mostrar el resultado del partido */}</p>
          <div>
            <div style={{ backgroundColor: "white", padding: "10px", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", display: "inline-block" }}>
              <img src={team1.image_url} alt={team1.name} width="50" className="img-fluid"/>
            </div>
            <span> VS </span>
            <div style={{ backgroundColor: "white", padding: "10px", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", display: "inline-block" }}>
              <img src={team2.image_url} alt={team2.name} width="50" className="img-fluid"/>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col align-items-center text-center d-flex justify-content-center">
          <div style={{ backgroundColor: "white", padding: "10px", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", display: "inline-block" }} className="me-5">
            <img src={team2.image_url} alt={team2.name} className="img-fluid" width="100"/>
          </div>
          <h2>{team2.name} ({team2.acronym})</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        {team2.players.map((player) => (
          <div key={player.id} className="col-md-2">
            <div className="card bg-dark text-white text-center">
              <img 
                src={player.image_url || sinFoto} 
                alt={player.name} 
                className="card-img-top" 
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{player.name}</h5>
                <p className="card-text">
                  <strong>Rol:</strong> {player.role}<br/>
                  <strong>Nombre:</strong> {player.first_name} {player.last_name}<br/>
                  <strong>Nacionalidad:</strong> {player.nationality}<br/>
                  {player.age && <><strong>Edad:</strong> {player.age}<br/></>}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partida;
