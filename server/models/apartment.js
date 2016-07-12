/* eslint-disable func-names, no-param-reassign, consistent-return, no-underscore-dangle */
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

schema.statics.sumCollectedRent = function sumCollectedRent(apartments, cb) {
  const sumRent = apartments.reduce((acc, apt) => acc + apt.collectedRent, 0);
  cb(null, sumRent);
};

module.exports = mongoose.model('Apartment', schema);
