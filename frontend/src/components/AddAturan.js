import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddAturan = () => {
  const [idPenyakit, setIdPenyakit] = useState("");
  const [gejalaList, setGejalaList] = useState(["", ""]); // 2 inputan awal
  const [penyakitOptions, setPenyakitOptions] = useState([]);
  const [gejalaOptions, setGejalaOptions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPenyakit();
    getGejala();
  }, []);

  const getPenyakit = async () => {
    const response = await axios.get("http://localhost:5000/penyakit");
    setPenyakitOptions(response.data);
  };

  const getGejala = async () => {
    const response = await axios.get("http://localhost:5000/gejala");
    setGejalaOptions(response.data);
  };

  const handleGejalaChange = (index, value) => {
    const newGejalaList = [...gejalaList];
    newGejalaList[index] = value;
    setGejalaList(newGejalaList);
  };

  const tambahInputGejala = () => {
    if (gejalaList.length < 3) {
      setGejalaList([...gejalaList, ""]);
    }
  };

  const saveAturan = async (e) => {
    e.preventDefault();
    try {
      // kirim aturan untuk tiap gejala yang dipilih
      await Promise.all(
        gejalaList.map((idGejala) =>
          axios.post("http://localhost:5000/aturan", {
            id_penyakit: idPenyakit,
            id_gejala: idGejala,
          })
        )
      );
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
            {/* Select Gejala */}
            {gejalaList.map((idGejala, index) => (
              <div className="field" key={index}>
                <label className="label">Pilih Gejala {index + 1}</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={idGejala}
                      onChange={(e) => handleGejalaChange(index, e.target.value)}
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
            ))}

            {/* Tombol Tambah Gejala */}
            {gejalaList.length < 3 && (
              <div className="field">
                <button
                  type="button"
                  className="button is-link is-small"
                  onClick={tambahInputGejala}
                >
                  + Tambah Gejala
                </button>
              </div>
            )}

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

            {/* Tombol Submit */}
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
