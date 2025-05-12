import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AturanList = () => {
  const [aturan, setAturan] = useState([]);

  useEffect(() => {
    getAturan();
  }, []);

  const getAturan = async () => {
    try {
      const response = await axios.get("http://localhost:5000/aturan");
      setAturan(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAturan = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/aturan/${id}`);
      getAturan();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-full">
        <Link to={"add-aturan"} className="button is-success mb-4">
          + Tambah Aturan
        </Link>
        <div className="table-container">
          <table className="table is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>No</th>
                <th>Gejala</th>
                <th>Penyakit</th>
                <th style={{ width: "180px" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {aturan.length === 0 ? (
                <tr>
                  <td colSpan="4" className="has-text-centered">
                    Data aturan belum tersedia.
                  </td>
                </tr>
              ) : (
                aturan.map((item, index) => (
                  <tr key={item.id_aturan}>
                    <td>{index + 1}</td>
                    <td>{item.nama_gejala}</td>
                    <td>{item.nama_penyakit}</td>
                    <td>
                      <div className="buttons">
                        <Link
                          to={`edit-aturan/${item.id_aturan}`}
                          className="button is-small is-info"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => deleteAturan(item.id_aturan)}
                          className="button is-small is-danger"
                        >
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AturanList;