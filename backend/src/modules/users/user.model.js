import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // BASIC INFORMATION - that applies to both riders and drivers
    fullName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false, // do not return password in queries
    },

    phoneNumber: {
      type: String,
      unique: true,
      sparse: true,
    },

    profileImage: {
      type: String,
      default: null,
    },

    bio: {
      type: String,
      maxlength: 250,
    },

    // ROLE & STATUS - to differentiate between riders, drivers, and admins
    role: {
      type: String,
      enum: ["user", "driver", "admin"],
      default: "user",
    },

    isEmailVerified: {
      type: Boolean,
      default: false,
    },

    isPhoneVerified: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    isBlocked: {
      type: Boolean,
      default: false,
    },

    // DRIVER DETAILS - specific to users with role "driver"
    vehicleDetails: {
      vehicleType: {
        type: String,
      },
      vehicleModel: {
        type: String,
      },
      vehicleNumber: {
        type: String,
        uppercase: true,
      },
      vehicleColor: {
        type: String,
      },
      drivingLicenseNumber: {
        type: String,
      },
      licenseVerified: {
        type: Boolean,
        default: false,
      },
    },

    totalRidesOffered: {
      type: Number,
      default: 0,
    },

    totalRidesBooked: {
      type: Number,
      default: 0,
    },

    // RATING SYSTEM - for drivers, average rating from riders; for riders, average rating from drivers
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    totalReviews: {
      type: Number,
      default: 0,
    },

    // GEO LOCATION (FOR NEARBY SEARCH) - to store the current location of the user (especially drivers) for nearby ride matching
    currentLocation: {
      type: {
        type: String,
        enum: ["Point"],
      },
      coordinates: {
        type: [Number], // [longitude, latitude]
      },
    },

    // ===============================
    // SECURITY & AUTH
    // ===============================
    passwordResetToken: String,
    passwordResetExpires: Date,
    refreshToken: String,

    lastLogin: Date,
  },
  {
    timestamps: true,
  }
);

// ===============================
// GEO INDEX
// ===============================
userSchema.index({ currentLocation: "2dsphere" });

export default mongoose.model("User", userSchema);