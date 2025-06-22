"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // Fungsi untuk set cookie user (role) agar bisa dibaca middleware
  function setUserCookie(user) {
    document.cookie = `user=${JSON.stringify({ role: user.role })}; path=/;`;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const username = form.username.value.trim();
    const password = form.password.value.trim();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      if (res.ok) {
        // Store token and user data
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify({
          _id: data.user._id,
          nama_lengkap: data.user.nama_lengkap,
          username: data.user.username,
          role: data.user.role,
          dibuat: data.user.dibuat
        }));

        // Set cookie user agar bisa dibaca middleware
        setUserCookie(data.user);

        // Role-based routing
        if (data.user.role === "admin") {
          router.push("/dashboard/admin");
        } else if (data.user.role === "manager") {
          router.push("/dashboard/manager");
        } else {
          setError("Role tidak valid");
        }
      } else {
        setError(data.message || "Username atau password salah");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Terjadi kesalahan saat login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/image/file_00000000cae86230a06fa67671abba98-removebg-preview.png"
            alt="Logo DP"
            width={120}
            height={120}
            priority
            className="mb-4"
          />
          <h1 className="text-3xl font-bold text-center text-blue-700">
            Login Inventory Buku DP
          </h1>
          <h2 className="text-lg text-gray-600 mt-2">
            Username : admin/prades<br />
            Password : prades29<br />
            Username : manager<br />
            Password : manager123
          </h2>
        </div>

        {error && (
          <div className="mb-4 text-red-600 text-sm text-center bg-red-50 p-2 rounded">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-900"
              placeholder="admin"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none pr-10 text-gray-900"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2 text-sm text-blue-500 hover:underline"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Masuk
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-500">
          &copy; 2025 Sistem Inventory Buku DP
        </p>
      </div>
    </div>
  );
}