import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditGejala = () => {
  const [kodeGejala, setKodeGejala] = useState("");
  const [namaGejala, setNamaGejala] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getGejalaById();
  }, []);

  const getGejalaById = async () => {
    const response = await axios.get(`http://localhost:5000/gejala/${id}`);
    setKodeGejala(response.data.kode_gejala);
    setNamaGejala(response.data.nama_gejala);
  };

  const updateGejala = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/gejala/${id}`, {
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
          <h1 className="title has-text-centered">Edit Gejala</h1>
          <form onSubmit={updateGejala}>
            <div className="field">
              <label className="label">Kode Gejala</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={kodeGejala}
                  onChange={(e) => setKodeGejala(e.target.value)}
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
                />
              </div>
            </div>
            <div className="field has-text-centered">
              <button type="submit" className="button is-info is-fullwidth">
                Update Gejala
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditGejala;
