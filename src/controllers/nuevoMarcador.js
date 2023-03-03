const Marker = require("../models/puntosInformacion")


exports.newMarker = async (req,res) => {
  const marker = new Marker(req.body);
  try {
    await marker.save();
    res.status(200).send(marker);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

exports.getAllMarker = async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    const allMarker = await Marker.find({});
      res.status(200).send(allMarker)
  } catch (error) {
    res.status(404).send(error.message);
  }
};

exports.getMarkerOperator = async (req, res) => {
  console.log(req.query.firstName)
  try {
    res.header("Access-Control-Allow-Origin", "*");
    const allMarker = await Marker.findOne({firstname: req.query.firstName});
      res.status(200).send(allMarker)
  } catch (error) {
    res.status(404).send(error.message);
  }
};

