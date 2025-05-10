import Diagnosa from "../models/DiagnosaModel.js";

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
      where: { id: req.params.id },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// CREATE
export const createDiagnosa = async (req, res) => {
  try {
    await Diagnosa.create(req.body);
    res.status(201).json({ msg: "Diagnosa Created" });
  } catch (error) {
    console.log(error.message);
  }
};

// UPDATE
export const updateDiagnosa = async (req, res) => {
  try {
    await Diagnosa.update(req.body, {
      where: { id: req.params.id },
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
      where: { id: req.params.id },
    });
    res.status(200).json({ msg: "Diagnosa Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
