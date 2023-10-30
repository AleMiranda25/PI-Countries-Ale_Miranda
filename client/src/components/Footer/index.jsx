// Funcionalidad
import { LinkedInLogo } from "../../assets/Icons/index.js";
// Estilos
import "./module.css";
// Componentes

export default () => {
  return (
    <footer>
      <div>
        <a href="https://www.linkedin.com/in/alemiranda2511/" target="_blank">
          <img src={LinkedInLogo} alt="" />
        </a>
      </div>
      <p>Desarrollado por Ale Miranda</p>
    </footer>
  );
};
