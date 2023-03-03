const mongoose = require("mongoose")
const { Schema, model } = mongoose
const ObjectId = mongoose.Types.ObjectId;

const Puntos = new Schema({
  _id: {
    type: String,
    default: function () {
      return new ObjectId().toString();
    },
  },
  img: {
    type: String,
  },
  markerName: {
    type: String,
  },
  comments: {
    type: String,
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  date: {
    type: String
  },
  lng: {
    type: Number
  },
  lat: {
  type: Number
}
});



module.exports = model("Puntos", Puntos);
