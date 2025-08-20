import { useState } from "react";

export default function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Contraseña fija temporal
  const ADMIN_PASS = "verduadmin2025";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASS) {
      setError("");
      onLogin();
    } else {
      setError("Contraseña incorrecta");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-4 p-6 bg-white rounded-xl shadow-lg flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-teal-600 mb-2 text-center">Acceso Administrador</h2>
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Contraseña"
        className="border border-teal-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      {error && <p className="text-pink-600 text-sm text-center">{error}</p>}
      <button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-6 rounded-lg transition-colors">Entrar</button>
    </form>
  );
}
