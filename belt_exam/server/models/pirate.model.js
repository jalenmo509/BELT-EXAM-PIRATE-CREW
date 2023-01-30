const mongoose = require('mongoose');
const PirateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Pirate Name is required.']
    },
    image: {
      type: String,
      required: [true, 'Image URL is required.']
    },
    chests: {
      type: Number,
      required: [true, '# of Treasure Chests is required.']
    },
    catchPhrase: {
      type: String,
      required: [true, 'Catch Phrase is required.']
    },
    position: {
      type: String,
      required: [true, 'Crew Position is required.']
    },
    pegLeg: {
      type: Boolean,
      required: [true, '{PATH} is required.']
    },
    eyePatch: {
      type: Boolean,
      required: [true, '{PATH} is required.']
    },
    hookHand: {
      type: Boolean,
      required: [true, '{PATH} is required.']
    },
  },
  { timestamps: true }
)

const Pirate = mongoose.model('Pirate', PirateSchema);

module.exports = { Pirate };