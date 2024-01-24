// components/tienda/Book.jsx
import React from 'react';

const Book = ({  title, author, category, price, image  }) => {
  return (
    <div className="flex flex-col items-center max-w-xs bg-white shadow-md rounded-lg overflow-hidden my-4">
      <img className="w-full h-56 object-cover" src={image} alt={`${title} cover`} />
      <div className="p-4 text-center">
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-gray-700 text-sm">{author}</p>
        <p className="text-blue-950 font-semibold text-lg">${price}</p>
        <button className="bg-blue-500 hover:bg-blue-950 text-white py-2 px-4 mt-2 rounded">
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default Book;
