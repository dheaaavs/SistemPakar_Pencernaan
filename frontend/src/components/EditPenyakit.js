import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditPenyakit = () => {
  const [kode_penyakit, setKodePenyakit] = useState("");
  const [nama_penyakit, setNamaPenyakit] = useState("");
  const [definisi, setDefinisi] = useState("");
  const [solusi, setSolusi] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getPenyakitById();
  }, []);

  const updatePenyakit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/penyakit/${id}`, {
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

  const getPenyakitById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/penyakit/${id}`);
      setKodePenyakit(response.data.kode_penyakit);
      setNamaPenyakit(response.data.nama_penyakit);
      setDefinisi(response.data.definisi);
      setSolusi(response.data.solusi);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <div className="box p-5">
          <h1 className="title has-text-centered">Update Penyakit</h1>
          <form onSubmit={updatePenyakit}>
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
                Update Penyakit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPenyakit;
