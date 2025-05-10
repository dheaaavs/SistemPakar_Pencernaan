import Penyakit from "../models/PenyakitModel.js";

// GET ALL
export const getPenyakit = async (req, res) => {
  try {
    const response = await Penyakit.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// GET BY ID
export const getPenyakitById = async (req, res) => {
  try {
    const response = await Penyakit.findOne({
      where: { id: req.params.id },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// CREATE
export const createPenyakit = async (req, res) => {
  try {
    await Penyakit.create(req.body);
    res.status(201).json({ msg: "Penyakit Created" });
  } catch (error) {
    console.log(error.message);
  }
};

// UPDATE
export const updatePenyakit = async (req, res) => {
  try {
    await Penyakit.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json({ msg: "Penyakit Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

// DELETE
export const deletePenyakit = async (req, res) => {
  try {
    await Penyakit.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({ msg: "Penyakit Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
