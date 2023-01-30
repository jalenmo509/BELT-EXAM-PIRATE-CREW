const { Pirate } = require("../models/pirate.model");
const {
  createPirate,
  getAllPirates,
  getPirateById,
  deletePirateById,
  updatePirateById,
} = require("../services/pirate.service");

const handleCreatePirate = async (req, res) => {
  try {
    const newPirate = await createPirate(req.body);
    return res.json(newPirate);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};

const handleGetAllPirates = async (req, res) => {
  const pirates = await getAllPirates();
  return res.json(pirates);
};

const handleGetPirateById = async (req, res) => {
  const pirate = await getPirateById(req.params.id);
  return res.json(pirate);
};

const handleDeletePirateById = async (req, res) => {
  try {
    const deletedPirate = await deletePirateById(req.params.id);
    return res.json(deletedPirate);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};

const handleUpdatePirateById = async (req, res) => {
  try {
    const updatedPirate = await updatePirateById(
      req.params.id,
      req.body
    );
    return res.json(updatedPirate);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};

module.exports = {
  handleCreatePirate,
  handleGetAllPirates,
  handleGetPirateById,
  handleDeletePirateById,
  handleUpdatePirateById,
};