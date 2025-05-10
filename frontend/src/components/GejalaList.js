import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GejalaList = () => {
  const [gejala, setGejala] = useState([]);

  useEffect(() => {
    getGejala();
  }, []);

  const getGejala = async () => {
    try {
      const response = await axios.get("http://localhost:5000/gejala");
      setGejala(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteGejala = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/gejala/${id}`);
      getGejala();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-full">
        <Link to={"add-gejala"} className="button is-success mb-3">
          Tambah Gejala
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Kode Gejala</th>
              <th>Nama Gejala</th>
              <th style={{ width: "180px" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {gejala.map((item, index) => (
              <tr key={item.id_gejala}>
                <td>{index + 1}</td>
                <td>{item.kode_gejala}</td>
                <td>{item.nama_gejala}</td>
                <td>
                  <div className="buttons">
                    <Link
                      to={`edit-gejala/${item.id_gejala}`}
                      className="button is-small is-info"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteGejala(item.id_gejala)}
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

export default GejalaList;
