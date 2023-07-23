import express from "express";
import Booking from '../models/Booking.js'
import {createBooking, deleteBooking, getBookings} from '../controllers/booking.js'
import { verifyAdmin } from "../utils/verifyToken.js";
const router=express.Router();

//create
router.post("/", verifyAdmin, createBooking)
//delete
router.delete("/:id",verifyAdmin,deleteBooking)
//get 
router.get("/find/:userId",getBookings)





export default router;