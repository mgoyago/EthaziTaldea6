import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import cs from "../../assets/img/jokoak/csgo.png";

interface TorneoakProps {
  setCurrentSection: (section: string) => void;
  setLeagueId: (section: string) => void;
}

function Torneoak({setCurrentSection, setLeagueId}:TorneoakProps) {
  const [torneos, setTorneos] = useState([]);

  useEffect(() => {
    axios
      .get("/api/topLeagues")
      .then((response) => {
        setTorneos(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los torneos:", error);
      });
  }, []);

  function aldaketa(leagueId){
    setLeagueId(leagueId);
    setCurrentSection('liga');
  }

  return (
    <div className="bg-black text-light min-vh-100 ">
      <br />
      <br />
      <br />
      <br />
      <Row className="justify-content-center mx-1">
        {torneos.map((torneo, index) => (
          <Col key={torneo.id} md={6} lg={4} className="mb-4 d-flex" style={{ minHeight: '100%' }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="d-flex flex-column w-100"
            >
              <Card className="shadow-lg border-0 rounded flex-fill w-100 bg-dark text-light" onClick={()=> aldaketa(torneo.id)}>
                <Card.Img
                  variant="top"
                  src={torneo.league.image_url || cs}
                  alt={torneo.league.name}
                  className="p-3"
                  style={{
                    height: "200px",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
                <Card.Body className="d-flex flex-column justify-content-between w-100">
                  <Card.Title className="text-center fw-bold fs-3 text-danger" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
                    {torneo.full_name || "Torneo Desconocido"}
                  </Card.Title>
                  <Card.Text className="text-center">
                    <strong>Juego:</strong> {torneo.videogame.name} 🎮
                    <br />
                    <strong>Año:</strong> {torneo.year} 📅
                    <br />
                    <strong>Inicio:</strong> {new Date(torneo.begin_at).toLocaleDateString()} ⏳
                    <br />
                    <strong>Fin:</strong> {new Date(torneo.end_at).toLocaleDateString()} ⏳
                    <br />
                    {torneo.tournaments && torneo.tournaments.length > 0 && (
                      <div>
                        <strong>Fases:</strong>
                        <div>
                          {torneo.tournaments.map((fase) => (
                            <div key={fase.id}>
                              {fase.name} - {fase.begin_at ? new Date(fase.begin_at).toLocaleDateString() : 'Fecha no disponible'}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Torneoak;
