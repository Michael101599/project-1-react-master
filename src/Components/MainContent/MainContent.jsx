import React, { useEffect, useState } from "react";
import { Edit } from "../Edit/Edit";

export const MainContent = ({ listMovies, setListMovies }) => {
  // const [listMovies, setListMovies] = useState([]);
  const [edit, setEdit] = useState(0);

  useEffect(() => {
    console.log("Componentes del listado de películas cargado!");
    getMovies();
  }, []);

  const getMovies = () => {
    let movies = JSON.parse(localStorage.getItem("movies"));

    setListMovies(movies);

    return movies;
  };

  const deleteMovie = (id) => {
    // Conseguir películas almacenadas

    let moviesSaved = getMovies();

    // Filtrar esas películas para que elimine del array la que elija

    let newMoviesArray = moviesSaved.filter(
      (movie) => movie.id !== parseInt(id)
    );

    // Actualizar estado del listado

    setListMovies(newMoviesArray);

    // Actualizar los datos del localstorage

    localStorage.setItem("movies", JSON.stringify(newMoviesArray));
  };

  console.log(listMovies);

  return (
    <>
      {Array.isArray(listMovies) && listMovies !== null ? (
        listMovies.map((movie) => (
          <article className="peli-item" key={movie.id}>
            <h3 className="title">{movie.title}</h3>
            <p className="description">{movie.description}</p>

            <button className="edit" onClick={() => setEdit(movie.id)}>
              Edit
            </button>
            <button className="delete" onClick={() => deleteMovie(movie.id)}>
              Delete
            </button>

            {/* Mostrar formulario de edición */}
            {edit === movie.id && (
              <Edit
                movie={movie}
                getMovies={getMovies}
                setEdit={setEdit}
                setListMovies={setListMovies}
              />
            )}
          </article>
        ))
      ) : (
        <h2>There are not movies</h2>
      )}
    </>
  );
};
