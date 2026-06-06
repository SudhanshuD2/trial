import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function InputField({ icon, type, placeholder }) {
  return (
    <div className="relative group">
      <input
        type={type}
        placeholder={placeholder}
        required
        className="w-full pl-10 pr-4 py-3 rounded-xl bg-stone-50 border 
        border-stone-200 text-stone-800 placeholder-stone-400 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all duration-200"
      />
    </div>
  );
}

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

  const users = [
    {
      email: "admin@gmail.com",
      password: "admin123",
      role: "admin",
    },
    {
      email: "agent@gmail.com",
      password: "agent123",
      role: "agent",
    },
    {
      email: "user@gmail.com",
      password: "user123",
      role: "user",
    },
  ];

  const loggedUser = users.find(
    (user) =>
      user.email === email &&
      user.password === password
  );

  if (!loggedUser) {
    alert("Invalid Credentials");
    return;
  }

  setLoading(true);

  setTimeout(() => {
    setLoading(false);

    if (loggedUser.role === "admin") {
      navigate("/admin-dashboard");
    } else if (loggedUser.role === "agent") {
      navigate("/agent-dashboard");
    } else {
      navigate("/dashboard");
    }
  }, 800);
  };

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center bg-stone-100 px-4 relative">

      {/* Soft background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full opacity-40 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-stone-300 rounded-full opacity-30 blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      {/* Card */}
      <div className="relative w-full max-w-md bg-white/80 backdrop-blur-md rounded-3xl shadow-xl shadow-stone-200/80 border border-stone-200/60 px-8 py-10">

        {/* Icon badge
        <div className="flex justify-center mb-5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-md shadow-amber-200">
          </div>
        </div> */}

        {/* Heading */}
        <h2 className="text-2xl font-bold text-stone-800 text-center tracking-tight mb-1">
          Welcome
        </h2>
        <p className="text-sm text-stone-400 text-center mb-7">
          Track and manage your shipments
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-3.5">
          {/* <InputField type="text" placeholder="Username" /> */}
          {/* Input Email */}
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 placeholder-stone-400 
            text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all duration-200"
          />

          {/* Input Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 
            placeholder-stone-400 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all duration-200"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-1 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700
            text-white text-sm font-semibold tracking-wide shadow-md shadow-amber-200 hover:shadow-lg hover:shadow-amber-200 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>

        {/* Forgot */}
        <div className="text-center mt-4">
          <a href="/" className="text-xs text-stone-400 hover:text-amber-600 transition-colors duration-200">
            Forgot your password?
          </a>
        </div>

        <div className="flex items-center gap-3 my-5">
          <span className="flex-1 h-px bg-stone-200" />
          <span className="text-xs text-stone-300">New here?</span>
          <span className="flex-1 h-px bg-stone-200" />
        </div>

        {/* Register */}
        <p className="text-center text-sm text-stone-400">
          Don't have an account?{" "}
          <Link to="/register" className="text-amber-600 hover:text-amber-700 font-semibold transition-colors duration-200">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}