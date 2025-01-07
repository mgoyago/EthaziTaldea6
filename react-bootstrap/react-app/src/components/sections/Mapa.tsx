import { useEffect, useRef } from "react";
import L from "leaflet";
import marcadorIcon from "../../assets/img/Marcador.png"; 
import bernabeuImage from "../../assets/img/Santiago.jpeg"; 
import LONDRES from "../../assets/img/Londres.jpg"; 

const Mapa = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current && mapContainerRef.current) {
      const map = L.map(mapContainerRef.current).setView([40.463667, -3.74922], 5);

      // Añadir la capa base
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);


      const customIcon = L.icon({
        iconUrl: marcadorIcon, 
        iconSize: [40, 40], 
        iconAnchor: [20, 40], 
        popupAnchor: [0, -40], 
      });

      
      const popupContentBernabeu = `
        <div style="text-align: center;">
          <h3>Santiago Bernabéu</h3>
          <p>Capacidad: 77.000 personas</p>
          <p>Campeonato de LoL</p>
          <img src="${bernabeuImage}" alt="Santiago Bernabéu" 
               style="width: 200px; height: auto; margin-top: 8px; border-radius: 8px;" />
        </div>
      `;
      const popupContentLondres = `
        <div style="text-align: center;">
          <h3>Londres</h3>
          <p>Capacidad: 20.000 personas</p>
          <p>Campeonato de LoL</p>
          <img src="${LONDRES}" alt="o2" 
               style="width: 200px; height: auto; margin-top: 8px; border-radius: 8px;" />
        </div>
      `;

      L.marker([40.463667, -3.74922], { icon: customIcon })
        .addTo(map)
        .bindPopup(popupContentBernabeu);

        L.marker([51.5034, 0.0026], { icon: customIcon })
        .addTo(map)
        .bindPopup(popupContentLondres);

      mapRef.current = map;
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div
        ref={mapContainerRef}
        style={{ height: "85vh", width: "100%", marginTop: "-16px" }}
      ></div>
    </div>
  );
};

export default Mapa;
