import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import endPoints from "../../services/api";

function Login() {
  const { serialize } = useForm();
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (ev) => {
    ev.preventDefault();
    const formData = serialize(ev.target);
    try {
      const response = await axios.post(endPoints.usuario.getLogin, formData, {
        userEmail: userEmail,
        password: password,
      });
      console.log(response);
      const token = response.data.token;

      localStorage.setItem("token", token);
      localStorage.setItem("userEmail", userEmail);

      if (token) {
        setIsLoggedIn(true);
        navigate("/");
      }
      return null;
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md w-full sm:w-3/4 md:w-1/2 lg:w-1/3 max-w-md p-6">
        <h2 className="text-3xl text-center font-semibold text-gray-800 mb-6">
          Iniciar Sesión
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="correoElectronico"
              className="block text-gray-700 font-medium"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="correoElectronico"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="example@gmail.com"
              name="user_email"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="contrasena"
              className="block text-gray-700 font-medium"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="contrasena"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="******"
              name="user_password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between mt-4">
            <button
              type="button"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Iniciar sesión
            </button>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p style={{ marginBottom: "0" }}>¿No tienes cuenta?</p>
              <Link to="/register" className="text-blue-500 hover:underline">
                Registrarme
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
