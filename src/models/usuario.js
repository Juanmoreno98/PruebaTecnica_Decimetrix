const mongoose = require("mongoose")
const { Schema, model } = mongoose
const ObjectId = mongoose.Types.ObjectId;

const Usuario = new Schema({
  _id: {
    type: String,
    default: function () {
      return new ObjectId().toString();
    },
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  address: {
    type: String,
  },
  age: {
    type: Number
  },
  lastname: {
    type: String,
  },
  role: {
    type: String
  }
});



module.exports = model("Usuario", Usuario);
