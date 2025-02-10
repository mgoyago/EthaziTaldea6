import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Container, Row, Col, Spinner } from "react-bootstrap";
import { motion } from "framer-motion";
import cs from "../../assets/img/jokoak/csgo.png";

interface LigaProps {
  setCurrentSection: (section: string) => void;
  setMatchId: (section: string) => void;
  leagueId: number;
}

function Liga({ leagueId, setMatchId, setCurrentSection}: LigaProps) {
  const [ligaData, setLigaData] = useState<any>(null);
  const [partidos, setPartidos] = useState<any[]>([]);
  const [pastPartidak, setPastPartidak] =useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [mostrarResultado, setMostrarResultado] = useState<{ [key: number]: boolean }>({});
  const [partidosMostrados, setPartidosMostrados] = useState(1);

  useEffect(() => {
    const fetchLeagueData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/api/leagues/${leagueId}`);
        setLigaData(response.data);

        const matchesResponse = await axios.post(`/api/matches`, {
          serie_id: leagueId
        });
        setPartidos(matchesResponse.data);

        const pastMatchesResponse = await axios.post('/api/matches/past', {
          serie_id: leagueId
        });
        setPastPartidak(pastMatchesResponse.data);

      } catch (error) {
        console.error("Error al obtener los datos de la liga o los partidos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeagueData();
  }, [leagueId]);

  const agruparPorFecha = (partidos: any[]) => {
    return partidos.reduce((acc, partido) => {
      const fecha = new Date(partido.begin_at).toLocaleDateString("es-ES");
      if (!acc[fecha]) acc[fecha] = [];
      acc[fecha].push(partido);
      return acc;
    }, {} as { [key: string]: any[] });
  };

  const partidosPorDia = agruparPorFecha(partidos);
  const pastPartidosPorDia = agruparPorFecha(pastPartidak);

  const toggleResultado = (id: number) => {
    setMostrarResultado(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  const cargarMasPartidos = () => {
    setPartidosMostrados(prev => prev + 1);
  };

  if (loading) {
    return <div className="text-center"><br></br><br></br><br></br><Spinner animation="border" variant="light" /> Cargando...</div>;
  }

  if (!ligaData) {
    return <div>No se encontró la liga.</div>;
  }

  function aldaketak(matchId){
    setMatchId(matchId);
    setCurrentSection("partida");
  }

  return (
    <div className="bg-black text-light min-vh-100">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Container>
        <Row className="justify-content-center mx-1">
        <Col md={12} className="mb-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="d-flex flex-column bg-dark text-light rounded shadow-sm mb-4 p-3 border"
          >
            <div className="d-flex justify-content-between align-items-center p-1">
              <img
                src={ligaData?.league?.image_url || cs}
                alt={ligaData?.league?.name || "Liga"}
                style={{ width: "80px", height: "80px" }}
              />
              <div className="text-center" style={{marginLeft: '90px'}}><h1>{ligaData?.league?.name || "Liga"}</h1></div>
              <div className="text-center">
                <h5 className="text-danger">{ligaData?.full_name || "Liga Desconocida"}</h5>
                <p className="mb-0"><strong>Juego:</strong> {ligaData?.videogame?.name || "Desconocido"} 🎮</p>
                <p className="mb-0"><strong>Año:</strong> {ligaData?.year || "Desconocido"} 📅</p>
                <p className="mb-0"><strong>Temporada:</strong> {ligaData?.season || "Desconocida"} 🍂</p>
              </div>
            </div>
            <div className="text-center mt-2 d-flex bg-white text-dark justify-content-between p-1 rounded">
              <div><strong>Inicio:</strong> {new Date(ligaData?.begin_at).toLocaleDateString()} ⏳</div>
              <div><strong>Fin:</strong> {new Date(ligaData?.end_at).toLocaleDateString()} ⏳</div>
            </div>
          </motion.div>
        </Col>
          <Col md={12} className="mb-4">
            <h4 className="text-center text-light">Próximos Partidos</h4>
            {Object.keys(partidosPorDia).length > 0 ? (
              Object.entries(partidosPorDia).map(([dia, partidos]) => (
                <div key={dia} className="mb-3 d-flex flex-column align-items-center">
                  <h5 className="text-center text-danger">{dia}</h5>
                  {partidos.map((partido) => (
                    <motion.div
                      key={partido.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="d-flex flex-column bg-dark text-light rounded shadow-sm mb-2 border w-50"
                      onClick={()=> aldaketak(partido.id)}
                    >
                      <div className="d-flex justify-content-between align-items-center p-1" onClick={()=> aldaketak(partido.id)}>
                        <span><strong>{new Date(partido.begin_at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</strong></span>
                        <span className="d-flex align-items-center">
                          {partido.opponents?.length === 2 ? (
                            <>
                              <div>
                                <span className="me-2">{partido.opponents[0]?.opponent?.acronym || "EQ1"}</span>
                                <img
                                  src={partido.opponents[0]?.opponent?.image_url || cs}
                                  alt={partido.opponents[0]?.opponent?.name || "Equipo A"}
                                  style={{ width: "30px", height: "30px" }}
                                  className="me-2"
                                />
                                <span className="mx-2">/</span>
                                <img
                                  src={partido.opponents[1]?.opponent?.image_url || cs}
                                  alt={partido.opponents[1]?.opponent?.name || "Equipo B"}
                                  style={{ width: "30px", height: "30px" }}
                                  className="ms-2"
                                />
                                <span className="ms-2">{partido.opponents[1]?.opponent?.acronym || "EQ2"}</span>
                              </div>
                            </>
                          ) : (
                            "Equipos por confirmar"
                          )}
                        </span>
                        <span><button onClick={()=> aldaketak(partido.id)}>Stats</button></span>
                      </div>
                      <div className="text-center mt-2 d-flex bg-white d-flex justify-content-between p-1">
                        <img
                          src={ligaData?.league?.image_url || cs}
                          alt={ligaData?.league?.name || "Liga"}
                          style={{ width: "40px", height: "40px" }}
                        />
                        <div className="text-black" style={{marginLeft: '40px'}}><strong>{ligaData?.league?.name || "Liga Desconocida"}</strong></div>
                        <div className="text-black"><strong>{partido.number_of_games ? `Mejor de ${partido.number_of_games}` : "Formato desconocido"}</strong></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))
            ) : (
              <p className="text-center text-light">No hay partidos próximos disponibles.</p>
            )}
          </Col>
          
          <Col md={12} className="mb-4 border-top pt-4">
            <h4 className="text-center text-light">Partidos Pasados</h4>
            {Object.keys(pastPartidosPorDia).length > 0 ? (
              Object.entries(pastPartidosPorDia).slice(0, partidosMostrados).map(([fecha, partidos]) => (
                <div key={fecha} className="mb-3 d-flex flex-column align-items-center">
                  <h5 className="text-center text-warning">{fecha}</h5>
                  {partidos.map((partido) => (
                    <motion.div
                      key={partido.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="d-flex flex-column bg-dark text-light rounded shadow-sm mb-2 border w-50"
                    >
                      <div className="d-flex justify-content-between align-items-center p-1">
                        <span><strong>{new Date(partido.begin_at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</strong></span>
                        <span className="d-flex align-items-center" onClick={() => toggleResultado(partido.id)} style={{ cursor: 'pointer' }}>
                          {partido.opponents?.length === 2 ? (
                            <>
                            <div>
                              <span className="me-2">{partido.opponents[0]?.opponent?.acronym || "EQ1"}</span>
                              <img
                                src={partido.opponents[0]?.opponent?.image_url || cs}
                                alt={partido.opponents[0]?.opponent?.name || "Equipo A"}
                                style={{ width: "30px", height: "30px" }}
                                className="me-2"
                              />
                              {mostrarResultado[partido.id] ? (
                                <>
                                  <span className="me-2"><strong>{partido.results[0].score}</strong></span>
                                  <span className="mx-2">/</span>
                                  <span className="ms-2"><strong>{partido.results[1].score}</strong></span>
                                </>
                              ) : (
                                <button></button>
                              )}
                              <img
                                src={partido.opponents[1]?.opponent?.image_url || cs}
                                alt={partido.opponents[1]?.opponent?.name || "Equipo B"}
                                style={{ width: "30px", height: "30px" }}
                                className="ms-2"
                              />
                              <span className="ms-2">{partido.opponents[1]?.opponent?.acronym || "EQ2"}</span>
                              </div>
                            </>
                          ) : (
                            "Equipos por confirmar"
                          )}
                        </span>
                        <span><button onClick={()=> aldaketak(partido.id)}>Stats</button></span>
                      </div>
                      <div className="text-center mt-2 d-flex bg-white justify-content-between p-1">
                        <img
                          src={ligaData?.league?.image_url || cs}
                          alt={ligaData?.league?.name || "Liga"}
                          style={{ width: "40px", height: "40px" }}
                        />
                        <div className="text-black" style={{ marginLeft: '40px' }}><strong>{ligaData?.league?.name || "Liga Desconocida"}</strong></div>
                        <div className="text-black"><strong>{partido.number_of_games ? `Mejor de ${partido.number_of_games}` : "Formato desconocido"}</strong></div>
                      </div>
                      <div className="text-center mt-2">
                        <button onClick={() => window.open(partido.streams_list[0].raw_url, '_blank')} className="btn btn-secondary w-100 fs-2 h-25 p-0">‣</button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))
            ) : (
              <p className="text-center text-light">No hay partidos pasados disponibles.</p>
            )}
            {Object.keys(pastPartidosPorDia).length > partidosMostrados && (
              <div className="text-center mt-4">
                <button onClick={cargarMasPartidos} className="btn btn-secondary">Cargar más</button>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Liga;