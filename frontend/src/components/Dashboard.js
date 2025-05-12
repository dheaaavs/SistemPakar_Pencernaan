import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/");
    }
  }, [navigate]);

  const menuItems = [
    { label: "Gejala", path: "/gejala" },
    { label: "Penyakit", path: "/penyakit" },
    { label: "Aturan", path: "/aturan" },
    { label: "Diagnosa", path: "/diagnosa" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="container is-fluid has-background-light pb-6">
      {/* Navbar */}
      <header className="navbar is-primary is-fixed-top px-5">
        <div className="navbar-brand">
          <span className="navbar-item has-text-weight-bold has-text-white">
            Sistem Pakar Pencernaan
          </span>
        </div>
        <div className="navbar-end">
          {menuItems.map((item) => (
            <a
              key={item.label}
              onClick={() => navigate(item.path)}
              className="navbar-item has-text-white"
              style={{ cursor: "pointer" }}
            >
              {item.label}
            </a>
          ))}
          <a
            className="navbar-item has-text-white"
            style={{ cursor: "pointer" }}
            onClick={() => setShowLogoutModal(true)}
          >
            Logout
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero is-info is-bold mt-6">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Selamat Datang di Sistem Pakar Diagnosa Penyakit Pencernaan</h1>
            <p className="subtitle">Gunakan menu navigasi untuk mulai mengelola data atau melakukan diagnosa.</p>
          </div>
        </div>
      </section>

      {/* Modal Logout */}
      {showLogoutModal && (
        <div className="modal is-active">
          <div className="modal-background" onClick={() => setShowLogoutModal(false)}></div>
          <div className="modal-content box">
            <p className="is-size-5 mb-3">Apakah Anda yakin ingin logout?</p>
            <div className="buttons is-right">
              <button className="button" onClick={() => setShowLogoutModal(false)}>Batal</button>
              <button className="button is-danger" onClick={handleLogout}>Ya</button>
            </div>
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={() => setShowLogoutModal(false)}
          ></button>
        </div>
      )}
    </div>
  );
}
