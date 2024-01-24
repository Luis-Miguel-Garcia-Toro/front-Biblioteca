import React, { useState, useEffect, useRef } from 'react';
import { BiCartAdd } from "react-icons/bi";

const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
};

const ShoppingCart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  useClickOutside(cartRef, () => {
    setIsCartOpen(false);
  });

  return (
    <div className="relative">
      <button
        className="text-blue-900 p-2 rounded-full"
        onClick={handleCartToggle}
      >
        <BiCartAdd />
      </button>

      {isCartOpen && (
        <div ref={cartRef} className="absolute top-0 right-0 bg-white p-4 border shadow h-48 w-64 md:w-96 mb-1">
          <h3 className="text-xl mb-4">Carrito de Compras</h3>
          {/* Aquí puedes agregar el contenido del carrito, como productos, cantidades, etc. */}
          <p>Producto 1 - Cantidad: 2</p>
          <p>Producto 2 - Cantidad: 1</p>
          {/* ... más contenido del carrito */}
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
