import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const user = import.meta.env.VITE_USERNAME;
  const pass_user = import.meta.env.VITE_PASSWORD;
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false); // Defaultnya false
  const navigate = useNavigate(); // Menggunakan useNavigate untuk mengarahkan pengguna

  useEffect(() => {
    // Redirect jika pengguna sudah login
    if (isLoggedIn == true || localStorage.getItem('isLoggedIn')) {
      navigate("/Message"); // Menggunakan useNavigate untuk mengarahkan pengguna
    }
  }, [isLoggedIn, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    // Cek username dan password statis
    if (username === user && password === pass_user) {
      // Simpan status login ke local storage atau variabel biasa
      localStorage.setItem('isLoggedIn', 'true');
      setLoggedIn(true);
    } else {
      alert('Username atau password salah');
    }
  };

  return (
    <section className="h-screen">
      <div className="container h-full px-6 py-24">
        <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>

          <div className="md:w-8/12 lg:ms-6 lg:w-5/12">
            <form onSubmit={handleLogin}>
              <div className="relative mb-6">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="peer block min-h-[auto] w-full rounded border border-rose-300 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100"
                  placeholder="Username"
                />
              </div>

              <div className="relative mb-6">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="peer block min-h-[auto] w-full rounded border border-rose-300 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100"
                  placeholder="Password"
                />
              </div>

              <button
                type="submit"
                className="inline-block w-full rounded bg-rose-300 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
