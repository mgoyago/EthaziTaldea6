import { useEffect, useRef, useState } from "react"; 
import L from "leaflet";

import OverWatch from "../../assets/img/marcador/OverwatchMarcador.png";
import Valorant from "../../assets/img/marcador/ValorantMarcador.png";
import dota2 from "../../assets/img/marcador/Dota2Marcador.png";
import LOL from "../../assets/img/marcador/LolMarcador.png";
import fifa from "../../assets/img/marcador/EAsportsMarcador.png";
import rocket from "../../assets/img/marcador/RocketLeagueMarcador.png";

 


const Mapa = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);


  const countries = [
    { name: "España", coords: [40.463667, -3.74922] as [number, number] },
    { name: "Reino Unido", coords: [51.5034, -0.0026] as [number, number] },
    { name: "Francia", coords: [46.603354, 1.888334] as [number, number] },
    { name: "Alemania", coords: [51.165691, 10.451526] as [number, number] },
    { name: "Suecia", coords: [60.128161, 18.643501] as [number, number] },
    { name: "Corea del Sur", coords: [35.907757, 127.766922] as [number, number] },
    { name: "China", coords: [35.86166, 104.195397] as [number, number] },
    { name: "Estados Unidos", coords: [37.09024, -95.712891] as [number, number] },
    { name: "Brasil", coords: [-14.235004, -51.92528] as [number, number] },
    { name: "Japón", coords: [36.204824, 138.252924] as [number, number] },
    { name: "Dinamarca", coords: [56.26392, 9.501785] as [number, number] },
    { name: "Polonia", coords: [51.919438, 19.145136] as [number, number] },
    { name: "Australia", coords: [-25.274398, 133.775136] as [number, number] },
    { name: "Canadá", coords: [56.130366, -106.346771] as [number, number] },
    { name: "Rusia", coords: [61.52401, 105.318756] as [number, number] },
    { name: "Turquía", coords: [38.963745, 35.243322] as [number, number] },
    { name: "India", coords: [20.593684, 78.96288] as [number, number] },
    { name: "Indonesia", coords: [-0.789275, 113.921327] as [number, number] },
    { name: "Tailandia", coords: [15.870032, 100.992541] as [number, number] },
    { name: "Filipinas", coords: [12.879721, 121.774017] as [number, number] },
    { name: "Malasia", coords: [4.210484, 101.975766] as [number, number] },
    { name: "Vietnam", coords: [14.058324, 108.277199] as [number, number] },
  ];
  


  useEffect(() => {
    if (!mapRef.current && mapContainerRef.current) {
      const map = L.map(mapContainerRef.current).setView([40.463667, -3.74922], 5);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      const RocketLeague = L.icon({
        iconUrl: rocket,
        iconSize: [60, 60],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
      });

      const Overwatch = L.icon({
        iconUrl: OverWatch,
        iconSize: [60, 60],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
      });

      const valorant = L.icon({
        iconUrl: Valorant,
        iconSize: [60, 60],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
      });
      const dota = L.icon({
        iconUrl: dota2,
        iconSize: [60, 60],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
      });

      const EA = L.icon({
        iconUrl: fifa,
        iconSize: [60, 60],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
      });

      const lol = L.icon({
        iconUrl: LOL,
        iconSize: [60, 60],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
      });

      

          const popupContentBernabeu = (game: string, date: string) => `
            <div style="text-align: center;">
              <h3>Santiago Bernabéu</h3>
              <p>Capacidad: 77.000 personas</p>
              <p>${game}</p>
              <p>Fecha: ${date}</p>
              <img src="{bernabeuImage}" alt="Santiago Bernabéu" 
                  style="width: 200px; height: auto; margin-top: 8px; border-radius: 8px;" />
            </div>
          `;

          const popupContentLondonFinal = (game: string, date: string) => `
            <div style="text-align: center;">
              <h3>O2 Arena, Londres</h3>
              <p>Capacidad: 20.000 personas</p>
              <p>${game}</p>
              <p>Fecha: ${date}</p>
              <img src="{londonImage}" alt="O2 Arena" 
                  style="width: 200px; height: auto; margin-top: 8px; border-radius: 8px;" />
            </div>
          `;

          const popupContentBerlin = (game: string, date: string) => `
            <div style="text-align: center;">
              <h3>Riot Games Arena, Berlín</h3>
              <p>Capacidad: 500 personas</p>
              <p>${game}</p>
              <p>Fecha: ${date}</p>
              <img src="{berlinImage}" alt="Riot Games Arena" 
                  style="width: 200px; height: auto; margin-top: 8px; border-radius: 8px;" />
            </div>
          `;

          const popupContentCopenhagen = (game: string, date: string) => `
            <div style="text-align: center;">
              <h3>Royal Arena, Copenhague</h3>
              <p>Capacidad: 16.000 personas</p>
              <p>${game}</p>
              <p>Fecha: ${date}</p>
              <img src="{copenhagenImage}" alt="Royal Arena" 
                  style="width: 200px; height: auto; margin-top: 8px; border-radius: 8px;" />
            </div>
          `;

          const popupContentKatowice = (game: string, date: string) => `
            <div style="text-align: center;">
              <h3>Spodek Arena, Katowice</h3>
              <p>Capacidad: 11.500 personas</p>
              <p>${game}</p>
              <p>Fecha: ${date}</p>
              <img src="{katowiceImage}" alt="Spodek Arena" 
                  style="width: 200px; height: auto; margin-top: 8px; border-radius: 8px;" />
            </div>
          `;

          const popupContentShanghai = (game: string, date: string) => `
            <div style="text-align: center;">
              <h3>Mercedes-Benz Arena, Shanghái</h3>
              <p>Capacidad: 18.000 personas</p>
              <p>${game}</p>
              <p>Fecha: ${date}</p>
              <img src="$shanghaiImage}" alt="Mercedes-Benz Arena" 
                  style="width: 200px; height: auto; margin-top: 8px; border-radius: 8px;" />
            </div>
          `;

          const popupContentSeattle = (game: string, date: string) => `
            <div style="text-align: center;">
              <h3>Climate Pledge Arena, Seattle</h3>
              <p>Capacidad: 17.459 personas</p>
              <p>${game}</p>
              <p>Fecha: ${date}</p>
              <img src="{seattleImage}" alt="Climate Pledge Arena" 
                  style="width: 200px; height: auto; margin-top: 8px; border-radius: 8px;" />
            </div>
          `;

          const popupContentRiyadh = (game: string, date: string) => `
            <div style="text-align: center;">
              <h3>SEF Arena, Riad</h3>
              <p>Capacidad: 22.000 personas</p>
              <p>${game}</p>
              <p>Fecha: ${date}</p>
              <img src="{riyadhImage}" alt="SEF Arena" 
                  style="width: 200px; height: auto; margin-top: 8px; border-radius: 8px;" />
            </div>
          `;

          const popupContentParis = (game: string, date: string) => `
            <div style="text-align: center;">
              <h3>Adidas Arena, París</h3>
              <p>Capacidad: 20.000 personas</p>
              <p>${game}</p>
              <p>Fecha: ${date}</p>
              <img src="{parisImage}" alt="Adidas Arena" 
                  style="width: 200px; height: auto; margin-top: 8px; border-radius: 8px;" />
            </div>
          `;

          L.marker([40.465, -3.749], { icon: lol })
            .addTo(map)
            .bindPopup(popupContentBernabeu("League of Legends World Championship - Semifinal", "28 de octubre de 2025"));

          L.marker([51.504, -0.128], { icon: Overwatch })
            .addTo(map)
            .bindPopup(popupContentLondonFinal("Overwatch World Cup", "Noviembre de 2025"));

          L.marker([52.521, 13.406], { icon: lol })
            .addTo(map)
            .bindPopup(popupContentBerlin("League of Legends MSI", "Mayo de 2025"));

          L.marker([55.677, 12.569], { icon: valorant })
            .addTo(map)
            .bindPopup(popupContentCopenhagen("Valorant Masters", "Agosto de 2025"));

          L.marker([50.266, 19.024], {  })
            .addTo(map)
            .bindPopup(popupContentKatowice("IEM Katowice 2025", "Febrero de 2025"));

          L.marker([31.231, 121.474], { icon: lol })
            .addTo(map)
            .bindPopup(popupContentShanghai("League of Legends Worlds Final", "Noviembre de 2025"));

          L.marker([47.623, -122.355], { icon: dota })
            .addTo(map)
            .bindPopup(popupContentSeattle("The International 2025", "Octubre de 2025"));

          L.marker([24.714, 46.676], { icon: RocketLeague })
            .addTo(map)
            .bindPopup(popupContentRiyadh("Rocket League World Championship", "Diciembre de 2025"));

          L.marker([48.857, 2.352], { icon: valorant })
            .addTo(map)
            .bindPopup(popupContentParis("Valorant Champions", "Septiembre de 2025"));

          mapRef.current = map;

    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCountryClick = (coords: number[]) => {
    if (mapRef.current && coords.length === 2) {
      mapRef.current.setView(coords as [number, number], 5);
    }
  };

  

  return (
    <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
      <div style={{ display: "flex", flexDirection: "column", width: "250px", position: "absolute", right: "10px", top: "80px", zIndex: 1000 }}>
        {(isDropdownOpen || !isMobile) && (
          <div
            style={{
              background: "#000",
              color: "white",
              padding: "15px",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
              maxHeight: "50vh",
              overflowY: "auto",
            }}
          >
            <h3 style={{ textAlign: "center", marginBottom: "10px" }}>Países</h3>
            <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
              {countries.map((country) => (
                <li key={country.name} style={{ marginBottom: "10px" }}>
                  <button
                    onClick={() => handleCountryClick(country.coords)}
                    style={{
                      width: "100%",
                      background: "#000",
                      color: "white",
                      border: "1px solid white",
                      borderRadius: "10px",
                      cursor: "pointer",
                      fontSize: "14px",
                      transition: "all 0.3s ease-in-out",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "red";
                      e.currentTarget.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#000";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    {country.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      
      </div>

      {isMobile && (
        <button
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          style={{
            position: "fixed",
            bottom: "400px",
            right: "20px",
            zIndex: 1001,
            padding: "10px",
            background: "#dc3545",
            color: "#101010",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          {isDropdownOpen ? "×" : "☰"}
        </button>
      )}

      <div
        ref={mapContainerRef}
        style={{
          marginTop: "8.5vh",
          height: "75vh",
          width: "100%",
        }}
      ></div>
    </div>
  );
};

export default Mapa;
