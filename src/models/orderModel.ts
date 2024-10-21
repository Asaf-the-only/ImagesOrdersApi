import mongoose, { Document } from "mongoose"

// Define the structure of an Order
interface Order extends Document {
  email: string
  fullName: string
  address: string
  imageUrls: string[]
  frameColor: string
  user: string 
}

const orderSchema = new mongoose.Schema({
  email: { type: String, required: true },
  fullName: { type: String, required: true },
  address: { type: String, required: true },
  imageUrls: { type: [String], required: true },
  frameColor: { type: String, required: true },
  user: { type: String, required: true },
})

export const OrderModel = mongoose.model<Order>("Order", orderSchema)
