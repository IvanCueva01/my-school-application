function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 p-4">
      <h1 className="mb-6 text-center">
        <img
          src="https://static.vecteezy.com/system/resources/previews/021/401/616/non_2x/student-and-check-mark-icon-and-logo-design-educational-and-institutional-logo-design-template-vector.jpg"
          alt="logo institucional"
          className="w-24 h-24 mb-4 rounded-full shadow-lg"
        />
        <span className="text-white text-2xl font-bold">Bienvenido</span>
      </h1>
      <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 font-medium mb-2"
          >
            Correo
          </label>
          <input
            type="email"
            id="username"
            name="username"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ingresa tu correo"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Ingresar
        </button>
        <p className="mt-4 text-center text-sm text-gray-600">
          ¿Olvidaste tu contraseña?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Recuperar
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;
