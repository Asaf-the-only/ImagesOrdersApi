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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPhotos = void 0;
const axios_1 = __importDefault(require("axios"));
const pixabayApiKey = process.env.PIXABAY_API_KEY || "45640711-3b2c9c3e0dd9ac6e6a5b798be";
const fetchPhotos = (count) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`https://pixabay.com/api/`, {
            params: {
                key: pixabayApiKey,
                per_page: count,
            },
        });
        const photos = response.data.hits.map((hit) => ({
            id: hit.id.toString(),
            url: hit.webformatURL,
        }));
        return photos;
    }
    catch (error) {
        console.error("Error fetching photos from Pixabay:", error);
        throw new Error("Failed to fetch photos from Pixabay");
    }
});
exports.fetchPhotos = fetchPhotos;
