// Guardar en el almacenamiento local (localstorage)

export const SaveInStorage = (key, element) => {
  // Extraer los elementos que están en el localstorage

  let elements = JSON.parse(localStorage.getItem(key));

  // Comprobar que sea un array

  if (Array.isArray(elements)) {
    // Añadir el elemento nuevo en el array
    elements.push(element);
  } else {
    // Crear un array con la nueva película
    elements = [element];
  }

  // Guardar en el localstorage

  localStorage.setItem(key, JSON.stringify(elements));

  // Devolver el objeto guardado

  return element;
};
