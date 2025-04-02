import redisClient from "../config/db.js";

export const getCache = async (key) => {
  const data = await redisClient.get(key);
  return data ? JSON.parse(data) : null;
};

export const setCache = async (key, value, expiry = 30) => {
  await redisClient.setEx(key, expiry, JSON.stringify(value));
};  