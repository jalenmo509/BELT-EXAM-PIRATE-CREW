const { Pirate } = require("../models/pirate.model");

const createPirate = async (data) => {
  const pirate = await Pirate.create(data);
  return pirate;
};

const getAllPirates = async () => {
  const pirates = await Pirate.find();
  return pirates;
};

const getPirateById = async (pirateId) => {
  const pirate = await Pirate.findById(pirateId);
  return pirate;
};

const deletePirateById = async (pirateId) => {
  const deletedPirate = await Pirate.findByIdAndDelete(pirateId);
  return deletedPirate;
};

const updatePirateById = async (pirateId, data) => {
  const updatedPirate = await Pirate.findByIdAndUpdate(pirateId, data,
    {
      // re-run our validations
      runValidators: true,
    }
  );
  return updatedPirate;
};

module.exports = {
  createPirate,
  getAllPirates,
  getPirateById,
  deletePirateById,
  updatePirateById,
};