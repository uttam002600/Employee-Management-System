import { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[var(--text-black-100)]">
      <div className="w-full max-w-md p-8 sm:p-12 bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-semibold text-center text-emerald-700 mb-6">
          Log In
        </h1>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col"
        >
          <input
            className="w-full mb-4 p-3 border-2 border-emerald-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent placeholder-gray-400 text-white"
            type="email"
            required
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="w-full mb-6 p-3 border-2 border-emerald-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent placeholder-gray-400 text-white"
            type="password"
            required
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            className="w-full py-3 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition duration-300 shadow-lg"
            type="submit"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
