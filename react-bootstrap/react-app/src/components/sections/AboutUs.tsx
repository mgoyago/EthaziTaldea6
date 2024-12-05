import FotoKoldo from "../../assets/img/Koldo.jpg";
import FotoMikel from "../../assets/img/Mikel.jpg";
import FotoIker from "../../assets/img/Iker.png";
//@ts-ignore
import translations from "../../assets/translate/translations";

interface AboutUsProps {
    currentLanguage: string;
}

function AboutUs({currentLanguage}:AboutUsProps){
    const language = translations[currentLanguage];
    return(
        <div className="form-container bg-black position-relative w-100 pt-5 pb-3 overflow-hidden px-3">
        <div className="row pt-5 d-flex justify-content-around">
          <div className="col-md-4 text-white z-1 ms-1">
            <h2>{language.form[0]}</h2>
            <p>{language.form[1]}</p>
          </div>
          <div style={{ width: "32%" }}></div>
        </div>

        <div className="row pt-5 d-flex justify-content-around">
          <div className="col-md-4 text-white z-1 ms-1 ms-lg-5 me-lg-5">
            <h2>{language.form[2]}</h2>
            <div className="formulario-kontainer bg-dark p-4 rounded">
              <form>
                <div className="mb-3">
                  <label htmlFor="kontsulta" className="form-label text-white">
                    {language.form[3]}
                  </label>
                  <select
                    id="kontsulta"
                    className="form-select input-pertsonalizatua"
                  >
                    <option selected>{language.form[4]}</option>
                    <option value="orokorra">{language.form[5]}</option>
                    <option value="laguntza">{language.form[6]}</option>
                  </select>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="enpresa" className="form-label text-white">
                      {language.form[7]}
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
                      {language.form[8]}
                    </label>
                    <select
                      id="enpresaMota"
                      className="form-select input-pertsonalizatua"
                    >
                      <option selected>{language.form[9]}</option>
                      <option value="startup">{language.form[10]}</option>
                      <option value="korporatiboa">{language.form[11]}</option>
                      <option value="besteak">{language.form[12]}</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="izena" className="form-label text-white">
                      {language.form[13]} <span className="text-danger">*</span>
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
                      {language.form[14]} <span className="text-danger">*</span>
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
                    {language.form[15]} <span className="text-danger">*</span>
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
                    {language.form[16]}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-md-4 text-white z-1 ms-1 ms-lg-5">
            <h2>{language.form[17]}</h2>
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
export default AboutUs;