import Header from "./layouts/header/Header";
import Registro from "./components/register/Registro";
import Login from "./components/login/Login";
import { useEffect, useState } from "react";
import Footer from "./layouts/footer/Footer";
import Books from "./components/libros/Books";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Categorias from "./components/Categorias/Categorias";
import LibroDetalle from "./components/VerDetalle/VerDetalle";
import Profile from "./components/Profile/Profile";
import MisLibros from "./components/MisLibros/MisLibros";
import Tienda from "./components/Tienda/Tienda";
import PrivateRoutes from "./PrivateRoutes";

function App() {
  const [isLoggin, setIsLoggin] = useState(null);

  useEffect(() => {
    const datoLocalStorage = localStorage.getItem("token");
    if (datoLocalStorage) {
      setIsLoggin(true);
    }
  }, [isLoggin]);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
        <Route
          element={
            <PrivateRoutes isAuthenticated={isLoggin} redirectPath="/login" />
          }
        >
          <Route path="/Profile" element={<Profile />} />
          <Route path="/MisLibros" element={<MisLibros />} />
          <Route path="/Tienda" element={<Tienda />} />
        </Route>
        </Routes>
        <Routes>
          <Route path="/register" element={<Registro />} />

          <Route path="/login" element={<Login />} />

          <Route
            path="/"
            element={
              <>
                <Books books={Books} />
              </>
            }
          />

          <Route
            path="/categorias"
            element={
              <>
                <Categorias />
              </>
            }
          />
          <Route
            path="/libro/:book_id"
            component={LibroDetalle}
            element={
              <>
                <LibroDetalle />
              </>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
