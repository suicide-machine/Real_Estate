import mongoose from "mongoose"

const residencySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    imageUrls: {
      type: String,
      required: true,
    },
    facilities: {
      type: JSON,
    },
    useRef: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const Residency = mongoose.model("Residency", residencySchema)

export default Residency
