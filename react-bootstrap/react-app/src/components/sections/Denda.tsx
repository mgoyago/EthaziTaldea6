import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";



import teclado from '../../assets/img/teclado.jpg';
import raton from '../../assets/img/raton.jpg';
import camiseta from '../../assets/img/camiseta.jpg';
import camara from '../../assets/img/camara.jpg';
import silla from '../../assets/img/silla (1).jpg';
import cascos from '../../assets/img/cascos.jpg';
import axios from 'axios';

interface Produktua {
  id: number;
  izena: string;
  deskribapena: string;
  puntuak: number;
  irudia: string;
}

const produktuak: Produktua[] = [
  {
    id: 1,
    izena: "Gamer Aurikularrak",
    deskribapena: "Aurikularrak mikrofonoarekin gamers-entzat",
    puntuak: 2000,
    irudia: cascos,
  },
  {
    id: 2,
    izena: "Gaming Teklatua",
    deskribapena: "Teklatu mekanikoa",
    puntuak: 3000,
    irudia: teclado,
  },
  {
    id: 3,
    izena: "RGB Mouse",
    deskribapena: "Sagu optikoa RGB argiekin",
    puntuak: 2500,
    irudia: raton,
  },
  {
    id: 4,
    izena: "Gamer Besoaulkia",
    deskribapena: "Erosotasuna eta estiloa",
    puntuak: 7000,
    irudia: silla,
  },
  {
    id: 5,
    izena: "Esports Kamiseta",
    deskribapena: "Esports taldearen kamiseta",
    puntuak: 150,
    irudia: camiseta,
  },
  {
    id: 6,
    izena: "Streaming Kamera",
    deskribapena: "Kalitate handiko kamera streaming-erako",
    puntuak: 4000,
    irudia: camara,
  },
];
interface TorneoakProps {
  setuserScore: (section: string) => void;
  userScore: string;
}

function Denda ({userScore, setuserScore}:TorneoakProps){
  const [erakutsiModal, setErakutsiModal] = useState<boolean>(false);
  const [hautatutakoProduktua, setHautatutakoProduktua] = useState<Produktua | null>(null);

  const produktuTrukea = (produktua: Produktua) => {
    console.log(produktua.puntuak);
    console.log(userScore);
    if (userScore >= produktua.puntuak) {
      const token = localStorage.getItem("token");
  
    if (!token) {
      console.log("No estás autenticado.");
      alert("Debes estar logueado para agregar puntos.");
      return;
    }
    axios
      .post(
        "/api/users/buy",
        { points: produktua.puntuak },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log("Puntos añadidos exitosamente", response);
        setuserScore(response.data.new_points);
      })
      .catch((error) => {
        console.error("Error al agregar puntos:", error);
      });
    } else {
      alert("Ez dituzu puntu nahiko produktu hau trukatzeko.");
    }
  };

  const erakutsiXehetasunak = (produktua: Produktua) => {
    setHautatutakoProduktua(produktua);
    setErakutsiModal(true);
  };

  return (
    <Container fluid className="container-fluid bg-black position-relative w-100 h-auto  pb-3 px-3" style={{ backgroundColor: "black", height:"100%" }}>
      <br />
      <br />
      <br />
      <br />

      <h1 style={{ textAlign: "center", color: "white", margin: "2rem 0" }}>HILABETE HONETAKO PRODUKTUAK</h1>

      <Row>
        {produktuak.map((produktua) => (
          <Col key={produktua.id} md={4} className="mb-4">
            <Card className="bg-dark text-white" style={{ width: "90%" , margin:"auto" }}>
              <Card.Img src={produktua.irudia} style={{ height: "350px", width: "100%", objectFit: "cover",  }} />
              <Card.Body>
                <Card.Title>{produktua.izena}</Card.Title>
                <Card.Text>{produktua.deskribapena}</Card.Text>
                <Card.Text>Puntuak: {produktua.puntuak}</Card.Text>
                <Button variant="secondary" onClick={() => produktuTrukea(produktua)}>
                  Trukatu puntuekin
                </Button>
                <Button variant="danger" onClick={() => erakutsiXehetasunak(produktua)}>
                  Info
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal show={erakutsiModal} onHide={() => setErakutsiModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Produktuen Xehetasunak</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {hautatutakoProduktua && (
            <>
              <h4>{hautatutakoProduktua.izena}</h4>
              <p>{hautatutakoProduktua.deskribapena}</p>
              <p>Puntuak: {hautatutakoProduktua.puntuak}</p>
            </>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Denda;


