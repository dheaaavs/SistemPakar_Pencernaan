import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddGejala = () => {
  const [kodeGejala, setKodeGejala] = useState("");
  const [namaGejala, setNamaGejala] = useState("");
  const navigate = useNavigate();

  const saveGejala = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/gejala", {
        kode_gejala: kodeGejala,
        nama_gejala: namaGejala,
      });
      navigate("/gejala");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <div className="box p-5">
          <h1 className="title has-text-centered">Tambah Gejala</h1>
          <form onSubmit={saveGejala}>
            <div className="field">
              <label className="label">Kode Gejala</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={kodeGejala}
                  onChange={(e) => setKodeGejala(e.target.value)}
                  placeholder="G01"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Nama Gejala</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={namaGejala}
                  onChange={(e) => setNamaGejala(e.target.value)}
                  placeholder="Contoh: Sakit Kepala"
                />
              </div>
            </div>
            <div className="field has-text-centered">
              <button type="submit" className="button is-success is-fullwidth">
                Simpan Gejala
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddGejala;
