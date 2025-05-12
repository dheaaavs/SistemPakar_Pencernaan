import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DiagnosaForm = () => {
  const [namaUser, setNamaUser] = useState("");
  const [gejalaList, setGejalaList] = useState([]);
  const [selectedGejala, setSelectedGejala] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getGejala();
  }, []);

  const getGejala = async () => {
    const response = await axios.get("http://localhost:5000/gejala");
    setGejalaList(response.data);
  };

  const handleGejalaChange = (e) => {
    const value = parseInt(e.target.value);
    if (e.target.checked) {
      setSelectedGejala([...selectedGejala, value]);
    } else {
      setSelectedGejala(selectedGejala.filter((id) => id !== value));
    }
  };

  const handleDiagnosa = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/add-diagnosa", {
        nama_user: namaUser,
        gejala: selectedGejala
      });
      alert(`Hasil Diagnosa: ${response.data.hasil}`);
      navigate("/diagnosa");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <div className="box p-5">
          <h1 className="title has-text-centered">Form Diagnosa</h1>
          <form onSubmit={handleDiagnosa}>
            <div className="field">
              <label className="label">Nama</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={namaUser}
                  onChange={(e) => setNamaUser(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Pilih Gejala</label>
              <div className="control">
                {gejalaList.map((g) => (
                  <label className="checkbox" key={g.id_gejala}>
                    <input
                      type="checkbox"
                      value={g.id_gejala}
                      onChange={handleGejalaChange}
                    />
                    <span className="ml-2">{g.nama_gejala}</span>
                    <br />
                  </label>
                ))}
              </div>
            </div>

            <div className="field">
              <button type="submit" className="button is-link is-fullwidth">
                Proses Diagnosa
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DiagnosaForm;
