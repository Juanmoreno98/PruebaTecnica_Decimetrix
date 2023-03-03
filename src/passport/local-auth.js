const User = require("../models/usuario");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { firstname, lastname, password, email,role,address, age } = req.body;

  const existsUser = await User.findOne({ email: req.body.email });
  if (existsUser) {
    console.log("User already exists");
    return;
  }

  const generarId =
    Math.random().toString(32).substring(2) + Date.now().toString(32);
  const user = new User({
    firstname,
    lastname,
    password,
    email,
    address,
    age,
    role,
    token: generarId,
  });

  const salt = await bcrypt.genSaltSync(10);
  user.password = await bcrypt.hashSync(user.password, salt);
  await user.save();
  res.status(200).send(user);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (user) {
    const validPassword = await bcrypt.compareSync(password, user.password);
    if (validPassword) {
      const token = jwt.sign(
        {
          id: user.id,
          firstname: user.firstname,
          role: user.role,
          email: user.email,
        },
        "top_secret",
        {
          expiresIn: 60 * 60 * 24,
        }
      );
      res
        .cookie("jwt", token, {
          expires: new Date(Date.now() + 5000),
          httpOnly: true,
        })
        .send(token);
    } else {
      res.send("Incorrect password");
    }
  } else {
    res.send("Incorrect data");
  }
};

