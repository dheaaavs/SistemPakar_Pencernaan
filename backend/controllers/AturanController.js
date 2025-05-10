import Aturan from "../models/AturanModel.js";

// GET ALL
export const getAturan = async (req, res) => {
  try {
    const response = await Aturan.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// GET BY ID
export const getAturanById = async (req, res) => {
  try {
    const response = await Aturan.findOne({
      where: { id: req.params.id },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// CREATE
export const createAturan = async (req, res) => {
  try {
    await Aturan.create(req.body);
    res.status(201).json({ msg: "Aturan Created" });
  } catch (error) {
    console.log(error.message);
  }
};

// UPDATE
export const updateAturan = async (req, res) => {
  try {
    await Aturan.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json({ msg: "Aturan Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

// DELETE
export const deleteAturan = async (req, res) => {
  try {
    await Aturan.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({ msg: "Aturan Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
