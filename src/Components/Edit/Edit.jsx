import React from "react";

export const Edit = ({ movie, getMovies, setEdit, setListMovies }) => {
  const saveEdit = (e, id) => {
    e.preventDefault();

    // Conseguir el target del evento
    let target = e.target;

    // Obtengo todas las películas del store con la función que ya se desarrolló previamente (la traigo a través de props)
    const storeMovies = getMovies();

    // Buscar el índice del objeto de la película que actualizaré
    const index = storeMovies.findIndex((movie) => movie.id === id);

    // Crear objeto con el id del índice, el título y la descripción del formulario
    let movieUpdate = {
      id,
      title: target.title.value,
      description: target.description.value,
    };

    // Actualizar el elemento con ese índice
    storeMovies[index] = movieUpdate;

    // Guardar el nuevo array de objetos en el localstorage
    localStorage.setItem("movies", JSON.stringify(storeMovies));

    // Actualizar los estados
    setListMovies(storeMovies);
    setEdit(0);
  };

  return (
    <div className="edit-form">
      <h3 className="title-edit">{`Edit Movie: ${movie.title}`}</h3>
      <form onSubmit={(e) => saveEdit(e, movie.id)}>
        <input
          type="text"
          name="title"
          defaultValue={movie.title}
        />

        <textarea
          name="description"
          className="description-edit"
          defaultValue={movie.description}
        />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};
