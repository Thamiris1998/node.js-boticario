const mongoose = require("mongoose");
const uri =
  "mongodb+srv://thamiris:MhYdgmdhLCoB7sLL@cluster0-lnznc.mongodb.net/boticario?retryWrites=true&w=majority";
mongoose
  .connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(result => {
    console.log("MongoDB Conectado");
  })
  .catch(error => {
    console.log(error);
  });
mongoose.Promise = global.Promise;

module.exports = mongoose;
