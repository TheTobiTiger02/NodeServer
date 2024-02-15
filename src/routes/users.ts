import { createUserController } from "../controllers/UserController/createUser";
import { getUserController } from "../controllers/UserController/getUser";
import { getUsersController } from "../controllers/UserController/getUsers"

const express = require("express");

const router = express.Router();

router.get("/", getUsersController);
router.get("/:name", getUserController);
router.post("/", createUserController);

module.exports = router;