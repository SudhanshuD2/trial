import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

// function UserIcon() {
//   return (
//     <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
//       <circle cx="12" cy="7" r="4" />
//     </svg>
//   );
// }

// function MailIcon() {
//   return (
//     <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
//       <polyline points="22,6 12,13 2,6" />
//     </svg>
//   );
// }

// function LockIcon() {
//   return (
//     <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
//       <path d="M7 11V7a5 5 0 0 1 10 0v4" />
//     </svg>
//   );
// }

function InputField({ icon, type, placeholder }) {
  return (
    <div className="relative group">
      <input
        type={type}
        placeholder={placeholder}
        required
        className="w-full pl-10 pr-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 placeholder-stone-400 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all duration-200"
      />
    </div>
  );
}

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-100 px-4">

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
          <InputField type="text" placeholder="Username" />
          <InputField type="email" placeholder="Email address" />
          <InputField type="password" placeholder="Password" />

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-1 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-sm font-semibold tracking-wide shadow-md shadow-amber-200 hover:shadow-lg hover:shadow-amber-200 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
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

        {/* Divider */}
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