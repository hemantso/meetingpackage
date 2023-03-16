import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    dateCreated: {
      type: Date,
      default: Date.now,
      required: true,
    },
    venueName: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);


export default mongoose.model('Booking', BookingSchema);
