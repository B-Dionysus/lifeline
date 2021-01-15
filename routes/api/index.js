const router = require("express").Router();
const eventRoute = require("./event")
const tagRoute = require("./tag")
const userRoute = require("./user")

router.use("/events", eventRoute);
router.use("/tags", tagRoute);
router.use("/user", userRoute);



module.exports = router;
