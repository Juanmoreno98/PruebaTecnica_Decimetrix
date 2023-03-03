const { Router } = require("express");

const newMarkers =  require("../controllers/nuevoMarcador")

const router = Router();

router.post("/",newMarkers.newMarker)
router.get("/",newMarkers.getAllMarker)
router.get("/operator",newMarkers.getMarkerOperator)



module.exports = router
