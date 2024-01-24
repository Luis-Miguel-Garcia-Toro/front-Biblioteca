import React, { useState } from "react";
import { RiSearch2Line, RiShoppingCartLine, RiHeartLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCart from "../../components/Carrito/Carrito";

const Header = () => {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const handleConfirmLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    setShowLogoutModal(false);
    navigate("/login");
  };

  const handleCancelLogout = () => {
    setShowLogoutModal(false);
  };

  const isLoggedIn = localStorage.getItem("token") !== null;

  return (
    <header>
      <nav className="text-gray-900 flex items-center justify-between md:justify-center md:gap-8 border-b mb-6 w-full md:w-3/4 lg:w-full pl-14">
        {/* Esquina izquierda: Logo */}
        <Link to="/">
          <img
            src="https://candyshop.publitin.net/redetron/wp-content/uploads/2023/09/BOOKVERSE-1.png"
            alt=""
            className="h-24 w-36"
          />
        </Link>
        
        {/* Centro: Páginas */}
        <div className="flex space-x-4 ml-80">
          <Link to="/" className="nav-link">
            Inicio
          </Link>
          <Link to="/categorias" className="nav-link">
            Categorías
          </Link>
          <Link to="/MisLibros" className="nav-link">
            Mis libros
          </Link>
          <Link to="/Tienda" className="nav-link">
            Tienda
          </Link>
        </div>

        {/* Esquina derecha: Botones */}
        <div className="flex items-center">
          {/* Nuevo icono de Carrito */}
          <RiShoppingCartLine
            className="text-2xl ml-4 cursor-pointer text-blue-500"
          />
          {/* Nuevo icono de Lista de Deseos */}
          <RiHeartLine
            className="text-2xl ml-4 cursor-pointer text-blue-500 mr-4"
          />

          <div className="nav-link">
            {isLoggedIn ? (
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-950 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                onClick={handleLogout}
              >
                Cerrar Sesión
              </button>
            ) : (
              <Link to="/login">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-950 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Iniciar Sesión
                </button>
              </Link>
            )}
          </div>

          {/* Barra de búsqueda */}
          <form className="ml-4 pr-14">
            <div className="w-full relative">
              <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-white" />
              <input
                type="text"
                className="bg-blue-950  py-2 pl-10 pr-5 rounded-lg text-white outline-none"
                placeholder="Buscar"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </div>
          </form>
        </div>
      </nav>

      {/* Modal de confirmación de cierre de sesión */}
      {showLogoutModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg">
            <p>¿Estás seguro de que deseas cerrar sesión?</p>
            <div className="flex justify-end mt-4">
              <button className="mr-2" onClick={handleCancelLogout}>
                Cancelar
              </button>
              <button onClick={handleConfirmLogout}>Aceptar</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
