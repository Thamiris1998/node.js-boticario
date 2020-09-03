const mongoose = require('../database/mongo');

const dealerSchema = new mongoose.Schema({
  fullName: String,
  cpf: String,
  email: String,
  password: String,
  createdDate: {type: Date, default: Date.now}
})

const dealer = mongoose.model('dealer', dealerSchema)
module.exports = dealer