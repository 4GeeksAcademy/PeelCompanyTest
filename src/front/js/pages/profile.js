import React, { useContext } from "react";
import { Link } from "react-router-dom";
import vtr from "../../img/victor-800x800.png";
import rbt from "../../img/ROBERTO-800x800.png";
import vd from "../../img/Gift-de-Vsl.mp4";
import { Context } from "../store/appContext";

export const Profile = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container-fluid text-center p-0">
      <h1 className="mb-4">Quienes somos?</h1>
      <p className="text-align-justify">
        Peel Creative Company, con sede en Barcelona, cuenta con años de experiencia en marketing y creación de contenido profesional para diversas plataformas digitales. En colaboración con Lightbox Studio, ubicado en el Arco de Triunfo de Barcelona,
        ofrecemos estudios personalizados para grabaciones de alta calidad. Nuestros servicios incluyen estrategia de marketing, asesoramiento de guiones, dirección y producción de video y fotografía, así como edición profesional y servicios especializados en meta ads para maximizar el impacto de tu contenido.
      </p>
      <div className="row justify-content-center my-4">
        <div className="col-12 col-md-6 mb-3 d-flex justify-content-center">
          <img className="profile-img img-fluid mx-5" style={{ borderRadius: "7px" }} src={vtr} alt="Victor" />
          <img className="profile-img img-fluid mx-5" style={{ borderRadius: "7px" }} src={rbt} alt="Roberto" />
        </div>
      </div>
      <div className="row align-items-center bg-warning mx-0 my-1" style={{ marginBottom: "10px", padding: "10px", width: "100vw" }}>
        <div className="col-12 col-md-6 text-left">
          <h1>Equipos Audiovisuales Completos<br /><strong>Graba reels, VSLs, webinars, entrevistas, videos corporativos, ads, videos de YouTube y mucho más.</strong><br /></h1>
          <p>Además de adaptar el set a sus preferencias, podrás grabar el contenido de audio y video necesario para impulsar el crecimiento de su negocio. Contamos con una amplia cartera de clientes satisfechos. Aquí presentamos algunos ejemplos:</p>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <video width="100%" height="auto" autoPlay muted playsInline loop controlsList="nodownload noplaybackrate">
            <source src={vd} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};
