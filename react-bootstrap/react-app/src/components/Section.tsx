import Videobg from "../assets/video/videoplayback (1).mp4";
import './Section.css';
import FotoKoldo from "../assets/img/Koldo.jpg";
import FotoMikel from "../assets/img/Mikel.jpg";
import FotoIker from "../assets/img/Iker.png";

interface SectionProps {
  currentSection: string;
}

function Section({ currentSection }: SectionProps) {
  if (currentSection === "home") {
    return (
      <div className="video-container bg-black overflow-hidden">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={Videobg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          <h1>Ongi etorri</h1>
          <p>Hasi nabigatzen</p>
          <button className="btn btn-danger">Ikusi</button>
        </div>
      </div>
    );
  } else if (currentSection === "form") {
    return (
      <div className="form-container bg-black position-relative w-100 pt-5 pb-3 overflow-hidden">
        <div className="row pt-5 d-flex justify-content-around">
          <div className="col-md-4 text-white z-1 ms-1 ">
            <h2>About us</h2>
            <p>
            Gu, eSports munduari buruzko informazioa eskaintzen duen webgune bat gara. Gure helburua, bideo-jokoen lehiaketa eta txapelketa garrantzitsuen inguruko azken berriak eta gertakarien informazioa eskaintzea da.   Gu, eSports munduari buruzko informazioa eskaintzen duen webgune bat gara. Gure helburua, bideo-jokoen lehiaketa eta txapelketa garrantzitsuen inguruko azken berriak eta gertakarien informazioa eskaintzea da.  
            </p>
          </div>
          <div style={{width:"32%"}}>

          </div>
        </div>

        <div className="row pt-5 d-flex justify-content-around ">
          <div className="col-md-4 text-white z-1 ms-1 ms-lg-5 me-lg-5">
            <h2>KONTAKTATU GUREKIN</h2>
            <div className="formulario-kontainer bg-dark p-4 rounded">
              <form>
                <div className="mb-3">
                  <label htmlFor="kontsulta" className="form-label text-white">
                    Kontsulta mota
                  </label>
                  <select id="kontsulta" className="form-select input-pertsonalizatua">
                    <option selected>Kontsulta mota</option>
                    <option value="orokorra">Orokorra</option>
                    <option value="laguntza">Laguntza</option>
                    <option value="besteak">Besteak</option>
                  </select>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="enpresa" className="form-label text-white">
                      Enpresa
                    </label>
                    <input
                      type="text"
                      id="enpresa"
                      className="form-control input-pertsonalizatua"
                      placeholder="Idatzi hemen"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="enpresaMota" className="form-label text-white">
                      Enpresa mota
                    </label>
                    <select id="enpresaMota" className="form-select input-pertsonalizatua">
                      <option selected>Hautatu</option>
                      <option value="startup">Startup</option>
                      <option value="korporatiboa">Korporatiboa</option>
                      <option value="besteak">Besteak</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="izena" className="form-label text-white">
                      Izena <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="izena"
                      className="form-control input-pertsonalizatua"
                      placeholder="Idatzi hemen"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="posta" className="form-label text-white">
                      Posta elektronikoa <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      id="posta"
                      className="form-control input-pertsonalizatua"
                      placeholder="Idatzi hemen"
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="mezua" className="form-label text-white">
                    Mezua <span className="text-danger">*</span>
                  </label>
                  <textarea
                    id="mezua"
                    className="form-control input-pertsonalizatua"
                    rows={4}
                    placeholder="Idatzi hemen"
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-outline-success w-100">
                    Bidali
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-md-4 text-white z-1 ms-1 ms-lg-5">
            <h2>NORTZUK GARA</h2>
            <div className="d-flex justify-content-center gap-5 flex-wrap">
              <div className="kidea text-center">
                <img
                  src={FotoMikel}
                  alt="Mikel Goya"
                  className="kidea-irudia rounded-circle"
                />
                <h5 className="mt-3">Mikel Goya</h5>
              </div>
              <div className="kidea text-center">
                <img
                  src={FotoKoldo}
                  alt="Koldo Garcia"
                  className="kidea-irudia rounded-circle"
                />
                <h5 className="mt-3">Koldo Garcia</h5>
              </div>
              <div className="kidea text-center">
                <img
                  src={FotoIker}
                  alt="Iker Rodriguez"
                  className="kidea-irudia rounded-circle"
                />
                <h5 className="mt-3">Iker Rodriguez</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

      
export default Section;
