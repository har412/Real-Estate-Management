const mongoose = require('mongoose');

const houseSchema = new mongoose.Schema({
  address: { type: String, required: true },
  name: { type: String, required: true },
  listingType: { type: String, enum: ['Sell', 'Rent'], required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  area: { type: Number, required: true }
});

const House = mongoose.model('houses', houseSchema);

module.exports = House;
