// Funcionalidad
import {
  ImageHTML,
  ImageCSS,
  ImageExpress,
  ImageJS,
  ImagePostgre,
  ImageReact,
  ImageRedux,
  ImageSeq,
} from "../../assets/Imagenes/index.js";
// Estilos
import "./module.css";
// Componentes
import { NavBar } from "../../components/index.js";

export default () => {
  return (
    <div className="aboutContainer">
      <NavBar />

      <div className="aboutInfo">
        <h2>HENRY's COUNTRIES APP</h2>
        <h3>Created by Ale Miranda</h3>
        <p>
          <strong>
            The visuals and backgrounds are not created by me. Credits for their
            respective authors
          </strong>
        </p>
        <p>
          <strong>Tecnologies</strong>
        </p>
        <div className="tecnologies">
          <img src={ImageHTML} alt="html logo" />
          <img src={ImageCSS} alt="css logo" />
          <img src={ImageExpress} alt="js logo" />
          <img src={ImageJS} alt="react logo" />
          <img src={ImageRedux} alt="redux logo" />
          <img src={ImageExpress} alt="express logo" />
          <img src={ImagePostgre} alt="posgresql logo" />
          <img src={ImageReact} alt="react logo" />
          <img src={ImageSeq} alt="sequelize logo" />
        </div>
      </div>
    </div>
  );
};
