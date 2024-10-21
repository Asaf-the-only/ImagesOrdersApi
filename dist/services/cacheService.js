"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCache = exports.getCache = void 0;
const node_cache_1 = __importDefault(require("node-cache"));
const CACHE_TTL = 600;
const cache = new node_cache_1.default({ stdTTL: CACHE_TTL });
const getCache = (key) => {
    return cache.get(key);
};
exports.getCache = getCache;
const setCache = (key, value) => {
    cache.set(key, value);
};
exports.setCache = setCache;
