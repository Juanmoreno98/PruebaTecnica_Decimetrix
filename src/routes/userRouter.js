const { Router } = require("express");
const usuarioController = require("../controllers/createUser")

const router = Router();

router.post("/", usuarioController.newUser)
router.get("/todos", usuarioController.getAllUser)
router.get("/operarios", usuarioController.getAllOperators)



module.exports = router

