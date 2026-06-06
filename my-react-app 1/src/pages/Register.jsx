import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center bg-stone-100 px-4 relative">
      <div className="relative w-full max-w-md bg-white/80 backdrop-blur-md rounded-3xl shadow-xl shadow-stone-200/80 border border-stone-200/60 px-8 py-10">
        <h2 className="text-3xl font-extrabold stone-200 text-center mb-2">
          Create Account
        </h2>
        <p className="text-stone-400 text-center text-sm mb-6">
          Join our logistics platform
        </p>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 placeholder-stone-400 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all duration-200"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 placeholder-stone-400 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all duration-200"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 placeholder-stone-400 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all duration-200"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 placeholder-stone-400 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all duration-200"
          />

          <button
            type="submit"
            className="w-full mt-1 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700
            text-white text-sm font-semibold tracking-wide shadow-md shadow-amber-200 hover:shadow-lg hover:shadow-amber-200 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Sign up
          </button>
        </form>

        <div className="flex items-center gap-3 my-5">
          <span className="flex-1 h-px bg-stone-200" />
          <span className="text-xs text-stone-300">
            Already registered?
          </span>
          <span className="flex-1 h-px bg-stone-200" />
        </div>
        <p className="text-center text-sm text-stone-400">
          Are you already registered?{" "}
          <Link to="/login" className="text-amber-600 hover:text-amber-700 font-semibold transition-colors duration-200">
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;