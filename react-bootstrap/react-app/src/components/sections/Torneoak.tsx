import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import cs from "../../assets/img/jokoak/csgo.png"; // Importa la imagen predeterminada

function Torneoak() {
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

  return (
    <Container>
      <br />
      <h2 className="text-center mb-4">🏆 Torneos de Esports 🏆</h2>
      <Row className="justify-content-center">
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
              <Card className="shadow-lg border-0 rounded flex-fill w-100">
                <Card.Img
                  variant="top"
                  src={torneo.league.image_url || cs} // Usa la imagen predeterminada si image_url es null
                  alt={torneo.league.name}
                  className="p-3"
                  style={{
                    height: "200px", // Mantiene la altura constante para todas las imágenes
                    width: "100%", // Hace que la imagen ocupe todo el ancho disponible
                    objectFit: "contain", // Asegura que la imagen se muestre completa sin recortarse
                  }}
                />
                <Card.Body className="text-center" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Card.Title>{torneo.full_name || "Torneo Desconocido"}</Card.Title>
                  <Card.Text>
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
    </Container>
  );
}

export default Torneoak;
