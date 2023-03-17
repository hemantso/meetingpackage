import Booking from "../models/Booking.js";
import User from "../models/User.js";

export const getBookings = async (req,res,next)=>{
  const {id} = req.user;
  const user = await User.findById(id);

  try {
    const bookings = await Booking.find({email: user.email});
    console.log(bookings)
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({
      error: err
    });
  }
}

export const getBooking = async (req,res,next)=>{
  try {
    const booking = await Booking.findById(req.params.id);
    res.status(200).json(booking);
  } catch (err) {
    res.status(500).json({
      error: err
    });
  }
}

export const createBooking = async (req,res,next)=>{
  try {
    const newBooking = new Booking({
      ...req.body,
    });

    await newBooking.save();
    res.status(200).json(newBooking);
  } catch (err) {
    res.status(500).json({
      error: err
    });
  }
}

export const updateBooking = async (req,res,next)=>{
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedBooking);
  } catch (err) {
    res.status(500).json({
      error: err
    });
  }
}
export const deleteBooking = async (req,res,next)=>{
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.status(200).json("Booking has been deleted.");
  } catch (err) {
    res.status(500).json({error: err});
  }
}

