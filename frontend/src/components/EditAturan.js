import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditAturan = () => {
  const [idPenyakit, setIdPenyakit] = useState("");
  const [idGejala, setIdGejala] = useState("");
  const [penyakitOptions, setPenyakitOptions] = useState([]);
  const [gejalaOptions, setGejalaOptions] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getAturanById();
    getPenyakit();
    getGejala();
  }, []);

  const getAturanById = async () => {
    const response = await axios.get(`http://localhost:5000/aturan/${id}`);
    setIdPenyakit(response.data.id_penyakit);
    setIdGejala(response.data.id_gejala);
  };

  const getPenyakit = async () => {
    const response = await axios.get("http://localhost:5000/penyakit");
    setPenyakitOptions(response.data);
  };

  const getGejala = async () => {
    const response = await axios.get("http://localhost:5000/gejala");
    setGejalaOptions(response.data);
  };

  const updateAturan = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/aturan/${id}`, {
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
          <h1 className="title has-text-centered">Edit Aturan</h1>
          <form onSubmit={updateAturan}>
            {/* Select Penyakit */}
            <div className="field">
              <label className="label">Pilih Penyakit</label>
              <div className="control">
                <div className="select is-fullwidth">
                  <select
                    value={idPenyakit}
                    onChange={(e) => setIdPenyakit(e.target.value)}
                    required
                  >
                    <option value="">-- Pilih Penyakit --</option>
                    {penyakitOptions.map((penyakit) => (
                      <option key={penyakit.id} value={penyakit.id}>
                        {penyakit.nama_penyakit}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Select Gejala */}
            <div className="field">
              <label className="label">Pilih Gejala</label>
              <div className="control">
                <div className="select is-fullwidth">
                  <select
                    value={idGejala}
                    onChange={(e) => setIdGejala(e.target.value)}
                    required
                  >
                    <option value="">-- Pilih Gejala --</option>
                    {gejalaOptions.map((gejala) => (
                      <option key={gejala.id} value={gejala.id}>
                        {gejala.nama_gejala}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Tombol Submit */}
            <div className="field has-text-centered">
              <button type="submit" className="button is-info is-fullwidth">
                Update Aturan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditAturan;
