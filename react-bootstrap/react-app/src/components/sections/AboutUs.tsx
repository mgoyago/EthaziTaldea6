import FotoKoldo from "../../assets/img/Koldo.jpg";
import FotoMikel from "../../assets/img/Mikel.jpg";
import FotoIker from "../../assets/img/Iker.png";
import { useState } from "react";
import axios from "axios";
//@ts-ignore
import translations from "../../assets/translate/translations";

interface AboutUsProps {
    currentLanguage: string;
}

function AboutUs({currentLanguage}:AboutUsProps){
  const [formData, setFormData] = useState({
    subject: '',
    email: '',
    mensaje: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
      e.preventDefault();

      try {
          await axios.post('http://127.0.0.1:8000/api/send-email', formData);
          console.log('Correo enviado correctamente');
      } catch (error) {
          console.error('Error al enviar el correo', error);
          alert('Hubo un error al enviar el correo.');
      }
  };

  
    const language = translations[currentLanguage];
    return(
        <div className="form-container bg-black position-relative w-100 pt-5 pb-3 overflow-hidden px-3 h-sm-auto">
          <br></br>
          <br></br>
        <div className="row pt-5 d-flex justify-content-around">
          <div className="col-md-4 text-white z-1 ms-1">
            <h2>{language.form[0]}</h2>
            <p style={{textAlign:"justify" }}>{language.form[1]}</p>
          </div>
          <div style={{ width: "32%" }}></div>
        </div>

        <div className="row pt-5 d-flex justify-content-around">
          <div className="col-md-4 text-white z-1 ms-1 ms-lg-5 me-lg-5">
            <h2>{language.form[2]}</h2>
            <div className="formulario-kontainer bg-dark p-4 rounded">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="kontsulta" className="form-label text-white">
                  {language.form[3]}
                </label>
                <select
                  id="kontsulta"
                  name="subject"
                  className="form-select input-pertsonalizatua"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    {language.form[4]}
                  </option>
                  <option value="Orokorra">{language.form[5]}</option>
                  <option value="Laguntza">{language.form[6]}</option>
                </select>
              </div>

              <div className="row">
                <div className="col-md-12 mb-3">
                  <label htmlFor="posta" className="form-label text-white">
                    {language.form[14]} <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    id="posta"
                    name="email"
                    className="form-control input-pertsonalizatua"
                    placeholder="Idatzi hemen"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="mezua" className="form-label text-white">
                  {language.form[15]} <span className="text-danger">*</span>
                </label>
                <textarea
                  id="mezua"
                  name="mensaje"
                  className="form-control input-pertsonalizatua"
                  rows={4}
                  placeholder="Idatzi hemen"
                  required
                  value={formData.mensaje}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-outline-danger w-100">
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