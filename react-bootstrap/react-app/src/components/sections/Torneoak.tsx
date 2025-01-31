import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

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
      <br></br>
      <h2 className="text-center mb-4">🏆 Torneos de Esports 🏆</h2>
      <Row className="justify-content-center">
        {torneos.map((torneo, index) => (
          <Col key={torneo.id} md={6} lg={4} className="mb-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="shadow-lg border-0 rounded">
                <Card.Img
                  variant="top"
                  src={torneo.league.image_url || "https://via.placeholder.com/300"}
                  alt={torneo.league.name}
                  className="p-3"
                />
                <Card.Body className="text-center">
                  <Card.Title>{torneo.full_name || "Torneo Desconocido"}</Card.Title>
                  <Card.Text>
                    <strong>Juego:</strong> {torneo.videogame.name} 🎮
                    <br />
                    <strong>Año:</strong> {torneo.year} 📅
                    <br />
                    <strong>Inicio:</strong> {new Date(torneo.begin_at).toLocaleDateString()} ⏳
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
