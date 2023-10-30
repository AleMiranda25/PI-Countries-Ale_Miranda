//Funcionalidad
import { useNavigate, useLocation } from "react-router";
// Estilos
import "./module.css";
//Componentes
import SearchBar from "../SearchBar";

export default () => {
  const navigate = useNavigate();
  const location = useLocation();
  const myFunction = () => {
    var x = document.getElementById("myTopnav");
    x.className === "topnav"
      ? (x.className += " responsive")
      : (x.className = "topnav");
  };
  return (
    <div className="topnav" id="myTopnav">
      <a className="active" onClick={() => navigate("/home")}>
        <i className="fa fa-home" /> Home
      </a>
      <a className="createBtn" onClick={() => navigate("/create")}>
        <i className="fa fa-plus-circle" /> Create Activity
      </a>
      <a onClick={() => navigate("/about")}>
        <i className="fa fa-info-circle" /> About
      </a>
      <a className="exitBtn" onClick={() => navigate("/")}>
        <i className="fa fa-sign-out" /> Exit
      </a>
      <a className="searchBar">
        {location.pathname === "/home" && <SearchBar />}
      </a>
      <a className="icon" onClick={myFunction}>
        <i className="fa fa-bars" />
      </a>
    </div>
  );
};
