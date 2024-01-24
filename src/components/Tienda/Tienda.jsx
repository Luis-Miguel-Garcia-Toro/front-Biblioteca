// components/tienda/Tienda.jsx
import React from "react";
import Book from "./Book"; // Asumiendo que tienes un componente Book similar al proporcionado anteriormente
import "./Tienda.css"; // Asegúrate de importar tu archivo de estilos CSS
import { useState } from "react";

const Tienda = () => {
  const libros = [
    {
      id: 1,
      title: "El Secreto de las Sombras",
      author: "Isabella Ramírez",
      category: "Misterio",
      price: 19.99,
      image:
        "https://4.bp.blogspot.com/-22jh5KmQugY/V67VgIEfSqI/AAAAAAAAAR8/HI56xICmGQAE1D2TpC_oOi7sOlMnsWQewCLcB/s1600/9788498387544.jpg",
    },
    {
      id: 2,
      title: "Sueños Perdidos",
      author: "Alejandro Morales",
      category: "Drama",
      price: 24.99,
      image:
        "https://4.bp.blogspot.com/-22jh5KmQugY/V67VgIEfSqI/AAAAAAAAAR8/HI56xICmGQAE1D2TpC_oOi7sOlMnsWQewCLcB/s1600/9788498387544.jpg",
    },
    {
      id: 3,
      title: "La Última Profecía",
      author: "Carlos González",
      category: "Ciencia Ficción",
      price: 25.99,
      image:
        "https://4.bp.blogspot.com/-22jh5KmQugY/V67VgIEfSqI/AAAAAAAAAR8/HI56xICmGQAE1D2TpC_oOi7sOlMnsWQewCLcB/s1600/9788498387544.jpg",
    },
    {
      id: 4,
      title: "Bajo la Luna Azul",
      author: "María Rodríguez",
      category: "Romance",
      price: 1.99,
      image:
        "https://4.bp.blogspot.com/-22jh5KmQugY/V67VgIEfSqI/AAAAAAAAAR8/HI56xICmGQAE1D2TpC_oOi7sOlMnsWQewCLcB/s1600/9788498387544.jpg",
    },
    {
      id: 5,
      title: "El Misterio del Tiempo",
      author: "Javier Fernández",
      category: "Fantasía",
      price: 4.99,
      image:
        "https://4.bp.blogspot.com/-22jh5KmQugY/V67VgIEfSqI/AAAAAAAAAR8/HI56xICmGQAE1D2TpC_oOi7sOlMnsWQewCLcB/s1600/9788498387544.jpg",
    },
    {
      id: 6,
      title: "Caminos Entrelazados",
      author: "Laura Sánchez",
      category: "Romance",
      price: 15.99,
      image:
        "https://4.bp.blogspot.com/-22jh5KmQugY/V67VgIEfSqI/AAAAAAAAAR8/HI56xICmGQAE1D2TpC_oOi7sOlMnsWQewCLcB/s1600/9788498387544.jpg",
    },
    {
      id: 7,
      title: "La Sombra del Viento",
      author: "Carlos Ruiz Zafón",
      category: "Misterio",
      price: 29.99,
      image:
        "https://4.bp.blogspot.com/-22jh5KmQugY/V67VgIEfSqI/AAAAAAAAAR8/HI56xICmGQAE1D2TpC_oOi7sOlMnsWQewCLcB/s1600/9788498387544.jpg",
    },
    {
      id: 8,
      title: "Cien años de soledad",
      author: "Gabriel García Márquez",
      category: "Ficción",
      price: 35.99,
      image:
        "https://4.bp.blogspot.com/-22jh5KmQugY/V67VgIEfSqI/AAAAAAAAAR8/HI56xICmGQAE1D2TpC_oOi7sOlMnsWQewCLcB/s1600/9788498387544.jpg",
    },
    {
      id: 9,
      title: "1984",
      author: "George Orwell",
      category: "Ciencia Ficción",
      price: 21.99,
      image:
        "https://4.bp.blogspot.com/-22jh5KmQugY/V67VgIEfSqI/AAAAAAAAAR8/HI56xICmGQAE1D2TpC_oOi7sOlMnsWQewCLcB/s1600/9788498387544.jpg",
    },
    {
      id: 10,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      category: "Drama",
      price: 18.99,
      image:
        "https://4.bp.blogspot.com/-22jh5KmQugY/V67VgIEfSqI/AAAAAAAAAR8/HI56xICmGQAE1D2TpC_oOi7sOlMnsWQewCLcB/s1600/9788498387544.jpg",
    },
    {
      id: 11,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      category: "Drama",
      price: 27.99,
      image:
        "https://4.bp.blogspot.com/-22jh5KmQugY/V67VgIEfSqI/AAAAAAAAAR8/HI56xICmGQAE1D2TpC_oOi7sOlMnsWQewCLcB/s1600/9788498387544.jpg",
    },
    {
      id: 12,
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      category: "Fantasía",
      price: 22.99,
      image:
        "https://4.bp.blogspot.com/-22jh5KmQugY/V67VgIEfSqI/AAAAAAAAAR8/HI56xICmGQAE1D2TpC_oOi7sOlMnsWQewCLcB/s1600/9788498387544.jpg",
    },
    {
      id: 13,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      category: "Drama",
      price: 20.99,
      image:
        "https://4.bp.blogspot.com/-22jh5KmQugY/V67VgIEfSqI/AAAAAAAAAR8/HI56xICmGQAE1D2TpC_oOi7sOlMnsWQewCLcB/s1600/9788498387544.jpg",
    },
    {
      id: 14,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      category: "Fantasía",
      price: 26.99,
      image:
        "https://4.bp.blogspot.com/-22jh5KmQugY/V67VgIEfSqI/AAAAAAAAAR8/HI56xICmGQAE1D2TpC_oOi7sOlMnsWQewCLcB/s1600/9788498387544.jpg",
    },
    {
      id: 15,
      title: "The Da Vinci Code",
      author: "Dan Brown",
      category: "Misterio",
      price: 24.99,
      image:
        "https://4.bp.blogspot.com/-22jh5KmQugY/V67VgIEfSqI/AAAAAAAAAR8/HI56xICmGQAE1D2TpC_oOi7sOlMnsWQewCLcB/s1600/9788498387544.jpg",
    },
    {
      id: 16,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      category: "Romance",
      price: 19.99,
      image:
        "https://4.bp.blogspot.com/-22jh5KmQugY/V67VgIEfSqI/AAAAAAAAAR8/HI56xICmGQAE1D2TpC_oOi7sOlMnsWQewCLcB/s1600/9788498387544.jpg",
    },
    {
      id: 17,
      title: "The Shining",
      author: "Stephen King",
      category: "Terror",
      price: 28.99,
      image:
        "https://4.bp.blogspot.com/-22jh5KmQugY/V67VgIEfSqI/AAAAAAAAAR8/HI56xICmGQAE1D2TpC_oOi7sOlMnsWQewCLcB/s1600/9788498387544.jpg",
    },
    {
      id: 18,
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      category: "Fantasía",
      price: 33.99,
      image:
        "https://4.bp.blogspot.com/-22jh5KmQugY/V67VgIEfSqI/AAAAAAAAAR8/HI56xICmGQAE1D2TpC_oOi7sOlMnsWQewCLcB/s1600/9788498387544.jpg",
    },
    {
      id: 19,
      title: "Brave New World",
      author: "Aldous Huxley",
      category: "Ciencia Ficción",
      price: 23.99,
      image:
        "https://4.bp.blogspot.com/-22jh5KmQugY/V67VgIEfSqI/AAAAAAAAAR8/HI56xICmGQAE1D2TpC_oOi7sOlMnsWQewCLcB/s1600/9788498387544.jpg",
    },
    {
      id: 20,
      title: "The Hitchhiker's Guide to the Galaxy",
      author: "Douglas Adams",
      category: "Ciencia Ficción",
      price: 17.99,
      image:
        "https://4.bp.blogspot.com/-22jh5KmQugY/V67VgIEfSqI/AAAAAAAAAR8/HI56xICmGQAE1D2TpC_oOi7sOlMnsWQewCLcB/s1600/9788498387544.jpg",
    },
  ];
  const obtenerCategoriasUnicas = () => {
    const categorias = new Set();
    libros.forEach((libro) => {
      categorias.add(libro.category);
    });
    return Array.from(categorias);
  };

  const obtenerAutoresUnicos = () => {
    const autores = new Set();
    libros.forEach((libro) => {
      autores.add(libro.author);
    });
    return Array.from(autores);
  };

  const categoriasUnicas = obtenerCategoriasUnicas();
  const autoresUnicos = obtenerAutoresUnicos();

  // Estados para mantener el filtro actual
  const [filtroCategoria, setFiltroCategoria] = useState("todos");
  const [filtroAutor, setFiltroAutor] = useState("todos");
  const [busqueda, setBusqueda] = useState("");

  // Función para aplicar los filtros
  const aplicarFiltros = () => {
    // Filtrar libros según la categoría, el autor y la búsqueda
    const librosFiltrados = libros.filter(
      (libro) =>
        (filtroCategoria === "todos" || libro.category === filtroCategoria) &&
        (filtroAutor === "todos" || libro.author === filtroAutor) &&
        (libro.title.toLowerCase().includes(busqueda.toLowerCase()) ||
          libro.author.toLowerCase().includes(busqueda.toLowerCase()))
    );

    return librosFiltrados;
  };

  return (
    <div className="tienda container mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-500">Tienda de Libros</h1>
      {/* Controles de filtrado por categoría, autor y búsqueda */}
      <div className="controles-filtro flex flex-wrap justify-center gap-4">
        <div className="flex items-center">
          <span className="font-bold text-blue-950">
            Filtrar por Categoría:
          </span>
          <select
            className="p-2 border rounded"
            onChange={(e) => setFiltroCategoria(e.target.value)}
          >
            <option value="todos">Todos</option>
            {categoriasUnicas.map((categoria, index) => (
              <option key={index} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center">
          <span className="font-bold text-blue-950">Filtrar por Autor:</span>
          <select
            className="p-2 border rounded"
            onChange={(e) => setFiltroAutor(e.target.value)}
          >
            <option value="todos">Todos</option>
            {autoresUnicos.map((autor, index) => (
              <option key={index} value={autor}>
                {autor}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center">
          <span className="font-bold text-blue-950">Buscar:</span>
          <input
            type="text"
            placeholder="Título o autor"
            className="p-2 border rounded"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {aplicarFiltros().map((libro) => (
          <Book key={libro.id} {...libro} />
        ))}
      </div>
    </div>
  );
};

export default Tienda;
