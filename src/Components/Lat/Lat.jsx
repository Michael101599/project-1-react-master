import React, { useState } from "react";
import { SaveInStorage } from "../../Helpers/SaveInStorage";

export const Lat = ({ listMovies, setListMovies }) => {
  const [search, setSearch] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [movie, setMovie] = useState({
    title: "",
    description: "",
  });

  const findPeli = (e) => {
    // Crear estado y actualizarlo
    let target = e.target;
    setSearch(target.value);

    // Obtener el listado completo de películas

    // Filtrar para buscar coincidencias
    let moviesFinded = listMovies.filter((movie) => {
      return movie.title.toLowerCase().includes(search.toLowerCase());
    });

    // Comprobar si hay un resultado
    if (search.length <= 1 || moviesFinded <= 0) {
      moviesFinded = JSON.parse(localStorage.getItem("movies"));
      setNotFound(true);
    } else {
      setNotFound(false);
    }

    // Actualizar estado del listado principal con lo que he logrado filtrar
    setListMovies(moviesFinded);
  };

  let addMovie = (e) => {
    e.preventDefault();

    // Conseguir datos del formulario

    let target = e.target;
    let title = target.title.value;
    let description = target.description.value;

    // Crear objeto de la película a guardar

    let movie = {
      id: new Date().getTime(),
      title,
      description,
    };

    // Guardar estado

    setMovie(movie);

    // Actualizar el estado del listado principal

    setListMovies((movies) => {
      return [...movies, movie];
    });

    // Guardar en el almacenamiento local (localstorage)

    SaveInStorage("movies", movie);
  };

  return (
    <>
      <div className="search">
        <h3 className="title">Search: {search}</h3>
        {(notFound === true && search.length > 1) && (
          <span className="not-found">The movie was not found</span>
        )}
        <form>
          <input
            type="text"
            name="search"
            id="search-field"
            autoComplete="off"
            value={search}
            onChange={findPeli}
          />
          <button>Search</button>
        </form>
      </div>

      <div className="add">
        <h3 className="title">Add Movie</h3>

        {movie.title &&
          movie.description &&
          "The movie " + movie.title + " has been created"}

        <form onSubmit={addMovie}>
          <input type="text" placeholder="Title" name="title" id="title" />
          <textarea
            name="description"
            id="description"
            placeholder="Description"
          ></textarea>
          <input type="submit" value="Save" id="save" />
        </form>
      </div>
    </>
  );
};
