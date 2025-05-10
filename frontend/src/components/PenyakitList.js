import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PenyakitList = () => {
  const [penyakit, setPenyakit] = useState([]);

  useEffect(() => {
    getPenyakit();
  }, []);

  const getPenyakit = async () => {
    try {
      const response = await axios.get("http://localhost:5000/penyakit");
      setPenyakit(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePenyakit = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/penyakit/${id}`);
      getPenyakit();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-full">
        <Link to={"add-penyakit"} className="button is-success mb-3">
          Tambah Penyakit
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Kode Penyakit</th>
              <th>Nama Penyakit</th>
              <th>Definisi</th>
              <th>Solusi</th>
              <th style={{ width: "180px" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {penyakit.map((item, index) => (
              <tr key={item.id_penyakit}>
                <td>{index + 1}</td>
                <td>{item.kode_penyakit}</td>
                <td>{item.nama_penyakit}</td>
                <td>{item.definisi}</td>
                <td>{item.solusi}</td>
                <td>
                  <div className="buttons">
                    <Link
                      to={`edit-penyakit/${item.id_penyakit}`}
                      className="button is-small is-info"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deletePenyakit(item.id_penyakit)}
                      className="button is-small is-danger"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PenyakitList;
