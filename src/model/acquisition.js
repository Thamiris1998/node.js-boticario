const mongoose = require('../database/mongo');
var Schema = mongoose.Schema;

const acquisitionSchema = new mongoose.Schema({
  dealerId: String,
  price: Number,
  status: String,
  percentageCashback: String,
  cashback: Number,
  createdDate: {type: Date, default: Date.now},
})

const acquisition = mongoose.model('acquisition', acquisitionSchema)
module.exports = acquisition