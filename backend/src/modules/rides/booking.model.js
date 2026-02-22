const bookingSchema = new mongoose.Schema(
  {
    ride: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ride",
    },

    passenger: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    seatsBooked: Number,

    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);