import Diagnosa from "../models/DiagnosaModel.js";
import Aturan from "../models/AturanModel.js";
import Penyakit from "../models/PenyakitModel.js";

// GET ALL
export const getDiagnosa = async (req, res) => {
  try {
    const response = await Diagnosa.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// GET BY ID
export const getDiagnosaById = async (req, res) => {
  try {
    const response = await Diagnosa.findOne({
      where: { id_diagnosa: req.params.id },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// CREATE dengan forward chaining
export const createDiagnosa = async (req, res) => {
  try {
    const { nama_user, gejala } = req.body;

    // Ambil data aturan
    const aturan = await Aturan.findAll();
    const penyakitData = await Penyakit.findAll();

    // Forward chaining
    const penyakitCounts = {};
    aturan.forEach((a) => {
      if (gejala.includes(a.id_gejala)) {
        penyakitCounts[a.id_penyakit] = (penyakitCounts[a.id_penyakit] || 0) + 1;
      }
    });

    // Tentukan hasil diagnosa
    let hasil = "Tidak ditemukan";
    let maxCount = 0;
    let hasilPenyakitId = null;

    for (const [id, count] of Object.entries(penyakitCounts)) {
      if (count > maxCount) {
        hasilPenyakitId = id;
        maxCount = count;
      }
    }

    if (hasilPenyakitId) {
      const penyakit = penyakitData.find(p => p.id_penyakit == hasilPenyakitId);
      hasil = penyakit ? penyakit.nama_penyakit : `Penyakit ID ${hasilPenyakitId}`;
    }

    // Simpan diagnosa
    await Diagnosa.create({
      nama_user,
      hasil_diagnosa: hasil
    });

    res.status(201).json({ msg: "Diagnosa Created", hasil });

  } catch (error) {
    console.log(error.message);
  }
};

// UPDATE
export const updateDiagnosa = async (req, res) => {
  try {
    await Diagnosa.update(req.body, {
      where: { id_diagnosa: req.params.id },
    });
    res.status(200).json({ msg: "Diagnosa Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

// DELETE
export const deleteDiagnosa = async (req, res) => {
  try {
    await Diagnosa.destroy({
      where: { id_diagnosa: req.params.id },
    });
    res.status(200).json({ msg: "Diagnosa Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
