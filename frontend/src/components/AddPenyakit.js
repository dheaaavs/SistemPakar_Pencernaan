import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPenyakit = () => {
  const [kode_penyakit, setKodePenyakit] = useState("");
  const [nama_penyakit, setNamaPenyakit] = useState("");
  const [definisi, setDefinisi] = useState("");
  const [solusi, setSolusi] = useState("");
  const navigate = useNavigate();

  const savePenyakit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/add-penyakit", {
        kode_penyakit,
        nama_penyakit,
        definisi,
        solusi,
      });
      navigate("/penyakit");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <div className="box p-5">
          <h1 className="title has-text-centered">Tambah Penyakit</h1>
          <form onSubmit={savePenyakit}>
            <div className="field">
              <label className="label">Kode Penyakit</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={kode_penyakit}
                  onChange={(e) => setKodePenyakit(e.target.value)}
                  placeholder="Contoh: P01"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Nama Penyakit</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={nama_penyakit}
                  onChange={(e) => setNamaPenyakit(e.target.value)}
                  placeholder="Contoh: Maag"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Definisi</label>
              <div className="control">
                <textarea
                  className="textarea"
                  value={definisi}
                  onChange={(e) => setDefinisi(e.target.value)}
                  placeholder="Penjelasan tentang penyakit"
                  required
                ></textarea>
              </div>
            </div>
            <div className="field">
              <label className="label">Solusi</label>
              <div className="control">
                <textarea
                  className="textarea"
                  value={solusi}
                  onChange={(e) => setSolusi(e.target.value)}
                  placeholder="Penanganan atau pengobatan"
                  required
                ></textarea>
              </div>
            </div>
            <div className="field has-text-centered">
              <button type="submit" className="button is-success is-fullwidth">
                Simpan Penyakit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPenyakit;
