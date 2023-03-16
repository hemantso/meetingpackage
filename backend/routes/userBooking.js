import express from "express";

import {
  updateBooking,
  deleteBooking,
  getBooking,
  createBooking,
  getBookings,
} from "../controllers/userBooking.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//GET
router.get("/:booking_id", verifyToken, getBooking);

//GET ALL Bookings
router.get("/", verifyToken, getBookings);

//CREATE
router.post("/create", verifyToken, createBooking);

//UPDATE
router.put("/:booking_id",verifyToken, updateBooking);

//DELETE
router.delete("/:booking_id", verifyUser, deleteBooking);

export default router;