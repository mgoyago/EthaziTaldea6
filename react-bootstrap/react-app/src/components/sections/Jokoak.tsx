import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import lol from '../../assets/img/jokoak/lol.png';
import dota from '../../assets/img/jokoak/dota.png';
import cs from '../../assets/img/jokoak/csgo.png';
import valorant from '../../assets/img/jokoak/valorant.png';
import rocket from '../../assets/img/jokoak/rocket.png';
import fifa from '../../assets/img/jokoak/fifa.png';

interface JokoakProps {
  setCurrentSection: (section: string) => void;
  setLeagueId: (section: string) => void;
}

function Jokoak({setCurrentSection, setLeagueId}:JokoakProps) {
  const [gamesData, setGamesData] = useState([]);
  const [activeMenu, setActiveMenu] = useState("Select Game");
  const [loading, setLoading] = useState(false);
  const [gameTournaments, setGameTournaments] = useState({});

  const fetchTournaments = async (classId, gameName) => {
    if (gameTournaments[gameName]) {
      console.log("Datos ya cargados para el juego:", gameName);
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('/api/tournaments', {
        class_id: classId,
      });

      console.log("Torneos para", gameName, ":", response.data);

      setGameTournaments(prevState => ({
        ...prevState,
        [gameName]: response.data
      }));
    } catch (error) {
      console.error("Error fetching tournaments:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchGames = async () => {
      setGamesData([
        { name: 'League of Legends', image: lol, classId: '1'},
        { name: 'Dota 2', image: dota, classId: '4'},
        { name: 'CS:GO', image: cs, classId: '3'},
        { name: 'Valorant', image: valorant, classId: '26'},
        { name: 'Rocket League', image: rocket, classId: '22'},
        { name: 'EA Sports FC 25', image: fifa, classId: '25'},
      ]);
    };

    fetchGames();
  }, []);

  const handleGameClick = (game) => {
    setActiveMenu(game.name);
    fetchTournaments(game.classId, game.name);
  };

  function aldaketa(leagueId){
    setLeagueId(leagueId);
    setCurrentSection('liga');
  }

  return (
    <div className="container-fluid bg-black position-relative w-100 pb-3 px-3">
      <br></br>
      <br></br>
      <br></br>
      <div className="row justify-content-center mt-5">
        <div className="col-md-10">
          <ul className="list-unstyled">
            {gamesData.map((game, index) => (
              <li key={index} className="mb-4 pb-3">
                <div className="card border-0 shadow-lg bg-dark text-white mb-3">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between">
                      <img
                        src={game.image}
                        alt={game.name}
                        className="me-3"
                        style={{ height: '50px'}}
                      />
                      <h5 className="mb-0 flex-grow-1 fw-bold">{game.name}</h5>
                      <button
                        className="btn btn-secondary btn-sm"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#gameDetails${index}`}
                        aria-expanded="false"
                        aria-controls={`gameDetails${index}`}
                        onClick={() => handleGameClick(game)}
                      >
                        ▼
                      </button>
                    </div>
                    <div className="collapse mt-2" id={`gameDetails${index}`}>
                      {gameTournaments[game.name] ? (
                        <div className="container mt-4">
                          {gameTournaments[game.name]?.map((tournament, idx) => (
                            <div key={idx} className="card bg-dark text-white mb-4 shadow-lg rounded">
                              <div className="card-body d-flex flex-column flex-lg-row align-items-center gap-4">
                                <img
                                  src={tournament.league?.image_url || game.image}
                                  alt={tournament.league?.name || 'League Name'}
                                  className="rounded img-fluid"
                                  style={{ width: '130px', height: '130px', objectFit: 'cover' }}
                                />
                                <div className="flex-grow-1 text-center text-lg-start">
                                  <h4 className="card-title text-danger text-uppercase fw-bold">
                                    {tournament.league?.name || 'League Not Available'}
                                  </h4>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <p className="mb-1 text-info fw-bold"><strong>Full Name:</strong> {tournament.full_name || 'Not Available'}</p>
                                      <p className="mb-1 text-info"><strong>Season:</strong> {tournament.season || 'Season Not Available'}</p>
                                      <p className="mb-1 text-info"><strong>Year:</strong> {tournament.year}</p>
                                      <p className="mb-1 text-info"><strong>Country:</strong> {tournament.tournaments[0]?.country || 'Unknown'}</p>
                                      <p className="mb-1 text-info"><strong>Region:</strong> {tournament.tournaments[0]?.region || 'Unknown'}</p>
                                    </div>
                                    <div className="col-md-6">
                                      <p className="mb-1 text-info"><strong>Type:</strong> {tournament.tournaments[0]?.type || 'Unknown'}</p>
                                      <p className="mb-1 text-info"><strong>Tier:</strong> {tournament.tournaments[0]?.tier || 'Unknown'}</p>
                                      <p className="mb-1 text-info"><strong>Has Bracket:</strong> {tournament.tournaments[0]?.has_bracket ? 'Yes' : 'No'}</p>
                                      <p className="mb-1 text-info"><strong>Prizepool:</strong> {tournament.tournaments[0]?.prizepool || 'Not Announced'}</p>
                                      <p className="mb-1 text-info"><strong>Winner Type:</strong> {tournament.winner_type || 'Unknown'}</p>
                                    </div>
                                  </div>
                                  <p className="mb-0 mt-3 text-light fw-bold">
                                    <strong>Dates:</strong> {new Date(tournament.begin_at).toLocaleDateString()} 
                                    {' '}to {tournament.end_at ? new Date(tournament.end_at).toLocaleDateString() : 'Ongoing'}
                                  </p>
                                </div>
                                <div className="d-flex flex-column align-items-center align-items-lg-end gap-2">
                                  <button className="btn btn-danger btn-sm fw-bold text-dark w-auto" onClick={()=> aldaketa(tournament.id)}>View Details</button>
                                  <span className={`badge bg-success fw-bold p-2` }>
                                    {tournament.status || 'Active'}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-white">No tournaments available</p>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Jokoak;
