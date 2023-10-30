// Funcionalidad
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
// Estilos
import "./module.css";
// Componentes
import { NavBar, Footer } from "../../components/index.js";

export default () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  const [form, setForm] = useState({
    name: "",
    difficulty: 1,
    season: "",
    duration: 24,
  });

  const [error, setError] = useState({
    name: "",
    difficulty: 1,
    season: "",
    duration: 24,
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({
      ...form,
      [property]: value,
    });
  };

  return (
    <div className="formContainer">
      <NavBar />
      <div className="formActivity">
        <h1 className="formTitle">Crear Actividad</h1>
        <form className="actForm">
          <div className="nameActContainer">
            <label htmlFor="name">
              <p>Nombre de la Actividad(*)</p>
              <input
                type="text"
                placeholder="Viaje Familiar"
                id="name"
                name="name"
                autoComplete="off"
                value={form.name}
                onChange={changeHandler}
              />
            </label>
            <span className="messageAlert">
              *La actividad debe tener un nombre
            </span>
          </div>

          <div className="seasonActContainer">
            <label>
              <p>Temporada(*):</p>
              <div className="_customSelect_ytz0i_1">
                <div className="_containerButton_1k60t_1">
                  <button className="_button_1k60t_5" type="button">
                    Escoje una temporada
                  </button>
                  <span className="_backButton_1k60t_54"></span>
                </div>
              </div>
            </label>
            <span className="messageAlert">*Debes escoger una temporada</span>
          </div>

          <div className="durationActContainer">
            <label htmlFor="duration">
              <p>Duración de la Actividad(*):</p>
              <input
                type="number"
                id="duration"
                name="duration"
                placeholder="24 horas"
                min="24"
                value={form.duration}
                onChange={changeHandler}
              />
              <span className="messageAlert">
                *La actividad debe durar mínimo un día
              </span>
            </label>
          </div>
          <div className="slideContainer">
            <label htmlFor="difficulty">
              <p>Dificultad</p>
              <div className="difficultySlider">
                <input
                  type="range"
                  min="1"
                  max="5"
                  name="difficulty"
                  id="difficulty"
                  value={form.difficulty}
                  onChange={changeHandler}
                />
                <div className="sliderMarks">
                  <span className="sliderMark">1</span>
                  <span className="sliderMark">2</span>
                  <span className="sliderMark">3</span>
                  <span className="sliderMark">4</span>
                  <span className="sliderMark">5</span>
                </div>
                <span>Nivel de dificultad: {form.difficulty}</span>
              </div>
            </label>
          </div>
          <div className="formCountries">
            <label htmlFor="countries">
              <p>Países(*)</p>
              <div className="autoCompleteContainer">
                <div className="formCountrySearch">
                  <label htmlFor="paisAsignado">
                    <input
                      name="pais"
                      type="text"
                      placeholder="Escribe un país..."
                      value=""
                      onChange={changeHandler}
                    />
                  </label>
                </div>
              </div>
              <span className="messageAlert">
                *Debes seleccionar mínimo un país
              </span>
              <span className="messageError"></span>
            </label>
          </div>
          <div className="containerButton">
            <button className="btnConfirmForm" type="submit" disabled="">
              PUBLICAR ACTIVIDAD
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};
