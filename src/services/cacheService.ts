import NodeCache from "node-cache";

const CACHE_TTL = 600;

const cache = new NodeCache({ stdTTL: CACHE_TTL });

export const getCache = <T>(key: string): T | undefined => {
  return cache.get<T>(key);
}

export const setCache = <T>(key: string, value: T): void => {
  cache.set<T>(key, value);
}

