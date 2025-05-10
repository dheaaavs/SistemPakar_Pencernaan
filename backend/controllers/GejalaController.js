import Gejala from "../models/GejalaModel.js";

// GET ALL
export const getGejala = async (req, res) => {
  try {
    const response = await Gejala.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// GET BY ID
export const getGejalaById = async (req, res) => {
  try {
    const response = await Gejala.findOne({
      where: { id: req.params.id },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// CREATE
export const createGejala = async (req, res) => {
  try {
    await Gejala.create(req.body);
    res.status(201).json({ msg: "Gejala Created" });
  } catch (error) {
    console.log(error.message);
  }
};

// UPDATE
export const updateGejala = async (req, res) => {
  try {
    await Gejala.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json({ msg: "Gejala Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

// DELETE
export const deleteGejala = async (req, res) => {
  try {
    await Gejala.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({ msg: "Gejala Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
