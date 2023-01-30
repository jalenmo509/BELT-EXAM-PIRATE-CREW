const express = require('express');

const {
  handleGetAllPirates,
  handleCreatePirate,
  handleGetPirateById,
  handleUpdatePirateById,
  handleDeletePirateById
} = require('../controllers/pirate.controller');

const router = express.Router();

router.get('/', handleGetAllPirates);
router.post('/new', handleCreatePirate);
router.get('/:id', handleGetPirateById);
router.put('/:id', handleUpdatePirateById);
router.delete('/:id', handleDeletePirateById);

module.exports = { pirateRouter: router }