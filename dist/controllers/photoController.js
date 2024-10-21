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
exports.getPhotos = void 0;
const photoService_1 = require("../services/photoService");
const cacheService_1 = require("../services/cacheService");
const getPhotos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const count = parseInt(req.params.count, 10);
    const cacheKey = `photos_${count}`;
    try {
        const cachedPhotos = (0, cacheService_1.getCache)(cacheKey);
        if (cachedPhotos) {
            res.json(cachedPhotos);
            return;
        }
        const photos = yield (0, photoService_1.fetchPhotos)(count);
        // Cache the fetched photos for future requests
        (0, cacheService_1.setCache)(cacheKey, photos);
        // Return the freshly fetched photos
        res.json(photos);
    }
    catch (error) {
        // Handle errors by returning a 500 status code and an error message
        res.status(500).json({ error: "Failed to fetch photos" });
    }
});
exports.getPhotos = getPhotos;
