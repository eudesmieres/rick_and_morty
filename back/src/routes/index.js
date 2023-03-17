const { Router } = require("express");
const { postFav, getFavs, deleFav } = require("../controllers/favs");
const { getCharById } = require("../controllers/getCharById");
const { getCharDetail } = require("../controllers/getCharDetail");

const router = Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:detailId", getCharDetail);

router.post("/favs", postFav);
router.get("/favs", getFavs);
router.delete("/favs/:id", deleFav);


module.exports = router;