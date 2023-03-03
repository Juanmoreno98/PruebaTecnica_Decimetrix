const express = require("express")
const server = express()
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

require("./dataBase")


const usuarioRouter = require("./routes/userRouter")
const newMarker = require("./routes/markerRouter")
const localAuth = require("./routes/local-authRouter")


server.use(bodyParser.json())
server.use(morgan("dev"))

server.use(cors())
server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});


server.use("/usuario", usuarioRouter)
server.use("/marcador", newMarker)
server.use("/ingresar", localAuth)




module.exports = server;
