"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrdersByUser = exports.createOrder = void 0;
const orderModel_1 = require("../models/orderModel");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, fullName, address, imageUrls, frameColor, user } = req.body;
        if (!email || !fullName || !address || !imageUrls || !frameColor || !user) {
            res.status(400).json({ error: "Missing required fields" });
        }
        const newOrder = new orderModel_1.Order({
            email,
            fullName,
            address,
            imageUrls,
            frameColor,
            user,
        });
        yield newOrder.save();
        res.status(201).json(newOrder);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to create order" });
    }
});
exports.createOrder = createOrder;
const getOrdersByUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    try {
        const orders = yield orderModel_1.Order.find({ user: userId }).exec();
        res.json(orders);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch orders" });
    }
});
exports.getOrdersByUser = getOrdersByUser;
