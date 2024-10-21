import { Request, Response } from "express"
import { OrderModel } from "../models/orderModel"

export const createOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email, fullName, address, imageUrls, frameColor, user } = req.body

    if (!email || !fullName || !address || !imageUrls || !frameColor || !user) {
      res.status(400).json({ error: "Missing required fields" })
      return
    }

    const newOrder = new OrderModel({
      email,
      fullName,
      address,
      imageUrls,
      frameColor,
      user,
    })

    const savedOrder = await newOrder.save()
    res.status(201).json(savedOrder)
  } catch (error) {
    res
      .status(500)
      .json({
        error: "Failed to create order",
        details: error instanceof Error ? error.message : "",
      })
  }
}

export const getOrdersByUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId } = req.params

  try {
    const orders = await OrderModel.find({ user: userId })
    res.json(orders)
  } catch (error) {
    res
      .status(500)
      .json({
        error: "Failed to fetch orders",
        details: error instanceof Error ? error.message : "",
      })
  }
}
