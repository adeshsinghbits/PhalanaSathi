import mongoose from 'mongoose'

const rideSchema = new mongoose.Schema({
  driverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

  startLocation: {
    type: { type: String, enum: ['Point'], required: true },
    coordinates: { type: [Number], required: true }
  },

  endLocation: {
    type: { type: String, enum: ['Point'], required: true },
    coordinates: { type: [Number], required: true }
  },

  route: {
    type: { type: String, enum: ['LineString'], required: true },
    coordinates: { type: [[Number]], required: true }
  },

  departureTime: Date,
  totalSeats: Number,
  availableSeats: Number,
  pricePerSeat: Number,
  status: { type: String, default: "ACTIVE" }

}, { timestamps: true })

rideSchema.index({ startLocation: "2dsphere" })
rideSchema.index({ endLocation: "2dsphere" })
rideSchema.index({ route: "2dsphere" })

const Ride = mongoose.model('Ride', rideSchema)

export default Ride;