import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DiagnosaList = () => {
  const [diagnosa, setDiagnosa] = useState([]);

  useEffect(() => {
    getDiagnosa();
  }, []);

  const getDiagnosa = async () => {
    try {
      const response = await axios.get("http://localhost:5000/diagnosa");
      setDiagnosa(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-full">

        {/* Tombol tambah diagnosa */}
        <Link to="/add-diagnosa" className="button is-success mb-3">
          Tambah Diagnosa
        </Link>

        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Hasil Diagnosa</th>
              <th>Tanggal Diagnosa</th>
            </tr>
          </thead>
          <tbody>
            {diagnosa.map((item, index) => (
              <tr key={item.id_diagnosa}>
                <td>{index + 1}</td>
                <td>{item.nama_user}</td>
                <td>{item.hasil_diagnosa}</td>
                <td>{new Date(item.tanggal_diagnosa).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiagnosaList;