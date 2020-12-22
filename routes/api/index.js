const router = require("express").Router();
const eventRoute = require("./event")
const tagRoute = require("./tag")

router.use("/events", eventRoute);
router.use("/tags", tagRoute);



module.exports = router;
