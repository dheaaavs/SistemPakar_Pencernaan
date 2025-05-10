import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditAturan = () => {
  const [idPenyakit, setIdPenyakit] = useState("");
  const [idGejala, setIdGejala] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getAturanById();
  }, []);

  const getAturanById = async () => {
    const response = await axios.get(`http://localhost:5000/aturan/${id}`);
    setIdPenyakit(response.data.id_penyakit);
    setIdGejala(response.data.id_gejala);
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
            <div className="field">
              <label className="label">ID Penyakit</label>
              <div className="control">
                <input
                  type="number"
                  className="input"
                  value={idPenyakit}
                  onChange={(e) => setIdPenyakit(e.target.value)}
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
                />
              </div>
            </div>
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
