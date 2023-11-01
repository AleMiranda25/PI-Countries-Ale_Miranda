// Funcionalidad
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { postActivity, searchByName } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
// Estilos
import "./module.css";
// Componentes
import { NavBar, Footer } from "../../components/index.js";

export default () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [pais, setPais] = useState("");
  const paises = useSelector((state) => state.countries);
  const activities = useSelector((state) => state.activities);

  const [form, setForm] = useState({
    name: "",
    difficulty: 1,
    season: "",
    duration: 24,
    countries: [],
  });

  console.log(form);
  // const [error, setError] = useState({
  //   name: "",
  //   difficulty: 1,
  //   season: "",
  //   duration: 24,
  // });

  const handlerChange = (event) => {
    const value = event.target.value;
    setPais(value);
    dispatch(searchByName(pais));
  };

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({
      ...form,
      [property]: value,
    });
  };

  const clickImage = () => {
    setForm({
      ...form,
    });
  };

  const renderCountryList = () => {
    const paisesFiltrados = paises.filter((country) =>
      country.name.toLowerCase().includes(pais.toLowerCase())
    );

    if (paisesFiltrados.length < 5) {
      return (
        <ul className="countryList">
          {paisesFiltrados.map((country) => (
            <img
              key={country.id}
              onClick={() => {
                clickImage();
                if (!form.countries.includes(country.id))
                  form.countries.push(country.id);
              }}
              src={country.flagImage}
            />
          ))}
        </ul>
      );
    }

    return null;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (activities.find((ele) => ele.name === form.name)) {
      alert("¡Esta actividad ya existe!");
      return;
    }

    alert("¡Actividad creada!");
    dispatch(postActivity(form));
    setForm({
      ...form,
      name: "",
      difficulty: 1,
      season: "",
      duration: 24,
      countries: [],
    });
    navigate("/home");
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
                placeholder=" Escribe aqui el nombre..."
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
              <div className="seasonActSelect">
                <select
                  className="btnSeasonSelect"
                  id="season"
                  name="season"
                  value={form.season || ""}
                  onChange={changeHandler}
                >
                  <option value="" disabled>
                    Selecciona una temporada
                  </option>
                  <option value="Otoño">Otoño</option>
                  <option value="Invierno">Invierno</option>
                  <option value="Primavera">Primavera</option>
                  <option value="Verano">Verano</option>
                </select>
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
                *La actividad debe durar mínimo un día (en horas)
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
                <span>Dificultad seleccionada: {form.difficulty}</span>
              </div>
            </label>
          </div>
          <div className="formCountries">
            <label htmlFor="pais">
              <p>Países(*)</p>
              <div className="autoCompleteContainer">
                <div className="formCountrySearch">
                  <p></p>
                  <label htmlFor="countriesId">
                    <input
                      name="countries"
                      id="countries"
                      type="text"
                      placeholder="Escribe un país..."
                      value={pais}
                      autoComplete="off"
                      onChange={handlerChange}
                    />
                  </label>
                  <div>
                    {renderCountryList()}
                    <p>Países agregados: </p>{" "}
                    {form.countries.flatMap((c) => (
                      <p>{c}</p>
                    ))}
                  </div>
                </div>
              </div>
              <span className="messageAlert">
                *Debes seleccionar mínimo un país
              </span>
              <span className="messageError"></span>
            </label>
          </div>
          <div className="containerButton">
            <button
              className="btnConfirmForm"
              type="submit"
              disabled=""
              onClick={handleSubmit}
            >
              PUBLICAR ACTIVIDAD
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};
