import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
} from "../controllers/user.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//GET
router.get("/:id", verifyUser, getUser);

//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

export default router;