const { Router } = require  ("express");
const controller = require ("./controller");

const router = Router();

router.get("/", controller.getAllUsers);
router.get("/user");


module.exports = router;