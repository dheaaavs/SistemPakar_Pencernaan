import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddAturan = () => {
  const [idPenyakit, setIdPenyakit] = useState("");
  const [idGejala, setIdGejala] = useState("");
  const navigate = useNavigate();

  const saveAturan = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/aturan", {
        id_penyakit: idPenyakit,
        id_gejala: idGejala,
      });
      navigate("/aturan");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <div className="box p-5">
          <h1 className="title has-text-centered">Tambah Aturan</h1>
          <form onSubmit={saveAturan}>
            <div className="field">
              <label className="label">ID Penyakit</label>
              <div className="control">
                <input
                  type="number"
                  className="input"
                  value={idPenyakit}
                  onChange={(e) => setIdPenyakit(e.target.value)}
                  placeholder="ID Penyakit"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">ID Gejala</label>
              <div className="control">
                <input
                  type="number"
                  className="input"
                  value={idGejala}
                  onChange={(e) => setIdGejala(e.target.value)}
                  placeholder="ID Gejala"
                />
              </div>
            </div>
            <div className="field has-text-centered">
              <button type="submit" className="button is-success is-fullwidth">
                Simpan Aturan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAturan;
