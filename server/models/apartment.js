import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String, required: true },
  sqft: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  floor: { type: Number, required: true },
  rent: { type: Number, required: true },
  collectedrent: { type: Number },
  renter: { type: mongoose.Schema.ObjectId, ref: 'Renter' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Apartment', schema);
