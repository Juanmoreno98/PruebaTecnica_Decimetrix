const User = require("../models/usuario")

exports.newUser = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.getAllUser = async (req, res) => {
  const { name } = req.query;
  try {
    res.header("Access-Control-Allow-Origin", "*");
    const user = await User.find({});
    if (name) {
      const userFilter = user.filter((user) =>
        user.firstname.toLowerCase().includes(name.toLowerCase())
      );
      if (userFilter.length) {
        return res.status(200).send(userFilter);
      } else {
        res.status(404).send("User Not Found");
      }
    } else {
      res.status(200).send(user);
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
};

exports.getAllOperators = async (req, res) => {
  const { name } = req.query;
  try {
    res.header("Access-Control-Allow-Origin", "*");
    const user = await User.find({role: "Operario"});
    if (name) {
      const userFilter = user.filter((user) =>
        user.firstname.toLowerCase().includes(name.toLowerCase())
      );
      if (userFilter.length) {
        return res.status(200).send(userFilter);
      } else {
        res.status(404).send("User Not Found");
      }
    } else {
      res.status(200).send(user);
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
};
