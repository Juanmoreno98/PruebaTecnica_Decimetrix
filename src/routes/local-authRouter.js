const { Router } = require("express");

const locaAuth = require("../passport/local-auth")

const router = Router()

router.post("/registro", locaAuth.register)
router.post("/login", locaAuth.login)

module.exports = router



